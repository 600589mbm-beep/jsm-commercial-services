// UI-only progressive enhancement. Submission remains a standard HTML POST.
// No network requests, file reads, storage, analytics or contact-data collection.
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
function todayInChicago(): string {
  const parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Chicago',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const get = (type:string) => parts.find(p => p.type === type)?.value || '';
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function initWalkthroughForms(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-walkthrough]').forEach(form => {
    if (form.dataset.ready) return;
    const steps = Array.from(form.querySelectorAll<HTMLElement>('[data-step]'));
    const progress = form.querySelector<HTMLElement>('.form-progress');
    const next = form.querySelector<HTMLButtonElement>('[data-next]');
    const back = form.querySelector<HTMLButtonElement>('[data-back]');
    const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
    const errorBox = form.querySelector<HTMLElement>('.form-errors');
    if (!steps.length || !progress || !next || !back || !submit || !errorBox) return;
    const field = (name:string) => form.querySelector<Field>(`[name="${name}"]`)!;
    const weekdays = Array.from(form.querySelectorAll<HTMLInputElement>('[name="cleaning_days"]'));
    let current = 0;
    function constraints():void {
      form.querySelectorAll<HTMLInputElement>('[data-future-date]').forEach(input => {input.min = todayInChicago();});
      const choosing = field('walkthrough_preference').value === 'Choose a preferred date';
      ['walkthrough_date','walkthrough_time','alternate_date'].forEach(name => {field(name).disabled = !choosing;});
      field('walkthrough_date').required = choosing;
      field('walkthrough_time').required = choosing;
      field('building_description').required = field('facility_type').value === 'Other';
      const frequency = field('frequency');
      const oneTime = frequency.value === 'One-time project';
      weekdays.forEach(input => {input.disabled = oneTime; if(oneTime) input.checked = false;});
      const count = weekdays.filter(input => input.checked).length;
      const match = frequency.value.match(/^([1-7]) days? per week$/);
      const expected = match ? Number(match[1]) : null;
      const mismatch = expected !== null && count > 0 && count !== expected;
      frequency.setCustomValidity(mismatch ? `Choose ${expected} cleaning days, or clear the day choices so JSM can recommend a schedule.` : '');
      const dayMessage = form.querySelector<HTMLElement>('.day-message');
      if(dayMessage) dayMessage.textContent = oneTime ? 'Weekly days are not needed for a one-time project.' : mismatch ? `${count} days selected; your frequency is ${expected} per week.` : count ? `${count} preferred days selected.` : 'No specific days selected — JSM can help plan them.';
      const link = field('document_url');
      let valid = true;
      if(link.value.trim()) {try {const parsed = new URL(link.value); valid = parsed.protocol === 'https:' && !parsed.username && !parsed.password;} catch {valid = false;}}
      link.setCustomValidity(valid ? '' : 'Enter an HTTPS document link without a username or password, or use the notes / email option.');
    }
    function clearErrors():void {
      form.querySelectorAll('.field-error').forEach(el => el.remove());
      form.querySelectorAll<HTMLElement>('[aria-invalid]').forEach(el => {el.removeAttribute('aria-invalid'); el.removeAttribute('aria-errormessage');});
      errorBox!.hidden = true;
    }
    function review():void {
      const target = form.querySelector<HTMLElement>('[data-review]');
      if(!target) return;
      const rows = [['Building type',field('facility_type').value || 'Not selected'],['Cleaning',field('frequency').value || 'Not selected'],['Preferred days',weekdays.filter(d => d.checked).map(d => d.value).join(', ') || 'Discuss with JSM'],['Walkthrough',field('walkthrough_preference').value === 'Choose a preferred date' ? `${field('walkthrough_date').value || 'Date needed'} · ${field('walkthrough_time').value || 'Time needed'}` : field('walkthrough_preference').value],['Documents',field('document_delivery').value]];
      target.replaceChildren();
      rows.forEach(([label,text]) => {const dt = document.createElement('dt'); const dd = document.createElement('dd'); dt.textContent = label; dd.textContent = text; target.append(dt,dd);});
    }
    function showStep(index:number,focus=true):void {
      current = Math.max(0,Math.min(index,steps.length-1));
      steps.forEach((step,i) => {step.hidden = i !== current;});
      progress!.querySelectorAll<HTMLButtonElement>('[data-step-link]').forEach((button,i) => {if(i === current) button.setAttribute('aria-current','step'); else button.removeAttribute('aria-current');});
      back!.hidden = current === 0; next!.hidden = current === steps.length-1; submit!.hidden = current !== steps.length-1;
      review();
      if(focus) steps[current].querySelector<HTMLElement>('h3')?.focus();
    }
    function validate(upTo:number):boolean {
      clearErrors(); constraints();
      const invalid:Field[] = [];
      steps.slice(0,upTo+1).forEach(step => step.querySelectorAll<Field>('input,select,textarea').forEach(input => {if(input.willValidate && !input.validity.valid) invalid.push(input);}));
      if(!invalid.length) return true;
      const first = invalid[0]; showStep(steps.findIndex(step => step.contains(first)),false);
      invalid.forEach((input,i) => {input.closest('details')?.setAttribute('open',''); input.setAttribute('aria-invalid','true'); const message = document.createElement('small'); message.className = 'field-error'; message.id = `walkthrough-error-${i}`; message.textContent = input.validationMessage; input.setAttribute('aria-errormessage',message.id); input.insertAdjacentElement('afterend',message);});
      errorBox!.textContent = 'Please check the highlighted fields before continuing.'; errorBox!.hidden = false; first.focus(); return false;
    }
    form.addEventListener('input',() => {constraints(); review();});
    form.addEventListener('change',() => {constraints(); review();});
    next.addEventListener('click',() => {if(validate(current)) showStep(current+1);});
    back.addEventListener('click',() => {clearErrors(); showStep(current-1);});
    progress.querySelectorAll<HTMLButtonElement>('[data-step-link]').forEach(button => button.addEventListener('click',() => {const target = Number(button.dataset.stepLink); if(target <= current || validate(target-1)){clearErrors(); showStep(target);}}));
    form.addEventListener('keydown',event => {if(event.key === 'Enter' && current < steps.length-1 && event.target instanceof HTMLInputElement && !['checkbox','radio','submit'].includes(event.target.type)){event.preventDefault(); next!.click();}});
    form.addEventListener('submit',event => {if(!validate(steps.length-1)) event.preventDefault();});
    constraints(); form.noValidate = true; form.dataset.ready = 'true'; progress.hidden = false;
    const reviewBox = form.querySelector<HTMLElement>('.review-box'); if(reviewBox) reviewBox.hidden = false;
    showStep(0,false);
  });
}

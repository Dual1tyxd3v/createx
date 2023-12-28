// Modal window
const btnSubscribe = document.querySelector('.js-subscribe');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal__container');
const btnCloseModal = document.querySelector('.btn-close');
const susbscribeForm = document.querySelector('.modal__subscribe');
const cvForm = document.querySelector('.modal__cv');
const btnSendCV = document.querySelector('.js-sendCV')

btnSubscribe.addEventListener('click', () => showModal(susbscribeForm));

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hide');
  modalContainer.innerHTML = '';
});

btnSendCV.addEventListener('click', () => showModal(cvForm));

function showModal(template) {
  const form = template.cloneNode(true);
  form.classList.remove('hide');
  modalContainer.append(form);
  modal.classList.remove('hide');

  if (!form.classList.contains('modal__cv')) return;

  const inputFile = form.querySelector('.form__file');
  const labelFile = form.querySelector('.form__label--file');

  inputFile.addEventListener('change', (e) => {
    labelFile.innerHTML = `Attach your CV* -&nbsp;<span class="form__label--active"> (${e.target.files[0].name})</span>`;
  });
}

// Subscribe modal
const btnSubscribe = document.querySelector('.js-subscribe');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal__container');
const btnCloseModal = document.querySelector('.btn-close');
const susbscribeForm = document.querySelector('.modal__subscribe');

btnSubscribe.addEventListener('click', () => {
  modalContainer.innerHTML = '';
  const form = susbscribeForm.cloneNode(true);
  form.classList.remove('hide');
  modalContainer.append(form);
  modal.classList.remove('hide');
});

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hide');
});

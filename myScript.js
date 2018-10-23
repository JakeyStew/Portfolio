const projectContainer = document.querySelector('.project-items');
projectContainer.addEventListener('click', e => {
  e.preventDefault();
  const modalToggle = e.target.closest('.project-link');
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector('.modal-close');

  const modalOpen = _ => {
    modal.classList.add('is-open');
    modal.style.animation = 'modalFadeIn 500ms forwards';
    document.body.style.overflowY = 'hidden';
  };

  const modalClose = _ => {
    modal.classList.remove('is-open');
    modal.removeEventListener('animationend', modalClose);
  }

  closeButton.addEventListener('click', _ => {
    modal.style.animation = 'modalFadeOut 500ms forwards';
    modal.addEventListener('animationend', modalClose);
    document.body.style.overflowY = 'scroll';
  })

  document.addEventListener('keydown', e => {
    if (e.keycode = 27)
    {
      modal.style.animation = 'modalFadeOut 500ms forwards';
      modal.addEventListener('animationend', modalClose);
      document.body.style.overflowY = 'scroll';
    }
  })

  modalOpen();

})

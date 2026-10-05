const modalButtons = document.querySelectorAll('[data-modal]');
const modals = {
  login: document.getElementById('loginModal'),
  register: document.getElementById('registerModal')
};

const openModal = (name) => {
  const modal = modals[name];
  if (modal) modal.classList.add('show');
};

const closeModal = (name) => {
  const modal = modals[name];
  if (modal) modal.classList.remove('show');
};

modalButtons.forEach((button) => {
  button.addEventListener('click', () => openModal(button.dataset.modal));
});

document.querySelectorAll('.modal-close').forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => modal.classList.remove('show'));
  });
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.remove('show');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal').forEach((modal) => modal.classList.remove('show'));
  }
});

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Enviado';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1500);
    }
  });
});

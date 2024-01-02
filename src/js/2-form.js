const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input');
const messageField = form.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

let localStorageData = { email: '', message: '' };

fillForm();

form.addEventListener('submit', submitFunction);

function submitFunction(e) {
  e.preventDefault();
  if (!emailField.value || !messageField.value) {
    return alert('Please fill in all the fields!');
  }
  console.log(localStorage.getItem(localStorageKey));
  localStorage.removeItem(localStorageKey);
  form.reset();
  localStorageData = { email: '', message: '' };
}

form.addEventListener('input', e => {
  localStorageData[e.target.name] = e.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
});

function fillForm() {
  const localStorageSave = JSON.parse(localStorage.getItem(localStorageKey));
  if (localStorageSave) {
    localStorageData = localStorageSave;
    emailField.value = localStorageSave.email;
    messageField.value = localStorageSave.message;
  }
}

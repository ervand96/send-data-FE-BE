const form = document.querySelector('#stripe-login');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const params = new URLSearchParams(formData)
  fetch('http://localhost:4000/form-data', {
    method: 'post',
    body: params,
  }).then((response) => {
    return response.text();
  }).then((text) => {
    console.log(text);
  }).catch((error) => {
    console.log(error);
  })
})
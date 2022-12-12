const formData = new FormData(form);


const btn = document.querySelector('#submit');
const form = document.querySelector('#submit-form');


btn.addEventListener('click', (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log(values);
});
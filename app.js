const h1 = document.querySelector("h1");
h1.classList.add('none');

setTimeout(() => {
    h1.classList.remove('none');
    h1.classList.add('block');
},5000)
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();     //jo b event aye osko cancel krdo, mtkb oage ko refresh krny sy rokta hai or page refresh nahi hota...
});
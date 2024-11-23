let form = document.querySelector('form');
let name;

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();     //jo b event aye osko cancel krdo, mtkb oage ko refresh krny sy rokta hai or page refresh nahi hota...
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);
    console.log(event.target.uname);
    console.log(event.target.uname.value);
    console.log(event.target.email);
    console.log(event.target.email.value);
    console.log(event.target.phone);
    console.log(event.target.phone.value);
    
    
    
      
});
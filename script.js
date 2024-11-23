// Form ko submit krna , data ko access krna and then oss data ko local storage m dalna...

// Step 01--- Get Form:
let form = document.querySelector("form");

// Step 02--- Submit Form:
form.addEventListener("submit", (event) => {

  // Step 03--- Access Form Data:
  console.log(event);
  event.preventDefault(); //jo b event aye osko cancel krdo, mtkb oage ko refresh krny sy rokta hai or page refresh nahi hota...
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

// ====LOCAL STORAGE KI KAHANI =================

// Local Storage ko ab access krna ye hai main kam:
// ismai 2 chezain ati hain 1 tu data ko bejna or dosra data ko uthana...
// bejny klye we use setItem() and nikalny klye we use getItem();
// Ismai data key: value pair ki form m e jata hau:
// let say k mery ps 1 array hai or osk andr mery ps bht sary objects hain, mtlb k mery ps multiple data hai lkin browser m tu tu key value ki form mai data tu hai lkin itna zda multiple data mjy broswer m ni dekhyga islye zrori hai k m isko
// json m convert kro and then fer m osko access kro...

// Why we convert data into json before getting items from local-storage:
// Array k andr iss trhan k objects hai: like data iss form mai hai:

let user = [
    {
        'name': 'noor',
        'email': 'noor@gmail.com',
        'phone': '9876543210'
    }, 
    {
        'name': 'ali',
        'email': 'ali@gmail.com',
        'phone': '9876543211'
    }
]

// stringify 1 method hai jo k basically array m jo data hai osko json m convert kryga..
localStorage.setItem("na", JSON.stringify(user));
console.log(localStorage.getItem("na"));
// ab gya ye array m tha lkin json m convert o k lkin ab mjy chye b ye array m tu i will use parseInt():
console.log(JSON.parse(localStorage.getItem("na")));

// Array sy bdl k -> JSOn mai gya tha and -> JSON sy bdl k Array m wps agya hai...


// ::::::::::::::Local storage ki kahani::::::::::::::::::::::

// // Localstorage setItem syntax:
// localStorage.setItem("na", user)        //na 1 variable hai o k hum islye banaty hain ta k set wala user wala dat ismai jye or hum get k time osko access krly...
// console.log(localStorage.getItem("na"));

// aghr tu meny bs 1 e data bejna hai tu wo tu o jyega osklye hmy json m convert krny ki zrort ni hai:

// localStorage.setItem("n", "hira")        //n 1 variable hai o k hum islye banaty hain ta k set wala user wala dat ismai jye or hum get k time osko access krly...
// console.log(localStorage.getItem("n"));

// aghr tu meny bs 1 e data bejna hai tu wo tu o jyega osklye hmy json m convert krny ki zrort ni hai:
// ab dekho user k andr multiple data hai lkin hum tu key: value ki form mai 1 time mai 1 e data access krksty hain aghr hum essy krygy tu browser osko understand kesy kryga..islye hum phr osko json 
// mai convert krty hain ta k data readable form mai ajye or hum multiple data ko b easily access krsky...


// SUMMARY:
// Ye smjo k hmy jb b object time ka data bejna hai tu hmy json m convert krna e pryga..
// or json tu esa hi k jo array ki form mai data ko json m convert krta hai and bdmai hum wps osko array m convert krk access krskty hain...
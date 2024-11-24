// Form ko submit krna , data ko access krna and then oss data ko local storage m dalna...

// Step 01--- Get Form:
let form = document.querySelector("form");
let main = document.querySelector("#main");
let call = document.querySelector("#call");

// Step 02--- Submit Form:
form.addEventListener("submit", (event) => {
  // Step 03--- Access Form Data:
  let name = event.target.uname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let checkstatus = 0;
  // Step 04--- Save Data in Local Storage:

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  for (const v of userData) {
    if (v.email === email || v.phone === phone) {
      checkstatus = 1;
      break;
    }
  }

  if (checkstatus === 1) {
    alert("Email or Phone Number already exists");
    return;
  }

  // Step 05--- Push Data to Array:
  else {
    userData.push({
      name: name,
      email: email,
      phone: phone,
    });

    // Step 06--- Convert Array to JSON and SetItem to send data:

    localStorage.setItem("userDetails", JSON.stringify(userData));
    event.target.reset();
  }

  DisplayData();
  event.preventDefault();
});

// Step 07--- Display Data on browser:

let DisplayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finalData = "";

  userData.forEach((element, index) => {
    finalData += `
     <div class="items">
            <span onclick = removeData(${index})>&times</span>
            <h5>Name</h5>
            <div>${element.name}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone</h5>
            <div>${element.phone}</div>
        </div>`;
  });

  main.innerHTML = finalData;
};

let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  userData.splice(index, 1);
  localStorage.setItem("userDetails", JSON.stringify(userData));
  DisplayData();
};

call.addEventListener("click", function (e) {
  localStorage.clear("userDetails");
  DisplayData();
});

DisplayData();

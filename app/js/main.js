'use strict';

const modal = document.getElementById("modal-Btn");
const modalForm = document.getElementById("btn");

modalForm.onclick = () => {
  document.getElementById("modal-Btn").style.display = "block";
}



var tabs = document.getElementById("filmtab");
tabs.onclick = () => {
  openTab(event, "films");
}

var tabs = document.getElementById("tvtab");
tabs.onclick = () => {
  openTab(event, 'tvchanels');
}

function openTab(evt, tabName) {
  let i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const loginBtn = document.getElementById("btn");
const formOverlay = document.getElementById("modal-Btn");
const submitBtn = document.getElementById("submit-btn");
const authLogin = document.getElementById("auth-login");

authLogin.style.display = "none";
submitBtn.addEventListener('click', () => {

  if (authLogin.style.display = "none") {
    authLogin.style.display = "flex";
    loginBtn.style.display = "none";
  } else {
    authLogin.style.display = "none";
  }
})

let authLoginBtn = document.getElementById("auth-login__btn");

authLoginBtn.addEventListener('click', () => {
  if (loginBtn.style.display = "none") {
    loginBtn.style.display = "block";
    authLogin.style.display = "none";
  }
})




const inputName = document.getElementById("uname");


inputName.addEventListener('change', (inputValue) => {
  inputValue = inputName.value;
  let authName = document.getElementById('auth-name').innerHTML = inputValue;
  rememberMe(inputValue);
})

const checkBox = document.getElementById('remember');

 let rememberMe = function (inputValue) {
  if (checkBox.checked = true) {
    console.log('check');
    localStorage.setItem('check-name', inputValue);
    if (localStorage.getItem('check-name') != null) {
      let checkName = localStorage.getItem('check-name');
      console.log(checkName);
      let authName = document.getElementById('auth-name').innerHTML = checkName;

    } else {
      let authName = document.getElementById('auth-name').innerHTML = inputValue;
    }
  }
}



   let outerCheck = localStorage.getItem('check-name')
   console.log(outerCheck);

   if (outerCheck) {
     let authName = document.getElementById('auth-name').innerHTML = outerCheck
     authLogin.style.display = "flex";
     loginBtn.style.display = "none";
   }




   $(document).ready(function () {

     $(".fa-search").click(function () {
       $(".container__form-search-btn, .container__formsearch-input").toggleClass("active");
       $("input[type='text']").focus();
     });

   });

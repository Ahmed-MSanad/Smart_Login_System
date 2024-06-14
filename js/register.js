// Inputs
var registerNameInput = document.getElementById('registerName');
var registerEmailInput = document.getElementById('registerEmail');
var registerPasswordInput = document.getElementById('registerPassword');


// faultMessage Alerts
var faultMessage = document.getElementById('faultMessage');


// btns
var signUpBtn = document.getElementById('signUpBtn');


// userList
var userList;

if(localStorage.getItem('userList')){
    userList = JSON.parse(localStorage.getItem('userList'));
}
else{
    userList = [];
}


signUpBtn.addEventListener('click',function(){
    if(registerNameInput.value == '' || registerEmailInput.value == '' || registerPasswordInput.value == ''){
        faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert"> All inputs are required </div>';
        faultMessage.classList.remove('d-none');
    }
    else{
        var newUser = {
            userName: registerNameInput.value,
            userEmail: registerEmailInput.value,
            userPassword: registerPasswordInput.value
        };
    
        for(var i = 0 ; i < userList.length ; i++){
            if(userList[i].userEmail == newUser.userEmail){
                faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert" id="existedEmail">email already exists</div>';
                faultMessage.classList.remove('d-none');
                return;
            }
        }
    
        if(checkUserName() && checkUserEmail() && checkUserPassword()){
            faultMessage.innerHTML = '<div class="alert alert-success text-success py-0" role="alert" id="successEmail">success</div>';
            faultMessage.classList.remove('d-none');
            userList.push(newUser);
            localStorage.setItem('userList',JSON.stringify(userList));
            location.href = 'index.html';
        }
        else{
            return;
        }
    }
});


function checkUserName(){
    var isMatch = registerNameInput.value.match(/^[a-zA-Z0-9]{4,}$/);
    if(isMatch){
        faultMessage.classList.add('d-none');
        registerNameInput.classList.add('is-valid');
        registerNameInput.classList.remove('is-invalid');
        return true;
    }
    else{
        faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert"> invalid user name it must be more than 4 characters and/or numbers only </div>';
        faultMessage.classList.remove('d-none');
        registerNameInput.classList.add('is-invalid');
        registerNameInput.classList.remove('is-valid');
        return false;
    }
}

function checkUserEmail(){
    var isMatch = registerEmailInput.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(isMatch){
        faultMessage.classList.add('d-none');
        registerEmailInput.classList.add('is-valid');
        registerEmailInput.classList.remove('is-invalid');
        return true;
    }
    else{
        faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert"> invalid user email !! a valid form is test@gmail.com </div>';
        faultMessage.classList.remove('d-none');
        registerEmailInput.classList.add('is-invalid');
        registerEmailInput.classList.remove('is-valid');
        return false;
    }
};


function checkUserPassword(){
    var isMatch = registerPasswordInput.value.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);
    if(isMatch){
        faultMessage.classList.add('d-none');
        registerPasswordInput.classList.add('is-valid');
        registerPasswordInput.classList.remove('is-invalid');
        return true;
    }
    else{
        faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert"> Password must contain one digit from 1 to 9, one uppercase letter, one special character, no space, and it must be 8-16 characters long. </div>';
        faultMessage.classList.remove('d-none');
        registerPasswordInput.classList.add('is-invalid');
        registerPasswordInput.classList.remove('is-valid');
        return false;
    }
}


registerNameInput.addEventListener('input',checkUserName);
registerEmailInput.addEventListener('input',checkUserEmail);
registerPasswordInput.addEventListener('input',checkUserPassword);
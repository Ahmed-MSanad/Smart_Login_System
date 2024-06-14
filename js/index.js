// input
var loginEmailInput = document.getElementById('loginEmail');
var loginPasswordInput = document.getElementById('loginPassword');


// Login Alerts
var faultMessage = document.getElementById('faultMessage');

// buttons
var loginBtn = document.getElementById('loginBtn');

// userList
var userList;

if(localStorage.getItem('userList')){
    userList = JSON.parse(localStorage.getItem('userList'));
}
else{
    userList = [];
}


loginBtn.addEventListener('click',function(){
    removeAlerts();

    if(loginEmailInput.value == '' ||
        loginPasswordInput.value == ''){
        faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert">All inputs are required</div>';
        faultMessage.classList.remove('d-none');
    }
    else{
        var userName = checkUser();
        
        if(userName != null){
            localStorage.setItem('userName',userName);
            location.href = 'welcome.html';
        }
        else{
            faultMessage.innerHTML = '<div class="alert alert-danger text-danger py-0" role="alert">incorrect email or password</div>';
            faultMessage.classList.remove('d-none');
        }
    }
});

function checkUser(){
    for(var i = 0; i < userList.length ; i++){
        if(userList[i].userEmail.toLowerCase() === loginEmailInput.value.toLowerCase() &&
            userList[i].userPassword.toLowerCase() === loginPasswordInput.value.toLowerCase()){
                return userList[i].userName;
        }
    }
    return null;
}


function removeAlerts(){
    faultMessage.classList.add('d-none');
}
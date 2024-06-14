// buttons
var logoutBtn = document.getElementById('logoutBtn');

// welcome
var userWelcome = document.getElementById('userWelcome');

var userName = localStorage.getItem('userName');

if(userName === null){
    location.href = 'index.html';
}
else{
    userWelcome.innerHTML = 'welcome ' + userName;
}

logoutBtn.addEventListener('click',function(){
    localStorage.removeItem('userName');
});
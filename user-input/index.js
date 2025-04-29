let username;

document.getElementById("submit").onclick=function(){
    username=document.getElementById("myInput").value;
    document.getElementById("myId").textContent=`Hello to User: ${username}`
}
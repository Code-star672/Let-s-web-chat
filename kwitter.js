function adduser()
{
    username = document.getElementById("textinput").value;
    localStorage.setItem("usersname",username);
    window.location = "kwitter_room.html";
}
const firebaseConfig = {
  apiKey: "AIzaSyAevw2kfI_M6p8sd7kzO3EqkdzZm-qv60k",
  authDomain: "lets-web-chat.firebaseapp.com",
  databaseURL: "https://lets-web-chat-default-rtdb.firebaseio.com",
  projectId: "lets-web-chat",
  storageBucket: "lets-web-chat.appspot.com",
  messagingSenderId: "66828558118",
  appId: "1:66828558118:web:a9748efd17fb9387c2abe7",
  measurementId: "G-0WPT8G1NJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("usersname");
room_name = localStorage.getItem("room-name");
function send() {
  message = document.getElementById("Message").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      textmessage:message,
      like:0

  });
  document.getElementById("Message").value ="";
  
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["textmessage"];
like = message_data["like"];
creatname = "<h4> " + name +"<img class='user_tick' src ='tick.png'></h4>";
creatmessage = "<h4 class='message_h4'>" + message +"</h4>";
creatlike = "<button class ='btn btn-warning' onclick='likeup(this.id)' id="+firebase_message_id+" value="+like+"> ";
creatspan = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like +"</span></button><hr>";
creatvar = creatname + creatmessage + creatlike + creatspan;
document.getElementById("output").innerHTML += creatvar;
//End code
      } });  }); }
getData();
function likeup(message_id)
{
console.log(message_id);
btnid = message_id;
likes = document.getElementById(btnid).value;
updatedlikes = Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
  like:updatedlikes
});
}
function logout()
{
  localStorage.removeItem("usersname");
  localStorage.removeItem("room-name");
  window.location = "index.html";
}
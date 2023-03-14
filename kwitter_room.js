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
username = localStorage.getItem("usersname");
document.getElementById("user_name").innerHTML = "Welcome " + username ;
function addroom()
{
 room_name = document.getElementById("roomname").value;
 firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
 });
localStorage.setItem("room-name",room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomnames" + Room_names);
      rows = "<div class='room_name' id="+Room_names+" onclick='redricttoroomname(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += rows;

      });});}
getData();
function redricttoroomname(name){
  console.log(name);
  localStorage.setItem("name_s",name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("usersname");
  localStorage.removeItem("room-name");
  window.location = "index.html";
}
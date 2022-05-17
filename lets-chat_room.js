
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyA57-DB41HbbPrFWjgD0x6eRI9yv7Iw_sU",
  authDomain: "lets-chat-3b98d.firebaseapp.com",
  databaseURL: "https://lets-chat-3b98d-default-rtdb.firebaseio.com",
  projectId: "lets-chat-3b98d",
  storageBucket: "lets-chat-3b98d.appspot.com",
  messagingSenderId: "188920344535",
  appId: "1:188920344535:web:e327bccf83432b9a6c2592",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"    
  });

  localStorage.setItem("room_name", room_name);
  window.locatioan = "lets-chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_nmae' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "lets-chat_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value ="";
}



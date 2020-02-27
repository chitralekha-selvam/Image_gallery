  var firebaseConfig = {
    apiKey: "AIzaSyDhYbwul2iimrOnX-qgpaMkLsjAMqlkrJk",
    authDomain: "form-daa18.firebaseapp.com",
    databaseURL: "https://form-daa18.firebaseio.com",
    projectId: "form-daa18",
    storageBucket: "form-daa18.appspot.com",
    messagingSenderId: "403483740985",
    appId: "1:403483740985:web:ef44a23383f700ca5476e8",
    measurementId: "G-4N1X7RYMLG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  function signUp()
  {
  	var email=document.getElementById("email");
  	var password=document.getElementById("password");
  	 
  	const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
  	promise.catch(e=>alert(e.message));

  	alert("Signed Up");
  }
  
  function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	



 
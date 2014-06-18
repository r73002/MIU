Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win
});

var imageView = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 75,
});

var loginButton = Ti.UI.createButton({
	title: "Login",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	bottom: 250,
	width: pWidth,
	height:50
	});
	
var SignupButton = Ti.UI.createButton({
	title: "Sign Up",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	bottom: 200,
	width: pWidth,
	height:50
	});
	
var view = Ti.UI.createView({
	backgroundColor: "#e9e8e8",
	borderColor: "#e9e8e8",
	borderRadius: 5,
	borderWidth: 1,
	height: 125,
	width: 275,
	bottom: 40,
});

var label = Ti.UI.createLabel({
	text: "Forget your Username/Password? Then click HERE",
	font: {fontSize:15, fontFamily: "Arial", fontColor: "#000"},
	top: 50,
	textAlign: "center"
});


var openlogin = function(){
    var loginWindow = Ti.UI.createWindow({
		title: "Login",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 75,
});
	
	
	navWindow.openWindow(loginWindow);

};


var openlogin = function(){
    var loginWindow = Ti.UI.createWindow({
		title: "Login",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var img3 = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 50,
});
var emailview2 = Ti.UI.createLabel({
  text:"Email",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 225 , 
  left: 10,
});
var textField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 220 , 
  left: 100,
  width: 200,
  height: 35
});
var passwordview2 = Ti.UI.createLabel({
  text:"Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 190 , 
  left: 10,
});
var textField4 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 185 , 
  left: 100,
  width: 200,
  height: 35
});

var fillin2 = Ti.UI.createLabel({
	text: "Login to League of Legends® Data Base Enter Email and Password",
	top: img3.height+ img3.top + 5,
	textAlign: "center"
});

var mybutton2 = Ti.UI.createButton({
	text: "Cancel",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	height: 50,
	width: 100,
	bottom: 35,
	left: 60,
});

var mySecondbutton2 = Ti.UI.createButton({
	title: "OK",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	height: 50,
	width: 75,
	bottom: 35,
	right: 60,
});


	loginWindow.add(mybutton2);
	loginWindow.add(mySecondbutton2);
	loginWindow.add(fillin2);
    loginWindow.add(passwordview2);
    loginWindow.add(textField3);
    loginWindow.add(emailview2);
    loginWindow.add(textField4);
	loginWindow.add(img3);
	
	navWindow.openWindow(loginWindow);

};
	loginButton.addEventListener("click", openlogin);




var opensignup = function(){
    var signupWindow = Ti.UI.createWindow({
		title: "Sign Up",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var img2 = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 50,
});
var emailview = Ti.UI.createLabel({
  text:"Email",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 225 , 
  left: 10,
});
var textField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 220 , 
  left: 100,
  width: 200,
  height: 35
});
var passwordview = Ti.UI.createLabel({
  text:"Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 190 , 
  left: 10,
});
var textField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 185 , 
  left: 100,
  width: 200,
  height: 35
});

var fillin = Ti.UI.createLabel({
	text: "Sign Up to League of Legends® Data Base Enter Email and Password",
	top: img2.height+ img2.top + 5,
	textAlign: "center"
});

var mybutton = Ti.UI.createButton({
	text: "Cancel",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	height: 50,
	width: 100,
	bottom: 35,
	left: 60,
});

var mySecondbutton = Ti.UI.createButton({
	title: "OK",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	height: 50,
	width: 75,
	bottom: 35,
	right: 60,
});


	signupWindow.add(mybutton);
	signupWindow.add(mySecondbutton);
	signupWindow.add(fillin);
    signupWindow.add(passwordview);
    signupWindow.add(textField2);
    signupWindow.add(emailview);
    signupWindow.add(textField);
	signupWindow.add(img2);
	
	navWindow.openWindow(signupWindow);

};
	SignupButton.addEventListener("click", opensignup);


view.add(label);
win.add(view);
win.add(loginButton);	
win.add(SignupButton);
win.add(imageView);
navWindow.open();

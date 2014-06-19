Ti.UI.setBackgroundColor("#fff");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: win
});


var openMain = function(){



var data = require("Json");

var mainWindow = Ti.UI.createWindow({
	title: "Champion List",
	backgroundColor: "#f5f5f5"
});

var champTables = Ti.UI.createTableView({
	top:0
	});

	if(Ti.Platform.name === "iPhone OS"){
		champTables.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}

var champSection = Ti.UI.createTableViewSection({
	headerTitle: "",
	footerTitle: ""
});

var champSections = [champSection];
	champTables.setData(champSections);
	mainWindow.add(champTables);

var border = Ti.UI.createView({
	backgroundColor: "#333",
	height: 1,
	width: pWidth,
	top: 20
	});
	
var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.top-border.height-50,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fff"
	});

var getDetail = function (){
	var detailWindow = Ti.UI.createWindow({
		title: this.title,
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	var detailImage = Ti.UI.createImageView({
		image: this.img,
		top: 5,
		left:5,
		imageAlign: "left"
	});
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
		top: 25,
		left: 150,
		textAlign: "left"
	});
	var abilitiesButton = Ti.UI.createButton({
	title: "Abilities",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	bottom: 125,
	width: pWidth,
	height:50
	});
	var abilitiesText = Ti.UI.createLabel({
		text: this.abilities,
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
		top: 0,
		textAlign: "left"
	});
	var openWindow = function(){
		var abilitiesWindow = Ti.UI.createWindow({
		title: "Abilities",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});

	abilitiesWindow.add(border);
	abilitiesWindow.add(viewContainer);
	
	abilitiesWindow.add(abilitiesText);
	navWindow.openWindow(abilitiesWindow);
	};
	
	abilitiesButton.addEventListener("click", openWindow);
	
	var loreButton = Ti.UI.createButton({
	title: "Lore",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 14, fontFamily: "Arial"},
	bottom: 25,
	width: pWidth,
	height:50
});

	var loreText = Ti.UI.createLabel({
		text: this.lores,
		font: {fontSize:11, fontFamily: "Arial", fontColor: "#000"},
		top: 0,
		textAlign: "left"
	});

var openWindow2 = function(){
    var loreWindow = Ti.UI.createWindow({
		title: "Lore",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	loreWindow.add(border);
	loreWindow.add(viewContainer);

	loreWindow.add(loreText);
	navWindow.openWindow(loreWindow);

};
	loreButton.addEventListener("click", openWindow2);
	
	detailWindow.add(loreButton);
	detailWindow.add(abilitiesButton);
	detailWindow.add(detailImage);
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
   
};

for(n in data.champData){

	for(m in data.champData[n].championData){
		var theRow = Ti.UI.createTableViewRow({
		title: data.champData[n].championData[m].title,
		img: data.champData[n].championData[m].image,
		desc: data.champData[n].championData[m].description,
		abilities: data.champData[n].championData[m].ability,
		lores: data.champData[n].championData[m].lore,
	    hasChild: true
	});

	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;

	champSection.add(theRow);
	theRow.addEventListener("click", getDetail);
	};
	};	
};


navWindow.openWindow(mainWindow);
};


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


var mySecondbutton2 = Ti.UI.createButton({
	title: "OK",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	height: 100,
	width: pWidth,
	bottom: 35,
});

mySecondbutton2.addEventListener("click", openMain);

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

var mySecondbutton = Ti.UI.createButton({
	title: "OK",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	height: 100,
	width: pWidth,
	bottom: 35,
});


mySecondbutton.addEventListener("click", openlogin);



	signupWindow.add(mySecondbutton);
	signupWindow.add(fillin);
    signupWindow.add(passwordview);
    signupWindow.add(textField2);
    signupWindow.add(emailview);
    signupWindow.add(textField);
	signupWindow.add(img2);
	
	navWindow.openWindow(signupWindow);

};

var view = Ti.UI.createView({
	backgroundColor: "#e9e8e8",
	borderColor: "#e9e8e8",
	borderRadius: 5,
	borderWidth: 1,
	height: 125,
	width: 250,
	bottom: 35,
});

var label = Ti.UI.createLabel({
	text: "Forget your Username/Password? Then click HERE",
	font: {fontSize: 14, fontFamily: "Arial"},
	textAlign: "center",
	top: 25,
	right: 25,
	left: 25,
	bottom:25
});

var  inforetrieval = function(){
	
	var infoWindow = Ti.UI.createWindow({
		title: "",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var pic = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 50,
});

var emailaddress = Ti.UI.createLabel({
	text: "Enter your email address and we'll send you a temporary password to recover your account",
	top: pic.height+ pic.top + 5,
	textAlign: "center"
});

var email = Ti.UI.createLabel({
  text:"Email",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 225 , 
  left: 10,
});
var emailtextField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 220 , 
  left: 100,
  width: 200,
  height: 35
});

var mybutton = Ti.UI.createButton({
	title: "OK",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	height: 100,
	width: pWidth,
	bottom: 35,
});





	infoWindow.add(mybutton);
	infoWindow.add(emailaddress);
    infoWindow.add(email);
    infoWindow.add(emailtextField);
	infoWindow.add(pic);
	
	mybutton.addEventListener("click", newpass);
	
	navWindow.openWindow(infoWindow);
};


view.addEventListener("click", inforetrieval);
var newpass = function(){
    var newPassWindow = Ti.UI.createWindow({
		title: "",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var pic2 = Ti.UI.createImageView({
	image : 'signup-logo2.png',
	width : pWidth,
	height : 125,
	top : 50,
});
var passview = Ti.UI.createLabel({
  text:"Old Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 225 , 
  left: 10,
});
var textField5 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 220 , 
  left: 150,
  width: 150,
  height: 35
});
var passview2 = Ti.UI.createLabel({
  text:"New Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  bottom: 190 , 
  left: 10,
});
var textField6 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  bottom: 185 , 
  left: 150,
  width: 150,
  height: 35
});

var fill = Ti.UI.createLabel({
	text: "Put in your old pre existing Password and then insert the new Password.",
	top: pic2.height+ pic2.top + 5,
	textAlign: "center"
});

var submitbutton = Ti.UI.createButton({
	title: "Submit",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	height: 100,
	width: pWidth,
	bottom: 35,
});

	newPassWindow.add(submitbutton);
	newPassWindow.add(fill);
    newPassWindow.add(passview2);
    newPassWindow.add(textField6);
    newPassWindow.add(passview);
    newPassWindow.add(textField5);
	newPassWindow.add(pic2);
	
submitbutton.addEventListener("click", openlogin);
	navWindow.openWindow(newPassWindow);

};




	SignupButton.addEventListener("click", opensignup);
view.add(label);
win.add(view);
win.add(loginButton);	
win.add(SignupButton);
win.add(imageView);
navWindow.open();

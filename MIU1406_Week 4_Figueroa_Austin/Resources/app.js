Ti.UI.setBackgroundColor("#333");

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: win
});

var image = Ti.UI.createImageView({
	image : 'Images/Logo.png',
	width : pWidth,
	height : 200,
	bottom: 0,
});

var emailview = Ti.UI.createLabel({
  text:"Email",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  top: 100 , 
  left: 10,
});
var textField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "abc@yahoo.com",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 95 , 
  left: 100,
  width: 200,
  height: 35
});

var addFocus = function(){
	if (textField.value === ""){
		textField.value = "abc@yahoo.com";
	}
};

var testresults;
 
function checkemail(emailAddress)
{
    var str = emailAddress;
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (filter.test(str))
    {
        testresults = true;
    }
    else
    {
        testresults = false;
    }
    return (testresults);
};

var passwordview = Ti.UI.createLabel({
  text:"Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  top:  145, 
  left: 10,
});

var textField2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "**********",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 140 , 
  left: 100,
  width: 200,
  height: 35
});


var addFocus2 = function(){
	if (textField2.value === ""){
		textField2.value = "**********";
	}
};


var loginButton = Ti.UI.createButton({
	title: "Login",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	bottom: 270,
	width: 175,
	height:50
	});
	
var SignupButton = Ti.UI.createButton({
	title: "Sign Up",
	backgroundColor: "#fff",
	textAlign: "center",
	font: {fontSize: 20, fontFamily: "Arial"},
	bottom: 220,
	width: 175,
	height:50
	});

var fillin = Ti.UI.createLabel({
	text: "Login to Devil's Lil Helper Enter Email and Password",
	top:  5,
	textAlign: "center"
});

	win.add(fillin);
    win.add(passwordview);
    win.add(textField);
    win.add(emailview);
    win.add(textField2);
    
    
	textField.addEventListener("blur",addFocus);
	textField2.addEventListener("blur",addFocus2);


var opentheme = function(){
	var themeWin= Ti.UI.createWindow({
		title: "Make your To Do List",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
	var todofield = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 20 ,
  left:5,
  width: 270,
  height: 35
});
	var todofield2 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 60 , 
  left:5,
  width: 270,
  height: 35
});
	var todofield3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 100 , 
  left:5,
  width: 270,
  height: 35
});

var todofield4 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 140 ,
  left:5, 
  width: 270,
  height: 35
});

var todofield5 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 180 , 
  left:5,
  width: 270,
  height: 35
});
var todofield6 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 220 , 
  left:5,
  width: 270,
  height: 35
});
var todofield7 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "Put what you have to do here.",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 260 ,
  left:5, 
  width: 270,
  height: 35
});

var img = Ti.UI.createImageView({
	image : 'Images/Logo.png',
	width : pWidth,
	height : 200,
	bottom: 0,
});

	themeWin.add(img);	
	themeWin.add(todofield);
	themeWin.add(todofield2);
	themeWin.add(todofield3);
	themeWin.add(todofield4);
	themeWin.add(todofield5);
	themeWin.add(todofield6);
	themeWin.add(todofield7);

	var checkbox = Ti.UI.createButton({
    title: '',
    top: 25,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 

checkbox.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox2 = Ti.UI.createButton({
    title: '',
    top: 65,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 

checkbox2.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox2.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox2.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox3 = Ti.UI.createButton({
    title: '',
    top: 105,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 

checkbox3.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox3.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox3.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox4 = Ti.UI.createButton({
    title: '',
    top: 145,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 

checkbox4.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox4.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox4.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox5 = Ti.UI.createButton({
    title: '',
    top: 185,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 

checkbox5.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox5.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox5.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox6 = Ti.UI.createButton({
    title: '',
    top: 225,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});
 
checkbox6.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox6.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox6.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});
	var checkbox7 = Ti.UI.createButton({
    title: '',
    top: 265,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false 
});

checkbox7.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox7.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox7.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});


themeWin.add(checkbox);
themeWin.add(checkbox2);
themeWin.add(checkbox3);
themeWin.add(checkbox4);
themeWin.add(checkbox5);
themeWin.add(checkbox6);
themeWin.add(checkbox7);

	navWin.openWindow(themeWin);
};

loginButton.addEventListener('click',function(e)
{
    if (textField.value != '')
        {
            if (!checkemail(textField.value))
            {
                alert("Please enter a valid email");
            }
            else
            {
                
            opentheme();
            }
        }
    
    });


//   Signup


var opensignup = function(){

var signupWindow = Ti.UI.createWindow({
		title: "Sign Up",
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	
var name = Ti.UI.createLabel({
  text:"Name",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  top: 100 , 
  left: 10,
});
var textField5 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "John Doe",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 95 , 
  left: 100,
  width: 200,
  height: 35
});
	
var emailview2 = Ti.UI.createLabel({
  text:"Email",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  top: 145 , 
  left: 10,
});
var textField3 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "abc@yahoo.com",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 140 , 
  left: 100,
  width: 200,
  height: 35
});
var passwordview2 = Ti.UI.createLabel({
  text:"Password",
  font: {fontSize:20, fontFamily: "Arial", fontColor: "#000"},
  backgroundColor: "#fff",
  top: 190 , 
  left: 10,
});
var textField4 = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  hintText: "**********",
  font: {fontSize: 14, fontFamily: "Arial"},
  color: '#336699',
  top: 185 , 
  left: 100,
  width: 200,
  height: 35
});

var fillin2 = Ti.UI.createLabel({
	text: "Sign Up to Devil's Lil Helper Enter Email and Password",
	top: 5,
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


mySecondbutton.addEventListener('click',function(e)
{
    if (textField3.value != '')
        {
            if (!checkemail(textField3.value))
            {
                alert("Please enter a valid email");
            }
            else
            {
                
            opentheme();
            }
        }
    
    });


	
	signupWindow.add(name);
	signupWindow.add(textField5);
	signupWindow.add(mySecondbutton);
	signupWindow.add(fillin2);
    signupWindow.add(passwordview2);
    signupWindow.add(textField3);
    signupWindow.add(emailview2);
    signupWindow.add(textField4);
	
	navWin.openWindow(signupWindow);

};

SignupButton.addEventListener("click", opensignup);

win.add(image);
win.add(loginButton);	
win.add(SignupButton);
navWin.open();
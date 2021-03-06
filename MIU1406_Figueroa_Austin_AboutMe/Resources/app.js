Ti.UI.setBackgroundColor("#fff");

var data = require("JsonData");

var mainWindow = Ti.UI.createWindow({
	title: "About Me",
	backgroundColor: "#f5f5f5"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var infoTables = Ti.UI.createTableView({
	top:0
	});

	if(Ti.Platform.name === "iPhone OS"){
		infoTables.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}

var infoSection = Ti.UI.createTableViewSection({
	headerTitle: "My information",
	footerTitle: "Well that is all for now."
});

var infoSections = [infoSection];
	infoTables.setData(infoSections);
	mainWindow.add(infoTables);

var getDetail = function (){
	var detailWindow = Ti.UI.createWindow({
		title: this.title,
		font: {fontSize:10, fontFamily: "Arial", fontColor: "#000"},
	    backgroundColor: "#fff"
	});
	var detailView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderColor: "#000",
	borderRadius: 5,
	borderWidth: 1,
	top: 30,
	left: 20,
	right: 20,
	bottom: 120
	});
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize:14, fontFamily: "Arial", fontColor: "#000"},
		top: 25,
		right: 25,
		left: 25,
		bottom:25,
		textAlign: "center"
	});
	detailWindow.add(detailView);
	detailView.add(detailText);
	navWindow.openWindow(detailWindow);
};

for(n in data.infoData){

	for(m in data.infoData[n].aboutAustin){
		var theRow = Ti.UI.createTableViewRow({
		title: data.infoData[n].aboutAustin[m].title,
		desc: data.infoData[n].aboutAustin[m].description,
	    hasChild: true
	});

	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;

	infoSection.add(theRow);
	theRow.addEventListener("click", getDetail);
	};
	};	
};

navWindow.open();
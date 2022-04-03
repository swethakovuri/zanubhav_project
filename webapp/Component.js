sap.ui.define(["sap/ui/core/UIComponent"],
function(UIComponent){

return UIComponent.extend("com.infy.fiori.Component",{
	metadata: {
		"manifest":"json"
	},
	init : function(){
	//we have to call super class constructor
	//when we call base call constructor, we are invoking default functionality which is available free for us
	UIComponent.prototype.init.apply(this);
	var oRouter = this.getRouter();
	oRouter.initialize();
	},
	//create views objects 
/*	createContent:function(){
		
		var oView = new sap.ui.view({
			type: "XML",
			viewName: "com.infy.fiori.view.App"
		});
		
			var oView1 = new sap.ui.view({
			type: "XML",
			id: "idView1",
			viewName: "com.infy.fiori.view.View1"
		});
		    
		    var oView2 = new sap.ui.view({
		    	type: "XML",
		    	id: "idView2",
		    	viewName: "com.infy.fiori.view.View2"
		    });
		
		oView.byId("Myapp").addMasterPage(oView1).addDetailPage(oView2);
		return oView;
		
	},*/
	destroy: function(){
		
	}
});
}
	);
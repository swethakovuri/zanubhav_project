sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.infy.fiori.controller.View2", {
		
		
		    onInit:function(){
			this.oRouter = this.getOwnerComponent().getRouter();
			this.oRouter.attachRoutePatternMatched(this.route, this);
	     	},
	     	
	     	route: function(oEvent){
	     		var id = oEvent.getParameter("arguments").fruitId;
	     		var sPath = "/fruits/" + id;
	     		this.getView().bindElement(sPath);
	     	},
	     	flag: true,
	     	onHide : function(oEvent){
	     	var oTable = this.getView().byId("idButton");
	     	var oCol = oTable.getColumns();
	     	var oCity = oCol[2];
	     	if(this.flag === true){
	     		
	     		oCity.setVisible(false);
	     		oEvent.getSource().setText("show");
	     		this.flag = false;
	     		
	     	} else{
	     	   oCity.setVisible(true);
	     	   oEvent.getSource().setText("Hide");
	     	   this.flag = true;
	     	}
	     	},
	     	oSuppPopup: null,
	     	onFilter : function(){
	     		if(!this.oSuppPopup){
	     			this.oSuppPopup = new sap.ui.xmlfragment("com.infy.fiori.fragments.popup");
	     	//below statement will give access to the model to the fragment from the view by adding as dependent
	     			this.getView().addDependent(this.oSuppPopup);
	     		}
	     		this.oSuppPopup.setTitle("Suppliers");
	     		this.oSuppPopup.bindAggregation("items",{
	     			path: '/suppliers',
	     		    template: new sap.m.DisplayListItem({
	     		    label: "{name}",
	     			value: "{city}"
	     		    })
	     		});
	     		this.oSuppPopup.open();
	     	},
		
		    onBack: function(){
			var oApp = this.getView().getParent();
			oApp.to("idView1");
		    }
		   

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.infy.fiori.view.View2
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.infy.fiori.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.infy.fiori.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.infy.fiori.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});
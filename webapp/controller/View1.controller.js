sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.infy.fiori.controller.View1", {
		
		
		onInit : function(){
		
		this.oRouter = this.getOwnerComponent().getRouter();	
		},
	
		
		onNext : function(sPath){
			
			var oApp = this.getView().getParent().getParent();
			oApp.to("idView2");
			var sTitle = this.getView().byId("mySearch").getValue();
			var oView2 = oApp.getDetailPages()[0];
			oView2.getContent()[0].getContent()[0].bindElement(sPath);
			oView2.getContent()[0].setTitle(sTitle);
			
		},
		OnSearch : function(oEvent){
			
			var sVal = oEvent.getParameter("query");
			var oList = this.getView().byId("idLedo");
			var oBinding = oList.getBinding("items");
			var oFilter = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.EQ, sVal);
			var oFilter2 = new sap.ui.model.Filter("color", sap.ui.model.FilterOperator.EQ, sVal);
			var oFilterMain = new sap.ui.model.Filter({
				filters:[oFilter,oFilter2],
				and: false
			});
			//inject the filter
				oBinding.filter([oFilterMain]);
		},
		onDelete : function(oEvent){
		//get the item to be deleted
		var oItemToBeDel = oEvent.getParameter("listItem");
		
		console.log("deleted"+ oItemToBeDel.getTitle());
		//get the list object
		var oList = oEvent.getSource();
		//remove the item from the list object
		oList.removeItem(oItemToBeDel);
		},
		
		onItemPress : function(oEvent){
		//	this.onNext(oEvent.getParameter("listItem").getBindingContextPath());
		
		var sPath = oEvent.getParameter("listItem").getBindingContextPath();
		var sIdx = sPath.split("/")[sPath.split("/").length - 1];
		this.oRouter.navTo("Route2",{
			fruitId : sIdx
		   });
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.infy.fiori.view.View1
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.infy.fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.infy.fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.infy.fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});
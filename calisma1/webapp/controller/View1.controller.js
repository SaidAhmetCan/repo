sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], 
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, formatter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("calisma1.controller.View1", {

            formatter: formatter,

            onInit: function () {
                var oViewModel = new JSONModel({
                    currency: "TRY"
                });
                this.getView().setModel(oViewModel, "view");
            },
            
            onShowHello : function () {
                // read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
    
                // show message
                MessageToast.show(sMsg);
            },

            onFilterInvoices : function (oEvent) {
     
                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                }
    
                // filter binding
                var oList = this.byId("invoiceList");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }
            

        });
    });

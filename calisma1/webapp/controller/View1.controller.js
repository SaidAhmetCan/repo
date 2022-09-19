sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
    "../model/formatter"
], 
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, formatter) {
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
            }

        });
    });

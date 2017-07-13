sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
    "use strict";
    return BaseController.extend("sap.ui.demo.nav.controller.Home", {
        onDisplayNotFound: function(oEvent) {
            this.getRouter().getTargets().display("notFound", { fromTarget: "home" });
        },
        onNavToEmployees: function(oEvent) {
            this.getRouter().navTo("employeeList");
        }


    });



});
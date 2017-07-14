sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function(BaseController) {
    "use strict";
    return BaseController.extend("sap.ui.demo.nav.controller.employee.Employee", {

        //When the object is loaded
        onInit: function() {
            var oRouter = this.getRouter();
            oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);
        },

        //when the route matched then we retrieve the arguments and the view
        //It is a function that receive an event as parameter        
        _onRouteMatched: function(oEvent) {
            var oArgs, oView;
            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path: "/Employees(" + oArgs.employeeId + ")",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function(oEvent) {
                        oView.setBusy(true);
                    },
                    dataReceived: function(oEvent) {
                        oView.setBusy(false);
                    }
                }
            });
        },
        _onBindingChange: function(oEvent) {

            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("notFound");
            }
        }
    });
});
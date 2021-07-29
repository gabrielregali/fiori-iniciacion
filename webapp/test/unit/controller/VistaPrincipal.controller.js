/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/VistaPrincipal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VistaPrincipal Controller");

	QUnit.test("I should test the VistaPrincipal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

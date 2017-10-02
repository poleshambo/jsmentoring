"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by alex on 9/29/17.
 */
// FIRST task
// We have an apartment with old power socket.
// You should implement the ability to plug socket with different standards of shape and voltage
// (e.g. USA, China, etc.).
// So, your entity should perform some transformation to fit old power socket.


var OldSocket = function () {
	function OldSocket(adapter) {
		_classCallCheck(this, OldSocket);

		this.adapter = adapter;
		this.voltage = 220;
	}

	_createClass(OldSocket, [{
		key: "plugIn",
		value: function plugIn() {
			this.adapter.plugIn();
			console.log("Plug is plugged!");
			console.log("Socket voltage is " + this.voltage);
		}
	}]);

	return OldSocket;
}();

var USAAdapter = function () {
	function USAAdapter() {
		_classCallCheck(this, USAAdapter);

		this.voltage = 120;
		this.adaptee = window.usaPlug;
	}

	_createClass(USAAdapter, [{
		key: "plugIn",
		value: function plugIn() {
			this.adaptee.plugIn(this.voltage);
		}
	}]);

	return USAAdapter;
}();

var USAPlug = function () {
	function USAPlug() {
		_classCallCheck(this, USAPlug);
	}

	_createClass(USAPlug, [{
		key: "plugIn",
		value: function plugIn(voltage) {
			console.log("USA plug is working on " + voltage + " volts");
		}
	}]);

	return USAPlug;
}();

var EUadapter = function () {
	function EUadapter() {
		_classCallCheck(this, EUadapter);

		this.voltage = 230;
		this.adaptee = window.euPlug;
	}

	_createClass(EUadapter, [{
		key: "plugIn",
		value: function plugIn() {
			this.adaptee.plugIn(this.voltage);
		}
	}]);

	return EUadapter;
}();

var EUPlug = function () {
	function EUPlug() {
		_classCallCheck(this, EUPlug);
	}

	_createClass(EUPlug, [{
		key: "plugIn",
		value: function plugIn(voltage) {
			console.log("EU plug is working on " + voltage + " volts");
		}
	}]);

	return EUPlug;
}();

// Creating plugs


var usaPlug = new USAPlug();
var euPlug = new EUPlug();

// Creating adapters
var usaAdapter = new USAAdapter();
var euAdapter = new EUadapter();

var plugType = +prompt("Plug type: 1 - USA, 2 - EU", 0);

if (plugType == 1) {
	var oldSocket = new OldSocket(usaAdapter);
	oldSocket.plugIn();
} else if (plugType == 2) {
	var _oldSocket = new OldSocket(euAdapter);
	_oldSocket.plugIn();
}

//# sourceMappingURL=1-compiled.js.map
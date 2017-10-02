/**
 * Created by alex on 9/29/17.
 */
// FIRST task
// We have an apartment with old power socket.
// You should implement the ability to plug socket with different standards of shape and voltage
// (e.g. USA, China, etc.).
// So, your entity should perform some transformation to fit old power socket.


class OldSocket{
	constructor(adapter) {
		this.adapter = adapter;
		this.voltage = 220;
	}

	plugIn(){
		this.adapter.plugIn();
		console.log("Plug is plugged!");
		console.log("Socket voltage is " + this.voltage);
	}
}

class USAAdapter{
	constructor() {
		this.voltage = 120;
		this.adaptee = window.usaPlug;
	}

	plugIn() {
		this.adaptee.plugIn(this.voltage);
	}
}


class USAPlug{

	plugIn(voltage){
		console.log("USA plug is working on " + voltage + " volts");
	}
}

class EUadapter{
	constructor() {
		this.voltage = 230;
		this.adaptee = window.euPlug;
	}

	plugIn() {
		this.adaptee.plugIn(this.voltage);
	}
}

class EUPlug{

	plugIn(voltage){
		console.log("EU plug is working on " + voltage + " volts");
	}
}

// Creating plugs
let usaPlug = new USAPlug();
let euPlug = new EUPlug();


// Creating adapters
let usaAdapter = new USAAdapter();
let euAdapter = new EUadapter();


let plugType = +prompt("Plug type: 1 - USA, 2 - EU", 0);


if (plugType == 1) {
	let oldSocket = new OldSocket(usaAdapter);
	oldSocket.plugIn();
} else if (plugType == 2) {
	let oldSocket = new OldSocket(euAdapter);
	oldSocket.plugIn();
}





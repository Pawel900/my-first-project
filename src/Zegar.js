import React from 'react';
import "./App.css";
function addTime(start, time) {
	let now = new Date();
	now.setHours(start.split(":")[0]);
	now.setMinutes(start.split(":")[1]);
	now.setHours(now.getHours()+parseInt(time.split(":")[0]));
	now.setMinutes(now.getMinutes()+parseInt(time.split(":")[1]));
	let hours = (now.getHours()<10?'0':'') + now.getHours();
	let minutes = (now.getMinutes()<10?'0':'') + now.getMinutes();
	return hours + ":" + minutes;

};
export default addTime;
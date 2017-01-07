'use strict'
var colors = require('colors');

const log = {}

log.err = function(eStr){
	if(typeof console.error === 'function' ){
		console.error(String(eStr).red)
	}else{
		console.log(String(eStr).red)
	}
}

log.warn = function(eStr){
	if(typeof console.warn === 'function' ){
		console.error(String(eStr).yellow)
	}else{
		console.log(String(eStr).yellow)
	}
}

log.log = function(eStr){
	console.log(String(eStr).green)
}

module.exports = log;
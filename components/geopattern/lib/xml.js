"use strict";var XMLNode=module.exports=function(t){return this instanceof XMLNode?(this.tagName=t,this.attributes=Object.create(null),this.children=[],this.lastChild=null,this):new XMLNode(t)};XMLNode.prototype.appendChild=function(t){return this.children.push(t),this.lastChild=t,this},XMLNode.prototype.setAttribute=function(t,e){return this.attributes[t]=e,this},XMLNode.prototype.toString=function(){var t=this;return["<",t.tagName,Object.keys(t.attributes).map(function(e){return[" ",e,'="',t.attributes[e],'"'].join("")}).join(""),">",t.children.map(function(t){return t.toString()}).join(""),"</",t.tagName,">"].join("")};
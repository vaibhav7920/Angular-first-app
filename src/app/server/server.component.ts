import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
  //  selector : '[app-server]', //component can be selected as an attribute
   // selector : '.app-server', //component can be selected as a class
    templateUrl: './server.component.html',
    styles:[`
    .online {
      color:white;
      }`]
})
export class ServerComponent{
 serverId =10;
 serverStatus : string="offline";
 constructor(){
  this.serverStatus =Math.random() >0.5 ? 'online':'offline';
 }
 getserverStatus(){
  return this.serverStatus;
 }
 getColor(){
  return this.serverStatus=='online'? 'green':'red';
 }
}
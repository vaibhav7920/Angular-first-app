import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
  //  selector : '[app-server]', //component can be selected as an attribute
   // selector : '.app-server', //component can be selected as a class
    templateUrl: './server.component.html'
})
export class ServerComponent{
 serverId =10;
 serverStatus = "offline";
 getserverStatus(){
  return this.serverStatus;
 }
}
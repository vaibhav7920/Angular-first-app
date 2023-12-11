import { Component, OnInit } from '@angular/core';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
allowNewServer =false;
serverCreationStaus ='No Server was created';
serverName ='ADSS';
serverCreated = false;
servers = ['TestServer 1', 'TestServer 2'];
  constructor(){
    setTimeout(() => {
      this.allowNewServer =true;
    }, 2000);

  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStaus ='Server was created! Name is '+ this.serverName ;
  }

    // onCreateServer(){
  //   this.serverCreated=true;
  //   this.serverCreationStaus ='Server was created! Name is '+ this.serverName ;
  // }


    // onCreateServer(){
  //     this.serverCreationStaus ='Server was created! Name is '+ this.serverName ;
  //   }


  // onCreateServer(){
  //   this.serverCreationStaus ='Server was created';
  // }



  onUpdateServerName(event : Event){
this.serverName = (<HTMLInputElement>event.target).value;
  }
}

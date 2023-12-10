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
  constructor(){
    setTimeout(() => {
      this.allowNewServer =true;
    }, 2000);

  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStaus ='Server was created';
  }
  onUpdateServerName(event : Event){
this.serverName = (<HTMLInputElement>event.target).value;
  }
}

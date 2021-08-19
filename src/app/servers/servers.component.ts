import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created yet!"
  serverName = 'Testserver';



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Nam is " + this.serverName;
  }

  onUpdateServerName(event: any){
  this.serverName = (<HTMLInputElement>event.target).value;

  }

}

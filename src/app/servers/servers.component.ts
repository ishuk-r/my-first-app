import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowCreateServer: boolean = false;
  serverCreationStatus: string = "";
  serverName: string = "test server";
  servers:string[]= ['test 1', 'test 2'];

  constructor() {
    setTimeout(() => {
      this.allowCreateServer = true;
    }, 2000);
  }

  onCreateNewServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = `A new server ${this.serverName} created!!`;
  }

  onResetServer(){
    this.serverCreated = false;
    //this.serverName = "";
    this.serverCreationStatus = "";
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  ngOnInit(): void {
  }

}

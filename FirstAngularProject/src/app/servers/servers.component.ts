import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  userName = '';

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!! Name is ' + this.serverName;
  }

  onCreateUserName(event : Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  isUserNameEmpty() {
    if(this.userName == '')
      return true;
    else
      return false;
  }

  onResetUserName() {
    this.userName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

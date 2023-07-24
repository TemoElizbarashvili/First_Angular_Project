import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styles : [`
    .whitetext{
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  secretButtonIsClicked = false;
  clickCounter = 1;
  clicks = [];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    
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

  onSecretClick() {
    this.secretButtonIsClicked === true ? this.secretButtonIsClicked = false : this.secretButtonIsClicked = true;
    // this.clicks.push(this.clickCounter++);
    this.clicks.push(new Date());
  }
  
  getClickColor() {
    return this.clickCounter >= 6 ? 'blue' : 'white';
  }
}

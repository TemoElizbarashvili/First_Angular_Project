import { Component } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles : [`
    .online{
        color: white;
    }
    `]
})
export class ServerComponent { 
    serverId: number = 10;
    serverSatatus: string = 'offline';

    constructor() {
        this.serverId = Math.round(Math.random() * 100);
        this.serverSatatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverSatatus;
    }

    getColor() {
        return this.serverSatatus === 'online' ? 'green' : 'red';
    }
}
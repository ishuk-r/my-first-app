import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online{
            color:white;
        }
    `]
})

export class ServerComponent{
    serverNo:number = 1;
    serverStatus:string = "Offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
    }

    getServerStatus = () => this.serverStatus;
    getColor = () => this.serverStatus == "Online" ? "green" : "red";
}
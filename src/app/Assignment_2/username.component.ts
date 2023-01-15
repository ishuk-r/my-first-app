import {Component} from '@angular/core';

@Component({
    selector:"app-user-name",
    templateUrl:"./username.component.html",
    styles:[``]
})

export class UserNameComponent{
    userName:string = "";
    constructor() {
    }

    onReset(){
        this.userName = "";
    }
}
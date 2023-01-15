import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  //styleUrls: ['./warning.component.css']
  styles:[`
    .warning{
      background:red;
      color:#fff;
      font:18px;
      box-sizing:border-box;
    }
  `]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  //styleUrls: ['./success.component.css']
  styles:[`
    .success{
      background:green;
      color:#fff;
      font:18px;
      box-sizing:border-box;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

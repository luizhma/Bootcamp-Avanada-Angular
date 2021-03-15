import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  @Input() c!: number;
  constructor() { }

  ngOnInit(): void {
  }

}

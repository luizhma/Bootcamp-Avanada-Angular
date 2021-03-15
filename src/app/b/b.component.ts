import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  @Input() b!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

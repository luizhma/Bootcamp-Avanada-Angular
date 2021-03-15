import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'spa-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  @Input() a!: number;

  constructor() { }

  ngOnInit(): void {
  }

}



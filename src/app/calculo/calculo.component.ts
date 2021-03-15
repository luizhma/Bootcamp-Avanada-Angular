import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'spa-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  valueA!: number;
  valueB!: number;
  valueC!: number;
  delta!: number;
  x1!: number;
  x2!: number;
  
  calcProfileForm = new FormGroup({
    valorA: new FormControl(''),
    valorB: new FormControl(''),
    valorC: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.valueA = this.calcProfileForm.controls['valorA'].value;
    this.valueB = this.calcProfileForm.controls['valorB'].value;
    this.valueC = this.calcProfileForm.controls['valorC'].value;
    
    this.delta = (this.valueB**2) - 4 * this.valueA * this.valueC;
    this.x1 = (-this.valueB + (Math.sqrt(this.delta))) / (2*this.valueA);
    this.x2 = (-this.valueB - (Math.sqrt(this.delta))) / (2* this.valueA);

    this.calcProfileForm.reset()
  }

}

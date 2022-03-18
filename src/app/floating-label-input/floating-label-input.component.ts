import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.css']
})
export class FloatingLabelInputComponent implements OnInit {

  containerClass = ['floating-label'];
  label: string = '';
  type: string = 'text';
  id: string = '';
  value: string = '';
  min = null;
  required = null;
  ariaDescribedby = null;
  errorMsg = null;
  hasError = false;

  handleInput() {}


  constructor() { }

  ngOnInit(): void {
  }

}

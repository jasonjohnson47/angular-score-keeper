import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.css']
})
export class FloatingLabelInputComponent implements OnInit {

  containerClass = ['floating-label'];
  @Input() label: string = '';
  type: string = 'text';
  @Input() id: string = '';
  @Input() value: string = '';
  min = null;
  @Input() required: boolean | null = null;
  ariaDescribedby = null;
  errorMsg = null;
  hasError = null;

  handleInput() {}


  constructor() { }

  ngOnInit(): void {
  }

}

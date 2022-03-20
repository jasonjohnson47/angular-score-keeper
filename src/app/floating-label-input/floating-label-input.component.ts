import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.css']
})
export class FloatingLabelInputComponent implements OnInit {

  @Input() parentFormGroup: FormGroup = new FormGroup({});
  @Input() parentFormArrayName: string = '';
  @Input() parentFormControlName: number = 0;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean | null = null;
  @Input() focus: boolean | null = null;
  
  containerClass = ['floating-label'];
  min = null;
  ariaDescribedby = null;
  errorMsg = null;
  hasError = null;

  handleFocus() {
    this.containerClass = ['floating-label', 'is-floating', 'has-focus']
  }

  handleFloatingLabels() {
    const value = this.parentFormGroup.value.playerNames[this.parentFormControlName];

    if (value != '') {
      this.containerClass = ['floating-label', 'is-floating'];
    } else {
      this.containerClass = ['floating-label'];
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.handleFloatingLabels();
  }

}

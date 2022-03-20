import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusInput]'
})
export class FocusInputDirective {

  constructor(private el: ElementRef) {

  }

}

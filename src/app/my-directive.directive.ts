import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[myDirective]'
})
export class Mydirective {
  constructor(private control: NgControl) { }
  
  processInput(value: any) {
    return value.toUpperCase();
  }

  @HostListener('ngModelChange', ['$event'])
  ngModelChange(value: any) {
   this.control.valueAccessor?.writeValue(this.processInput(value))
  }
}

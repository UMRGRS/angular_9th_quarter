import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SelectorOptions } from '../interfaces/selector-options';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dropdown-selector',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown-selector.html',
  styleUrl: './dropdown-selector.css'
})
export class DropdownSelector implements OnInit{
  @Input({required:true})
  label:string = "";
  @Input({required:true})
  options:SelectorOptions[] = [];
  @Input()
  initial_value:SelectorOptions | null = null;

  @Output() selection_change = new EventEmitter<SelectorOptions>();

  selector_form = new FormGroup({
    option: new FormControl(),
  });

  ngOnInit(): void {
    this.selector_form.get('option')!.valueChanges.subscribe(value => {
      this.selection_change.emit(value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initial_value'] && changes['options'] && this.options.length > 0) {
      const default_option = this.options.find((element) => element.value == this.initial_value?.value);
      this.selector_form.get('option')!.setValue(default_option);
    }
  }
}

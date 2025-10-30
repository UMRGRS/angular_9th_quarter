import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { BaseOption } from '../../global/interfaces/base-option';

@Component({
  selector: 'app-dropdown-selector',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown-selector.html',
  styleUrl: './dropdown-selector.css'
})
export class DropdownSelector implements OnInit{
  @Input({required:true})
  label:string = "";
  // Change to generic interface later
  @Input({required:true})
  options:BaseOption[] = [];
  @Input()
  initial_value:BaseOption | null = null;

  @Output() selection_change = new EventEmitter<BaseOption>();

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
      const default_option = this.options.find((element) => element.uid == this.initial_value?.uid);
      this.selector_form.get('option')!.setValue(default_option);
    }
  }
}

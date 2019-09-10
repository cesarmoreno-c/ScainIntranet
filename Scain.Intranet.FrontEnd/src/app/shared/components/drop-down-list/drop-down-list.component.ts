import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html'
})
export class DropDownListComponent implements OnInit {

  @Input() items: any;
  @Input() isRequired: boolean;
  @Input() label: string;
  @Input() inputId: string;

  inputValue: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

  setValidators(): void {
   
  }

}

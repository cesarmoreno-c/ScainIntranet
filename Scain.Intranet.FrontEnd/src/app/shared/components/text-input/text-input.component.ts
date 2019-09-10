import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent implements OnInit {

  formValue: FormGroup;

  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() maxLength: number;
  @Input() minLength: number;
  @Input() inputId: string;

  inputValue: string;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

  }

  inputChanges() {
    console.log(this.inputValue);
    
  }

}


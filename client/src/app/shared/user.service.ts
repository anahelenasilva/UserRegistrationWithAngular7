import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _formBuilder: FormBuilder) { }

  formModel = this._formBuilder.group({
    UserName: [''],
    FullName: [''],
    Email: [''],

    Passowrds: this._formBuilder.group({
      Password: [''],
      ConfirmPassword: ['']
    })
  });
}

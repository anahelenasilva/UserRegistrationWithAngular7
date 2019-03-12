import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.register()
    .subscribe(
      (res: any) => {
        if (res.succeded) {
          this.service.formModel.reset();
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicatedUserName':
                // user name is already taken
                break;

              default:
                // registration failed
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}

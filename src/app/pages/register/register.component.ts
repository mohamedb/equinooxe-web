import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { UserRegistrationViewModel } from './registration.viewmodel';
import { RegisterService } from './register.service';
@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
  providers: [RegisterService]
})
export class Register implements OnInit {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public roles: AbstractControl;
  public passwords: FormGroup;
  public errorMessage: string = "";
  public successMessage: string = "";


  public registrationVm = new UserRegistrationViewModel();

  public submitted: boolean = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
       this.initForm();

  }

  public ngOnInit(): void {
    this.registerService.get().then(
      resp => { this.registrationVm = resp; }
    )
  }

  private initForm(): void {
    this.form = this.fb.group({
      'name': ['medmed' , Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['med@med.com', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': this.fb.group({
        'password': ['medmed', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['medmed', Validators.compose([Validators.required, Validators.minLength(4)])]
        }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') }
      ),
     'roles': [] ,
    });
    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
    this.roles = this.form.controls['roles'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.registrationVm.email = this.email.value;
      this.registrationVm.username = this.name.value;
      this.registrationVm.password = this.password.value;
      this.registrationVm.registrationType = "BASIC";
      this.registrationVm.roleIds = this.roles.value;
      console.log('obj ', this.registrationVm);
      this.errorMessage = "";
      this.registerService.save(this.registrationVm).then(
        resp => {
          console.log("Comp success, ", resp);
          this.successMessage = "Object savec successfully, new id:" + resp;

        },
        err => {
          this.errorMessage = err.json().message;
          console.warn("comp err, ", err);
        }
      )
    }
  }
}

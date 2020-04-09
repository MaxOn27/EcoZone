import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { MustMatch } from "../_helpers/must-match.validator";
import { ErrorStateMatcher } from "@angular/material/core";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  user = {
    name: "",
    surname: "",
    username: "",
    password: "",
    email: ""
  };
  // submitted = false;

  Form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {}

  symbolsCount = 6;

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        name: new FormControl(""),
        surname: new FormControl(""),
        username: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [
          Validators.required,
          this.passwordLength.bind(this)
        ]),
        confirm_password: new FormControl("", Validators.required)
      },
      {
        validator: MustMatch("password", "confirm_password")
      }
    );
  }

  // onSubmit() {
  //   console.log("Submited", this.form);
  //   this.authService.register(this.form).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }

  passwordLength(control: FormControl) {
    if (control.value.length <= this.symbolsCount) {
      return {
        passwordLengthError: true
      };
    }
    return null;
  }

  saveUser() {

    console.log("data", this.form);
    const data = {
      // name: this.form.value.name,
      // surname: this.form.value.surname,
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email
    };
    

    this.userService.create(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    // this.submitted = true;
  }

  // newUser() {
  //   this.submitted = false;
  //   this.user = {
  //     name: '',
  //     surname: '',
  //     username: '',
  //     password: '',
  //     email: ''
  //   };
  // }
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { TokenStorageService } from "../services/token-storage.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];


  registerForm: FormGroup;
  user = {
    password: "",
    email: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  Form: FormGroup;

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.Form = new FormGroup({
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required)
    })
  }

  onSubmit() {
    this.authService.login(this.Form.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

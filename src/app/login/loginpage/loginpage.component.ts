import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import {Router} from "@angular/router";


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value == 'kk@gmail.com' && this.loginForm.controls.password.value == 'password') {
        this.router.navigate(['/dashboard']);
    }else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}








// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {first} from "rxjs/operators";

// import {Router} from "@angular/router";


// @Component({
//   selector: 'app-loginpage',
//   templateUrl: './loginpage.component.html',
//   styleUrls: ['./loginpage.component.css']
// })
// export class LoginpageComponent implements OnInit {

//   loginForm: FormGroup;
//   submitted: boolean = false;
//   invalidLogin: boolean = false;
//   constructor(private formBuilder: FormBuilder, private router: Router) { }

//   onSubmit() {
//     this.submitted = true;
//     if (this.loginForm.invalid) {
//       return;
//     }
//     if(this.loginForm.controls.email.value == 'kk@gmail.com' && this.loginForm.controls.password.value == 'password') {
//         this.router.navigate(['/dashboard']);
//     }else {
//       this.invalidLogin = true;
//     }
//   }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }



// }



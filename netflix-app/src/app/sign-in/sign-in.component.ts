import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoHome() {
    this.router.navigate(['/profile']);
  }

  onSubmit(form: NgForm) {
    console.log('submitted');
  }
}

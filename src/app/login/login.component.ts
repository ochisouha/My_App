import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = ''

  constructor(private service: loginService, private router: Router) { }
  ngOnInit(): void { }


  loginuser() {
    this.service.loginuser(this.user).subscribe(
      data => {
        console.log(data);
        if (data.profile == 1 ) {
          this.router.navigate(['/map'])
        }
        if (data.profile == 2 ) {
          this.router.navigate(['/provider'])
        }
        if (data.profile == 3 ) {
          this.router.navigate(['/map']),
          this.router.navigate(['/provider'])
        }
      },
      erreur => {
        console.log("exception occured");
        this.msg = "Bad Credentials, please enter vaild email and password";
      }
    )
  }
}



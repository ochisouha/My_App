import { Component , OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { registerservice } from '../register.service';
import { User } from '../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent implements OnInit {
  user = new User();
  msg=''
  
  constructor(private service:registerservice , private router : Router){ }
  ngOnInit(): void {
    
  }
  changeProfile($event) {
    this.user.profile = $event.target.value
  }
  
  registeruser(){
    console.log(this.user)
    this.service.registeruser(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login'])
      },
      error => { 
        console.log("exception occured");
        alert("Sorry User not register");

      }
    )
  }

  
  
}
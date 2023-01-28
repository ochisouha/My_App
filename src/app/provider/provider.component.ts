import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  provider  = new Provider();
  msg=''
  
  constructor(private service:ProviderService , private router : Router){}
  ngOnInit(): void {
    }
  
  provideruser(){
    this.service.Provideruser(this.provider).subscribe(
      data => {
        console.log(data);
        this.router.navigate
    }
    )
  }
}

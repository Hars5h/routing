import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   userdata:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getuser(){
  let url="https://jsonplaceholder.typicode.com/users";
  this.http.get(url)
  .subscribe(res=>
    {
      console.log(res);
      this.userdata=res;
    })
  }

}

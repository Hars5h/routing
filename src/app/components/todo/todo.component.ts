import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todata:any;

  constructor(private http:HttpClient) { }
 

  ngOnInit(): void {
  }
  Todo(){
    let URL="https://jsonplaceholder.typicode.com/todos";
    this.http.get(URL)
    .subscribe(res=>{
       console.log(res)
       this.todata=res;
    })
  }

}

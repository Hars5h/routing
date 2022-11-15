import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postdata:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getpost(){
    let URL="https://jsonplaceholder.typicode.com/posts";
    this.http.get(URL)
    .subscribe(res=>
      {
        console.log(res);
        this.postdata=res;
      })
  }

}
function subscribe(arg0: (re: any) => void) {
  throw new Error('Function not implemented.');
}


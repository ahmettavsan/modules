import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-and-template',
  templateUrl: './container-and-template.component.html',
  styleUrls: ['./container-and-template.component.css']
})
export class ContainerAndTemplateComponent implements OnInit {
constructor(private http:HttpClient){}
posts!:any[];
  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((x)=>{
      this.posts=x;
    })
  }

}

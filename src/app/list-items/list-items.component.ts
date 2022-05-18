import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ElementConfigService } from '../element-config.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  code:any

  constructor(private ele:ElementConfigService,private http:HttpClient) {
    console.log("i am in list items class");
    this.http.get("https://reqres.in/api/users?page=2").subscribe((data)=>{
      this.code=data;

    })
   }

  ngOnInit() {
  }

}

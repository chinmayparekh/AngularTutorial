import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  arr=['ram','sham','sita'];
  getValue(value){
    console.log(value);
  }
  color='orange';

  update(){
    this.color='pink'; 
  }
  name=['Chinmay','Ram','Sita','Ali','Rohan','Rohit'] ;
  parentComponent(value){
    console.log(value);
  }
  value=[];
  constructor(private user:UsersDataService){
    this.user.getData().subscribe(data =>{
      console.log(data);
      this.value=data;
    })
  }
}

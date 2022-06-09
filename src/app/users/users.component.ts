import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() call:EventEmitter<any> = new EventEmitter()
  constructor() { }
  ngOnInit() :void{
    this.call.emit("Chinmay");
  }

}

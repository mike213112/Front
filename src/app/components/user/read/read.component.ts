import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'asg-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  Users: any = [];

  constructor(private userService: UsersService) {
    this.Users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      this.Users = user as String[];
      console.log(user);
    });
  }

  edit(id: number): void {
    console.log(id);
  }
}

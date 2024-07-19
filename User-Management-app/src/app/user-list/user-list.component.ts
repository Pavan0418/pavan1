import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // users: any[] = [];



  // constructor(private userService: UserService){}
  
  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe(data => {
  //     this.users = data;
  //   });
  
  // }

  // deleteUsers(id:string): void{
  //   this.userService.getUsers().subscribe(() => {
  //     this.users = this.users.filter(user => user.id !== id);
  //   });
  // }


  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUser();
    });
  }

  getUser()
  {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
//this.users = this.users.filter(user => user.userId !== id)
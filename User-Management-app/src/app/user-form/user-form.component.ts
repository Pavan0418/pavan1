import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEdit: boolean = false;
  userId: number | undefined = undefined;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userStatus: ['', [Validators.required, Validators.pattern('^[AIT]$')]],
      department: ['', Validators.required]
    });
  }

  //  ngOnInit(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   if (idParam !== null) {
  //     this.userId = +idParam; // Convert string to number using unary plus operator
  //     this.isEdit = true;
  //     this.userService.getUser(this.userId).subscribe(data => {
  //       this.userForm.patchValue(data);
  //     });
  //   }
  // }


  // ngOnInit(): void {
  //   this.userId = this.route.snapshot.paramMap.get('id');
  //   if (this.userId) {
  //     this.isEdit = true;
  //     this.userService.getUser(this.userId).subscribe(data => {
  //       this.userForm.patchValue(data);
  //     });
  //   }
  // }

  // onSubmit(): void {
  //   if (this.userForm.valid) {
  //     if (this.isEdit && this.userId) {
  //       this.userService.updateUsers(this.userId, this.userForm.value).subscribe(() => {
  //         this.router.navigate(['/users']);
  //       });
  //     } else {
  //       this.userService.createUsers(this.userForm.value).subscribe(() => {
  //         this.router.navigate(['/users']);
  //       });
  //     }
  //   }
  // }


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = +idParam; // Convert string to number using unary plus operator
      this.isEdit = true;
      this.userService.getUser(this.userId).subscribe(data => {
        this.userForm.patchValue(data);
      });
    }
  }

  

  onSubmit(): void {
    console.log("In Form");
    if (this.userForm.valid) {
      console.log("In Form12");
      const user = this.userForm.value;
      if (this.isEdit && this.userId !== undefined) {
        user.userId = this.userId; // Ensure userId is included in the user object
        this.userService.updateUser(this.userId, user).subscribe(() => {
          this.router.navigate(['/users']);
        });
      } else {
        console.log("In Create");
        this.userService.createUser(user).subscribe(() => {
          this.router.navigate(['/users']);
        });
        console.log("Created User");
      }
    }
  }
}

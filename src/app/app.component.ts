import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'random-user';

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  user: any;
  ngOnInit() {
    this.userService.getuser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (err) => {
        this.toastr.error(err.status, 'oops something went worng');
      }
    );
  }
}

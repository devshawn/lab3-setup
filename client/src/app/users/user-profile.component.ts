import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { UserCardComponent } from './user-card.component';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    standalone: true,
    imports: [UserCardComponent]
})
export class UserProfileComponent implements OnInit {

  user: User;
  id: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    // We subscribe to the parameter map here so we'll be notified whenever
    // that changes (i.e., when the URL changes) so this component will update
    // to display the newly requested user.
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
      this.userService.getUserById(this.id).subscribe(user => this.user = user);
    });
  }

}

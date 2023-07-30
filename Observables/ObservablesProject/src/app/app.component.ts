import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSubscription: Subscription;

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe((isActivated: boolean) => {
      this.userActivated = isActivated;
    });
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }

}

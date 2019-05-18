import { Component, OnInit } from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {




  constructor(private pushNotification: NotificationService,
              private swPush: SwPush) {
    this.swPush.messages.subscribe(notification => {
      const notificationData: any = notification;
      const options = {
        body: notificationData.message,
        badgeUrl: notificationData.badgeUrl,
        icon: notificationData.iconUrl
      };
      navigator.serviceWorker.getRegistration().then(reg => {
        console.log('showed notification');
        reg.showNotification(notificationData.title, options).then(res => {
          console.log(res);
        }, err => {
          console.error(err);
        });
      });
    });

  }
  isSupported() {
    return this.pushNotification.isSupported;
  }

  isSubscribed() {
    console.log(' ****** profile component' + this.swPush.isEnabled);
    return this.swPush.isEnabled;
  }

  enablePushMessages() {
    console.log('Enable called');
    this.pushNotification.subscribeToPush();

  }

  disablePushMessages() {
    // code for unsubsribe
  }

  ngOnInit(): void {
  }

}

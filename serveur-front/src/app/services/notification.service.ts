import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwPush} from '@angular/service-worker';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public isSupported = true;
  public isSubscribed = false;
  private swRegistration: any = null;
  private userAgent = window.navigator.userAgent;
  constructor(private http: HttpClient, private swPush: SwPush) {
    if ((this.userAgent.indexOf('Edge') > -1) ||
      (this.userAgent.indexOf('MSIE') > -1) || (this.userAgent.indexOf('.Net')
        > -1)) {
      this.isSupported = false;
    }
  }

  subscribeToPush() {
// Requesting messaging service to subscribe current client (browser)
    const publickey = 'xchbjhbidcidd';
    this.swPush.requestSubscription({
      serverPublicKey: publickey
    }).then(pushSubscription => {
      console.log('request push subscription ', pushSubscription);
      this.createSubscriptionOnServer(pushSubscription);
    })
      .catch(err => {
        console.error(err);
      });
  }

  createSubscriptionOnServer(subscription) {
    const urlName = 'api/user/notificationSubscription';
    let params;
    params = {
      endpoint: subscription.endpoint,
    };
    this.http.put<any>(urlName, params).pipe(
      tap((res) => {
        if (res.res) {
          if (res.res.success) {
            alert('Success');
          } else {
            alert('error');
          }
        }
      }));
  }
}

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public toastController: ToastController,
    public alertController: AlertController,
    public router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.backButton.subscribe(async () => {
        if (this.router.isActive('/home', true) && this.router.url === '/home') {
          const alert = await this.alertController.create({
            header: 'Close app?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel'
              }, {
                text: 'Close',
                handler: () => {
                  // tslint:disable-next-line:no-string-literal
                  navigator['app'].exitApp();
                }
              }
            ]
          });
          await alert.present();
        }
      });
    });
  }
}

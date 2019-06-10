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
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.platform.backButton.subscribe(() => {
        // this does work
        this.presentToast();
        // tslint:disable-next-line:no-string-literal
        navigator['app'].exitApp();
      });
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You are leaving... ',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
}

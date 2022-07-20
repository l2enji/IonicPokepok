import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor( 
    /* private platform:Platform,
    private splashScreen:SplashScreen,
    private statusBar:StatusBar, */
    private navCtrl:NavController
  ){}
}

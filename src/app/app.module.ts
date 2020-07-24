import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutWebModule } from '@kikstart-ui/layout-web';
import { UiNavbarModule } from '@kikstart-ui/ui-navbar';
import { UiHeroModule } from '@kikstart-ui/ui-hero';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutWebModule,
    UiNavbarModule,
    UiHeroModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AddexpenseComponent } from './components/addexpense/addexpense.component'
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AxComponent } from './components/ax/ax.component';
import { MenubarComponent } from './components/menubar/menubar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddexpenseComponent,
    AxComponent,
    MenubarComponent
  ],
  // exports:[
  //   MatTabsModule
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    MatTabsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

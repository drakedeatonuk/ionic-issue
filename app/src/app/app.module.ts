import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./ui/home-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot({
      animated: true,
      mode: 'ios',
    }),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { YearLogComponent } from "./year-log/year-log.component";
import { ExploreComponent } from "./explore/explore.component";
import { AddLogComponent } from './add-log/add-log.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    YearLogComponent,
    ExploreComponent,
    AddLogComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

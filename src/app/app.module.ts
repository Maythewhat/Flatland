import { PageComponent } from './page/page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent, HomeComponent, PageComponent],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

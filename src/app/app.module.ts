import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemsComponent } from './items/items.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {HttpClientModule} from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { RxComponent } from './rx/rx.component';

const routesconfig:Routes=[
  {
    path:"",
    component:HomecomponentComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"list",
    component:ItemsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    FooterMenuComponent,
    MainContainerComponent,
    ListItemsComponent,
    ItemsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomecomponentComponent,
    RxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routesconfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

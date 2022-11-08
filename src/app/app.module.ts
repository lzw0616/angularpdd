import { MyModule } from './my/my.module';
import { RecommendModule } from './recommend/recommend.module';
import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, NotificationInterceptor, paramInterceptor } from './home';
import loccalZh from '@angular/common/locales/zh-Hans'
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'zh-Hans'
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:paramInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:NotificationInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(loccalZh,'zh')
  }
 }

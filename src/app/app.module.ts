import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// @NgModule({
//   imports: [
//     AppComponent
//   ],
//   ...
// })
// export class AppModule {}


@NgModule({
  imports: [
    AppComponent,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
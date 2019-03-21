import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloNadiaComponent } from './hello-nadia/hello-nadia.component';
import { CookingComponent } from './cooking/cooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloNadiaComponent,
    CookingComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

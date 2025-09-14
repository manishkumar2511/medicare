import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule
   

  ],
  providers: [
    provideClientHydration(withEventReplay()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

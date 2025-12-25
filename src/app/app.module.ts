import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(withEventReplay()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { PushPipe } from './push.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'client-a/page1', pathMatch: 'full'},
      { path: 'client-a', component: CoreComponent, children: [
        { path: 'page1', component: Page1Component },
        { path: 'page2', component: Page2Component },
      ]}
    ], { useHash: true }),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    EmptyComponent,
    CoreComponent,
    PushPipe
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

 

}

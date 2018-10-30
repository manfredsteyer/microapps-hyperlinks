
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientAWidgetComponent } from './client-a-widget/client-a-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ClientAWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents: [
    SidebarComponent,
    NavbarComponent,
    ClientAWidgetComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const sidebar = createCustomElement(SidebarComponent, { injector: this.injector });
    customElements.define('sidebar-component', sidebar);

    const navbar = createCustomElement(NavbarComponent, { injector: this.injector });
    customElements.define('navbar-component', navbar);

    const widget = createCustomElement(ClientAWidgetComponent, { injector: this.injector });
    customElements.define('client-a-widget', widget);

  }
}

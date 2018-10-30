import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div>
  <div class="wrapper">
  <div class="sidebar" data-background-color="white" data-active-color="danger">
    
      <div>
        <sidebar-component></sidebar-component>
      </div>
  </div>
  <div class="main-panel">
      
      <navbar-component></navbar-component>
      <div id="content" class="content">
          <p>
          <img src="/assets/img/angular2-logo.png" height="50">
        </p>    
        <div class="card">
          <div class="content">
            <a routerLink="page1">Flight Search</a> | <a routerLink="page2">Advanced</a>
          </div>
        </div>
        
        <router-outlet></router-outlet>
        
        

      </div>
  </div>
</div>
</div>
  `,
  styles: [`
    .client-a { border: navy dashed 5px; padding: 10px; display: block; visibility: show }
  `],
})
export class CoreComponent {
}

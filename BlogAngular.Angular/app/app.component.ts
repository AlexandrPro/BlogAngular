import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
               <div>
                  <nav class='navbar navbar-inverse'>
                       <div class='container-fluid'>
                         <ul class='nav navbar-nav'>
                           <li><a [routerLink]="['article']">Articles</a></li>
                      </ul>
                      </div>
                 </nav>    
              <div class='container'>
                <!--77 router-outlet acts as place holder for dynamically loaded view components.-->
                <router-outlet></router-outlet>
              </div>
             </div>          
`
})

export class AppComponent {

}
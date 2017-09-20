"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "user-app",
        template: "\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/index.html\">Start Bootstrap</a>\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          Menu\n          <i class=\"fa fa-bars\"></i>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/index.html\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/about.html\">About</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html\">Sample Post</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/contact.html\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <router-outlet></router-outlet>     \n\n    <!-- Footer -->\n    <footer>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-md-10 mx-auto\">\n            <ul class=\"list-inline text-center\">\n              <li class=\"list-inline-item\">\n                <a href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/#\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n                  </span>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/#\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n                  </span>\n                </a>\n              </li>\n              <li class=\"list-inline-item\">\n                <a href=\"https://blackrockdigital.github.io/startbootstrap-clean-blog/#\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n            <p class=\"copyright text-muted\">Copyright \u00A9 Your Website 2017</p>\n          </div>\n        </div>\n      </div>\n    </footer>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
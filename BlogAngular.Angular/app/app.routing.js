"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var article_component_1 = require("./components/article.component");
var appRoutes = [
    { path: '', redirectTo: 'article', pathMatch: 'full' },
    { path: 'article', component: article_component_1.ArticleComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
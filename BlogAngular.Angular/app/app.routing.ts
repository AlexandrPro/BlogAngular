import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'article', pathMatch: 'full' },
    { path: 'article', component: ArticleComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
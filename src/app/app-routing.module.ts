import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'counter', loadChildren:() => import('./counter/counter.module').then(cm=> cm.CounterModule)},
    { path: 'posts', loadChildren:() => import('./posts/posts.module').then(pm=>pm.PostsModule)},
    { path: 'auth', loadChildren:() => import('./auth/auth.module').then(am=>am.AuthModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
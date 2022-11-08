import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home';
const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},//根路由
    {path:'',component:HomeContainerComponent},//根路由
    // { path: 'first-component', component: FirstComponent },
    // { path: '**', component: SecondComponent },//匹配所有路由
];
@NgModule({
    imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
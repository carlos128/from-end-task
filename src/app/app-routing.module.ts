import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { TaskModule} from './modules/task/task.module'
const routes: Routes = [
	{path:'',redirectTo:'/login', pathMatch:'full'},
	{path:'login', component:LoginComponent},
	{path:'dashboard',loadChildren:'./modules/task/task.module#TaskModule'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

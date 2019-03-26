import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetalleComponent} from  '../../modules/task/usuario/usuario-detalle/usuario-detalle.component';
import { MaterialComponentModule }  from '../../modules/material-component/material-component.module';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ModalComponent}  from '../../component/modal/modal.component';
import { ChartsModule } from 'ng2-charts';
import { UsuarioService } from  '../../services/usuario.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule  } from '@angular/forms'
import { FilterUserPipe } from '../../filter/filter-user.pipe';
import { SharedDataService } from '../../shared/shared-data.service';
const routes: Routes = [
	{ path: '', component: DashboardComponent, 
			children:[
		{ path:'usuario',component:UsuarioComponent}
	]
	},

];
@NgModule({
	declarations: [
		UsuarioComponent,
		DashboardComponent,
		ModalComponent,
		UsuarioDetalleComponent,
		FilterUserPipe,
	
	 ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MaterialComponentModule,
		FontAwesomeModule,
		ChartsModule,
		ScrollingModule,
		FormsModule

	],
	providers:[
		UsuarioService,
		SharedDataService
	],
	entryComponents: [ModalComponent]
})
export class TaskModule { }

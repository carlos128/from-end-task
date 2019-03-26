import { Component, OnInit } from '@angular/core';
import { faPlus,faEye,faUserEdit,faTrash} from  '@fortawesome/free-solid-svg-icons';
import { MatDialog,MatDialogRef} from '@angular/material'
import { ModalComponent } from '../../../component/modal/modal.component';
import { UsuarioService } from '../../../services/usuario.service'; 
import { UsuarioModelo } from '../../../models/usuario-modelo';
import { SharedDataService } from '../../../shared/shared-data.service';
@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

	faPlus= faPlus; 
	faEye =faEye;
	faUserEdit= faUserEdit;
	faTrash=faTrash;
	usuariosModel:UsuarioModelo[]=[];
	usuarioModelo:UsuarioModelo[];
	usuariodeTalle 
	emailuser='';
	constructor( public dialon:MatDialog,
					private usuarioServices:UsuarioService,
					private  sharedServices: SharedDataService) { }

	
	ngOnInit() {
		this.getUsuarios();
			
	}

	getUsuarios(){
		this.usuarioServices.getUsuarios().subscribe( 
			res=>{
				this.usuariosModel=res;
				console.log(this.usuariosModel)
			}
		)
	}

	usuDetalle( usuarioDetalle:any){
			this.sharedServices._dataSource.next(usuarioDetalle);
	}
	
	openDialon():void{
		const dialonRefe = this.dialon.open(ModalComponent, {
			width:'35%',
		})
	}

}

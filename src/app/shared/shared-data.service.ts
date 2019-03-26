import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import {  UsuarioModelo }  from '../../app/models/usuario-modelo'
@Injectable({ 
	providedIn: 'root'
})
export class SharedDataService {

	data: UsuarioModelo[];
	public _dataSource = new BehaviorSubject<UsuarioModelo[]>([]);
	dataSource$ = this._dataSource.asObservable();

	constructor() { }

}

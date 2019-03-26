import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap,map,catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UsuarioModelo } from '../models/usuario-modelo'; 

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	API_URL = 'https://api-task-pruebac.herokuapp.com/'

	constructor( private http: HttpClient) {
	 }
	
	getUsuarios():Observable<any>{
			return   this.http.get<any>(this.API_URL+'v1/api/usuario')
	}
}

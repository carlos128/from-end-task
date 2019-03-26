import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { tap,map,catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UsuarioModelo } from '../models/usuario-modelo';  

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	API_URL = 'https://api-task-pruebac.herokuapp.com/'
	HTTP_OPTIONS ={
		headers:new HttpHeaders({ 'Content-Type':'application-json'})
	}
	constructor( private http: HttpClient) {}

	saveUsuario(usuario:any):Observable<UsuarioModelo>{
		return  this.http.post(this.API_URL+'usuario',usuario,this.HTTP_OPTIONS).
						pipe(tap( (usuario:UsuarioModelo)=> console.log(usuario)),
						catchError(this.handleError<UsuarioModelo>("saveUsuario")))
	}
	login(value:any):Observable<any>{
		return  this.http.post(this.API_URL+'login',value,this.HTTP_OPTIONS).
						pipe(tap( (value)=> console.log(value)),
						catchError(this.handleError<UsuarioModelo>("saveUsuario")))
	}
	
	private  handleError<T>( operation = 'operation',resul?:T){
		return (error:any):Observable<T>=>{
			console.error(error)
			return  of( resul as T)
		}
	}
}
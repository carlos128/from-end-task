import   { Tokens } from '../../../models/token.model';
export class GetToken{

constructor(){

}

saveToken( token:any): void {
	localStorage.setItem('token',JSON.stringify(token));
}

returToken():Tokens{
	let token = JSON.parse(localStorage.getItem('token'));
	return token;
}
}
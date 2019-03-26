import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: any, arg: any): any {
		const  listuser= [];
		for( const usuarioModelo  of value){
				if( usuarioModelo.email.indexOf(arg) > -1){
					listuser.push(usuarioModelo)
				}
		}
	return listuser
	}

			
}

import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA}  from  '@angular/material';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	constructor(
		public  dialonRef:MatDialogRef<ModalComponent>
	) { }
	onNoClick():void{
		this.dialonRef.close()
	}
	ngOnInit() {
	}

}

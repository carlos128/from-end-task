import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
MatSidenavModule,
MatButtonModule,
MatDividerModule,
MatDialogModule,
MatCardModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatButtonModule,
		MatDividerModule,
		MatDialogModule,
		MatCardModule
	],
	exports:[
		MatSidenavModule,
		MatButtonModule,
		MatDividerModule,
		MatDialogModule,
		MatCardModule
	]
})
export class MaterialComponentModule { }

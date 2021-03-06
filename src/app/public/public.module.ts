import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    SharedModule,
    PublicRoutingModule
  ],
  declarations: [
  	PublicComponent
  ],
  providers: [
  ]
})
export class PublicModule { }

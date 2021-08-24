import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyRootComponent } from './property-root/property-root.component';
import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddPropertyComponent,
    PropertyRootComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule
  ],
  exports: [
    PropertyRootComponent
  ]
})
export class PropertyModule { }

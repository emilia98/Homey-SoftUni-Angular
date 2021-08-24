import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRootComponent } from './user-root/user-root.component';
import { UserHeaderComponent } from './core/user-header/user-header.component';
import { UserFooterComponent } from './core/user-footer/user-footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PropertyModule } from './property/property.module';

@NgModule({
  declarations: [
    UserRootComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    PropertyModule,
  ]
})
export class UserModule { }

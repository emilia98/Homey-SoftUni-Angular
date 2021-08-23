import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRootComponent } from './user-root/user-root.component';
import { UserHeaderComponent } from './core/user-header/user-header.component';
import { UserFooterComponent } from './core/user-footer/user-footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserRootComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

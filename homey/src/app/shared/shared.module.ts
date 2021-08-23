import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMapComponent } from './search-map/search-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    SearchMapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    })
  ],
  exports: [
    SearchMapComponent
  ]
})
export class SharedModule { }

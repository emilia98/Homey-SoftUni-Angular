import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMapComponent } from './search-map/search-map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { FloatingLabelInputComponent } from './floating-label-input/floating-label-input.component';

@NgModule({
  declarations: [
    SearchMapComponent,
    FloatingLabelInputComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey,
      libraries: ['places']
    })
  ],
  exports: [
    SearchMapComponent,
    FloatingLabelInputComponent
  ]
})
export class SharedModule { }

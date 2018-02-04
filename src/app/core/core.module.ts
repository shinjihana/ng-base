import { MaterialModule } from '../material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AdminLayoutComponent } from 'app/core/components/layouts/admin-layout/admin-layout.component';

export const COMPONENTS = [
  AdminLayoutComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports : COMPONENTS
})
export class CoreModule { 

}

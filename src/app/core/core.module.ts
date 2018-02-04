import { MaterialModule } from '../material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component';
import { AppCommonModule } from './components/app-common.module';

export const COMPONENTS = [
  AdminLayoutComponent,
];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppCommonModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports : COMPONENTS
})
export class CoreModule { 

}

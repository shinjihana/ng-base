import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { MaterialModule } from '../../material';
import { TopbarComponent } from './topbar/topbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CommonDirectivesModule } from './../directives/common/common-directives.module';
import { ThemeService } from './../services/theme/theme.service';
import { CustomizerComponent } from './customizer/customizer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

export const COMPONENTS = [
  AuthLayoutComponent,
  TopbarComponent, 
  NavigationComponent, 
  NotificationsComponent, CustomizerComponent, BreadcrumbComponent
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    CommonDirectivesModule,
    TranslateModule,
    MaterialModule,
  ],
  declarations: [
    COMPONENTS
  ],
  providers: [ThemeService],
  exports: [COMPONENTS]
})
export class AppCommonModule {}
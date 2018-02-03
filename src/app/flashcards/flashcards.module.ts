import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlashcardsRoutingModule } from './flashcards-routing.module';
import { MaterialModule } from '../material';

import { FlashcardsComponentsModule } from './components/index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlashcardsRoutingModule,
    FlashcardsComponentsModule,
  ],
  declarations: []
})
export class FlashcardsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MaterialModule } from '../material/material.module';
import { FeatureComponent } from './feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EffectsModule } from '@ngrx/effects';
import { FirestoreModule } from '@angular/fire/firestore';
import { UserMessagesEffects } from 'src/app/store/user-messages/user-messages.effect';

@NgModule({
  declarations: [MessagesComponent, FeatureComponent, AddMessagesComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FirestoreModule,
    EffectsModule.forFeature([UserMessagesEffects]),
  ],
})
export class FeatureModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FeatureComponent } from './feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMessagesComponent } from './add-messages/add-messages.component';

@NgModule({
  declarations: [MessagesComponent, FeatureComponent, AddMessagesComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FeatureModule {}

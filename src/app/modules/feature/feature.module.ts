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
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FeatureComponent } from './feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
})
export class FeatureModule {}

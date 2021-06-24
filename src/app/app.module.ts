import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewCompanyComponent } from './components/view-company/view-company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { StringTransformerPipe } from './pipes/string-transformer.pipe';

/* Angular Material Imports */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';

/* Firebase Imports */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { DatabaseService } from './services/database.service';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewCompanyComponent,
    AddCompanyComponent,
    StringTransformerPipe,
    LoadingDialogComponent,
    EditCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ScrollingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

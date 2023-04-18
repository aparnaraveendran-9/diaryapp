import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { provideFirebaseApp,  initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   AppRoutingModule,
   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

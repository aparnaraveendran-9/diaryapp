import { Injectable } from "@angular/core";
import{Note} from './note';
import{Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc}from '@angular/fire/firestore'

import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class NoteService{
  
    constructor(private fs:Firestore){}
    //AddnewNote Code here
    addNote(note:Note){
        note.id = doc(collection(this.fs,'id')).id
        return addDoc(collection(this.fs,'Notes'),note)
    }
    // get All notes from Database
    getNotes():Observable<Note[]>{
        let notesRef = collection(this.fs,'Notes')
        return collectionData(notesRef, {idField:'id'}) as Observable<Note[]>

    }
    // Delete notes from database
    deleteNote(note:Note){
        let docRef = doc(collection(this.fs,`Notes/${note.id}`));
        return deleteDoc(docRef)
    }
    // update Notes from database
    updateNote(note: Note, notes: any) {
        const docRef = doc(this.fs, `Notes/${note.id}`);
        return updateDoc(docRef, notes);
      }
}
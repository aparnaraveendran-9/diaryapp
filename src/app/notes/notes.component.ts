import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  noteForm!: FormGroup;
  noteObj: Note={
    id: '',
    note_title: '',
    note_dec: ''
  }
constructor(private fb:FormBuilder,private noteService:NoteService){ 
  this.noteForm = this.fb.group({
    title:['',Validators.required],
   description:['',Validators.required]
  })
}
ngOnInit():void{}
addNote(){
  const{ value } = this.noteForm
  console.log(value);
  this.noteObj.note_title = value.title,
  this.noteObj.note_dec = value.description,
  this.noteService.addNote(this.noteObj).then((note)=>{
    if(note){
      alert("note added Successfully")
    }
  })
}
}

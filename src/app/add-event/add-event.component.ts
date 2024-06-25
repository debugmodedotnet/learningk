import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventService } from '../event.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {

  formBuilder = inject(FormBuilder);
  eventService = inject(EventService);
  addEventForm: FormGroup;
  isEventAdded = false; 


  constructor(){
    this.addEventForm = this.formBuilder.group({
      Id: ['', Validators.required],
      Title: ['', Validators.required],
      Description: ['', Validators.required],
      Tech: ['', Validators.required],
      Date: ['', Validators.required],
    });
  }

  addEvent(){
    if(this.addEventForm.valid){
      console.log(this.addEventForm.value);
      this.eventService.addEvent(this.addEventForm.value);
      this.isEventAdded = true;
      this.addEventForm.reset();

    }
  }

}


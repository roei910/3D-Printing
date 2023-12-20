import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  suggestionForm!: FormGroup;

  constructor(private dbService: DatabaseService){

  }

  ngOnInit(): void {
    this.suggestionForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      topic: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      tags: new FormArray([
      ])
    })
  }

  OnSuggestionSubmit(){
    if(this.suggestionForm.valid){
      let suggestion = this.suggestionForm.value;
      this.dbService.enterSuggestion(suggestion);
      alert('Your Suggestion was successfully submitted');
      this.suggestionForm.reset();
      let formArray: FormArray = this.suggestionForm.get('tags') as FormArray
      // remove all tags from tags form array
      for(let i = 0; i < formArray.length; i){
        formArray.removeAt(i);
      }
    }
    else{
      alert('Suggestion was not submitted, invalid values');
    }
  }

  getTags(){
    return this.suggestionForm.get('tags') as FormArray;
  }

  addTag(){
    let formArray: FormArray = this.suggestionForm.get('tags') as FormArray;
    formArray.push(new FormControl('', Validators.required));
  }

  removeTag(index?: number){
    let formArray: FormArray = this.suggestionForm.get('tags') as FormArray;
    if(index === undefined){
      formArray.removeAt(formArray.length-1);
    }
    else{
      formArray.removeAt(index);
    }
  }

  canExit(){
    let email = this.suggestionForm.get('email')?.value;
    let topic = this.suggestionForm.get('topic')?.value;
    let description = this.suggestionForm.get('description')?.value;
    let invalid = this.suggestionForm.invalid && this.suggestionForm.touched;
    if(email || topic || description || invalid){
      return confirm('Are you sure you want to exit?');
    } else {
      return true;
    }
  }
}

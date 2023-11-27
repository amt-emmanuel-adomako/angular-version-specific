import { style } from '@angular/animations';
import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'Hello world!';
  // @ViewChild('docName') docname: ElementRef;
  progressBar = document.getElementsByClassName('form-progress-bar')
  progress= 0
  nameBool = false
  emailBool = false
  categoryBool = false
  docTypeBool = false
  constructor(){}
  
  docNameChange(element){
    if (element.target.value.length>1 &&  element.target.value.length<129) {
      if (!this.nameBool) {
        this.progress = this.progress + 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.nameBool = !this.nameBool
      }
    }
    else{
      if (this.nameBool) {
        this.progress = this.progress - 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.nameBool = !this.nameBool
      }
    }
  }
  emailChange(element){
    if (element.target.value.match(/^[a-z\d]+@[a-z\d]+(?:\.[a-z\d]+)+$/)) {
      if (!this.emailBool) {
        this.progress = this.progress + 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.emailBool = !this.emailBool
      }
    }
    else{
      if (this.emailBool) {
        this.progress = this.progress - 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.emailBool = !this.emailBool
      }
    }
  }

  categoryChange(element){
    if (element.target.value != '') {
      if (!this.categoryBool) {
        this.progress = this.progress + 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.categoryBool = !this.categoryBool
      }
    }
    else{
      if (this.categoryBool) {
        this.progress = this.progress - 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.categoryBool = !this.categoryBool
      }
    }
  }

  docTypeChange(element){
    if (element.target.value != '') {
      if (!this.docTypeBool) {
        this.progress = this.progress + 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.docTypeBool = !this.docTypeBool
      }
    }
    else{
      if (this.docTypeBool) {
        this.progress = this.progress - 25
        document.getElementsByClassName('form-progress-bar')[0].setAttribute("style", `width: ${this.progress}%;`)
        this.docTypeBool = !this.docTypeBool
      }
    }
  }
  ngOnInit(): void {
    
  }
}

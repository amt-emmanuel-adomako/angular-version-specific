import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'Hello world!';
  @ViewChild('docName') docname: ElementRef;
  document_type = document.getElementById('documentType')

  constructor(){}
  
  docNameChange(element){
    if (element.target.value.length>1 &&  element.target.value.length<129) {
      console.log(element.target.value);
    }
  }
  emailChange(element){
    if (element.target.value.match(/^[a-z\d]+@[a-z\d]+(?:\.[a-z\d]+)+$/)) {
      console.log(element.target.value);
    }
  }

  categoryChange(element){
    if (element.target.value != '') {
      console.log(element.target.value);
    }
  }

  docTypeChange(element){
    if (element.target.value != '') {
      console.log(element.target.value);
    }
  }
  ngOnInit(): void {
    
  }
}

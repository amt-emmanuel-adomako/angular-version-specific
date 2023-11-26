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
    console.log(element.target.value.length);
  }
  emailChange(element){
    console.log(element.target.value.length);
  }

  categoryChange(element){
    console.log(element.target.value);
  }

  docTypeChange(element){
    console.log(element.target.value);
  }
  ngOnInit(): void {
    
  }
}

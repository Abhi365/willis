import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

 
    values;
 
    constructor(private http:Http) {
        this.http.get('./data/documents.json')
                .subscribe(res => this.values = res.json());
	}

  ngOnInit() {
  }

}

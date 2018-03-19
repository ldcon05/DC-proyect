import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  name: string
  lastname: string
  work: string

  constructor() { }

  ngOnInit() {
    this.name = 'Daniel'
    this.lastname = 'Con'
    this.work = '{ Full Stack Developer }'
  }

}

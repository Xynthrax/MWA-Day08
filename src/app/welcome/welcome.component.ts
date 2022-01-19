import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  school = [
    {
      name: 'Johnny',
      gpa: 3.9,
    },
    {
      name: 'Papa',
      gpa: 2.5,
    },
    {
      name: 'Sugar',
      gpa: 3.2,
    },
  ];

  ngOnInit(): void {}
}

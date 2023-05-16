import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title:string = ""

  questions: any
  questionsSelected: any

  answers: string[] = []
  answerSelected: string = ""

  questionsIndex:number = 0
  questionMax:number = 0

  finished: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import quizz_questions from "src/assets/data/quizz_questions.json"

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
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions [this.questionsIndex]

      this.questionsIndex = 0
      this.questionMax = this.questions.length
    }
  }

  playerChoose(value: string){
    this.answers.push(value)
    console.log(this.answers)
    console.log("teste")
  }

  async nextStep(){
    this.questionsIndex+=1

    if(this.questionMax > this.questionsIndex){
      this.questionsSelected = this.questions[this.questionsIndex]
    }else {
      this.finished = true
    }
  }

}

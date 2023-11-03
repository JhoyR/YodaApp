// Defina a interface para a resposta da API
export interface ApiResponse {
  success: boolean;
  totalRecords: number;
  data: FaqAnswer[];
  question: FaqQuestion[];
}

export interface FaqQuestion {
  id: number;
  description: string;
  answerId: number;
  answer: Answer;
}

export interface FaqAnswer {
  id: number;
  description: string;
  question: Question[];
}

export interface ReturnAnswer{
  id:number,
  description: string;
}

// Defina a interface para os objetos Question
export class Question {
  id: number = 0;
  description: string = "";
  answerId: number = 0;
}

// Defina a interface para os objetos Answer
export class Answer {
  id: number = 0;
  description: string = "";
}
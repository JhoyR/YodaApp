// Defina a interface para a resposta da API
export interface ApiResponse {
  success: boolean;
  totalRecords: number;
  data: FaqItem[];
}

// Defina a interface para os objetos FAQ
export interface FaqItem {
  id: number;
  description: string;
  answerId: number;
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
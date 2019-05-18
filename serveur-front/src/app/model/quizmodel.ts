export class Quizmodel {

  ID: number;
  language: string;
  question: string;
  anslistobj: string[];
  answer: string;

  constructor(  ID: number, language: string, question: string,
                anslistobj: string[], answer: string) {
    this.ID = ID;
    this.language = language;
    this.anslistobj = anslistobj;
    this.answer = answer;
  }
}
export class Answermodel {

  option: string[];
  constructor(option: string[]) {

    this.option = option;

  }
}



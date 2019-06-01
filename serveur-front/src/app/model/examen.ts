import {Inscription} from "./inscription";

export class Examen {

  id: number;
  date: Date;
   numConvocation: number;
  centreExamen: string;
  fraisInscription: number;
  resultat: string;
  etat: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  inscription: Inscription;

}

import {Inscription} from './inscription';

export class Seance {
  id: number;
  date: Date;
  place: string;
  prix: string;
  nbHoraire: string;
  nbSeanceAtteint: number;
  inscription: Inscription;
}

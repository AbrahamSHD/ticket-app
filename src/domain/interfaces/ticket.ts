
export interface Ticket {

  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string; // Escritorio asignado (1, 2, 3...)
  handleAt?: Date;
  done: boolean;

}

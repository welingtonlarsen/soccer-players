import { PlayerType } from "../enums/PlayerType";

export class Player {
  constructor(private type: PlayerType, readonly name: string, private age: number) {}

  format(): string {
    return `Posição: ${this.type} | Idade: ${this.age}`
  }
}
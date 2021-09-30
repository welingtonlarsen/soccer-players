import { PlayerType } from "../enums/PlayerType.js";
import { NewPlayerFormDom } from "../models/NewPlayerFormDom.js";
import { Player } from "../models/Player.js";

export class PlayerAdapter {
  constructor() {}

  adaptFromNewPlayerFormDom(newPlayerFormDom: NewPlayerFormDom): Player {
    const typeInputElement = newPlayerFormDom.type.value;
    const parsedType = this.parsePlayerType(typeInputElement);
    return new Player(
      parsedType,
      newPlayerFormDom.name.value,
      newPlayerFormDom.age.valueAsNumber
    );
  }

  private parsePlayerType(type: String): PlayerType {
    if (type === "goalkeeper") return PlayerType.Goalkeeper;
    if (type === "defender") return PlayerType.Defender;
    if (type === "midfield") return PlayerType.Midfield;
    if (type === "striker") return PlayerType.Striker;
    throw Error("invalid type");
  }
}

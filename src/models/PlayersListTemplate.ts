import { Player } from "./Player.js";

export class PlayersListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(player: Player) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = player.name;
    p.innerText = player.format();
    li.append(h4);
    li.append(p);
    this.container.append(li);
  }
}

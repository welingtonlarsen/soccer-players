import { PlayerAdapter } from "../adapters/PlayerAdapter.js";
import { PlayersListTemplate } from "../models/PlayersListTemplate.js";
import { NewPlayerFormDom } from "../models/NewPlayerFormDom.js";

export class AddButtomService {
  constructor() {}

  handleButtomClick(document: Document) {
    this.getFormFromDocument(document).addEventListener(
      "submit",
      (event: Event) => {
        this.handleSubmitEvent(event, document);
      }
    );
  }

  private getFormFromDocument(document: Document) {
    return document.querySelector(".new-player-form") as HTMLFormElement;
  }

  private handleSubmitEvent(event: Event, document: Document) {
    event.preventDefault();
    const newPlayerFormDom = new NewPlayerFormDom(document);
    const player = new PlayerAdapter().adaptFromNewPlayerFormDom(
      newPlayerFormDom
    );
    const playersListTemplate = new PlayersListTemplate(
      this.getUlListFrom(document)
    );
    playersListTemplate.render(player);
  }

  private getUlListFrom(document: Document) {
    return document.querySelector(".players-list") as HTMLUListElement;
  }
}

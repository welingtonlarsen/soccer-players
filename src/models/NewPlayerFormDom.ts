export class NewPlayerFormDom {
  readonly type: HTMLInputElement;
  readonly name: HTMLInputElement;
  readonly age: HTMLInputElement;

  constructor(document: Document) {
    this.type = document.querySelector("#type") as HTMLInputElement;
    this.name = document.querySelector("#name") as HTMLInputElement;
    this.age = document.querySelector("#age") as HTMLInputElement;
  }
}

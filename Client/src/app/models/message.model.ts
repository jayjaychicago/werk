
export class Message {

  constructor(private _socket: any, private _data: any) {

  }

  public get socket(): any {
    return this.socket;
  }

  public get data(): any {
    return this._data;
  }
}

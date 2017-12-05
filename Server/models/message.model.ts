
export class Message {
    
    constructor(private message: string, private _socket: any, private _data: any) {
        
    }
    
    public get socket(): any {
        return this.socket;
    }

    public get data(): any {
        return this._data;
    }
}
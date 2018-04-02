

export class CompanyUserItem {

  private _userName: string;
  private _userAvatar: string;
  private _userLevel: number;
  private _companyId: number;
  private _companyName: string;
  private _companyMissionStatement;

  public CompanyUserItem(){}

  public get UserName(): string {
    return this._userName;
  }

  public get UserAvatar(): string {
    return this._userAvatar;
  }

  public get UserLevel(): number {
    return this._userLevel;
  }

  public get CompanyId(): number {
    return this._companyId;
  }

  public get CompanyName(): string {
    return this._companyName;
  }

  public get CompanyMissionStatement(): string {
    return this._companyMissionStatement;
  }

  public set UserName(value: string) {
    this._userName = value;
  }

  public set UserAvatar(value: string) {
    this._userAvatar = value;
  }

  public set UserLevel(value: number) {
    this._userLevel = value;
  }

  public set CompanyId(value: number) {
    this._companyId = value;
  }

  public set CompanyName(value: string) {
    this._companyName = value;
  }

  public set CompanyMissionStatement(value: string) {
    this._companyMissionStatement = value;
  }
}

export default class Client {
  private id: string;
  private name: string;
  private age: number;

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static empty(): Client {
    return new Client("", "", 0);
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}

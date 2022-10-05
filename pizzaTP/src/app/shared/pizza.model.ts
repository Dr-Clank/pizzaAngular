export class Pizza {
  public name: string;
  public desc: string;
  public img: string;

  constructor(name: string, img: string, desc: string) {
    this.name = name;
    this.desc = desc;
    this.img = img;
  }
}
  // public getImg(): string {
  //   return this.img;
  // }
  // public setImg(image: string): void {
  //   this.img = image;
  // }
  // public getName(): string {
  //   return this.name;
  // }
  // public setName(name: string): void {
  //   this.desc = name;
  // }
  // public getDesc(): string {
  //   return this.desc;
  // }
  // public setDesc(desc: string): void {
  //   this.desc = desc;
  // }

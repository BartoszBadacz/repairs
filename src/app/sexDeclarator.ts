type SexType = 'male' | 'female';

interface DeclareSex {
  declareSex(): void
}

class Sex implements DeclareSex {
  private sex: SexType;

  constructor(sex: SexType) {
    this.sex = sex;
    this.declareSex();
  }

  declareSex(): void {
    console.log(`Hello friends. I am 100% ${this.sex} and i'm proud of it!`)
  }
}

export function sexCreator(sex: SexType): Sex {
  return new Sex(sex);
}

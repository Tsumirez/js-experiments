class Zef {
  constructor() {
    this.name = "Zef";
    this.age = 40;
    return new Proxy(this, {
      get(target, prop, receiver) {
        return "He is " + target[prop];
      },
      set(target, prop, value, receiver) {
        if (prop == "age" && typeof value !== "number") return;
        return Reflect.set(target, prop, value);
      },
    });
  }
}

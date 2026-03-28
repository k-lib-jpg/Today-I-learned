// インスタンスメソッド
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new User("Taro");
user.greet();

// 静的メソッド
class User {
  static createGuest() {
    return new User("Guest");
  }

  constructor(name) {
    this.name = name;
  }
}

const guest = User.createGuest();
console.log(guest.name);

// インスタンス化しているかしていないかの違い

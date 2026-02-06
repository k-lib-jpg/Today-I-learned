
  type User = {
    name: string,
    age: number
  }
  const user: User = { name: 'Taro', age: 10}

  type UserName = string;
  type UserAge =number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }

  const UserProfile: UserProfile = {
    name: 'Hanako',
    age: 21,
    gender: "woman"
  }


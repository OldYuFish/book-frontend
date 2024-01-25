export interface Login {
  username: string
  password: string
}

export interface UserQuery {
  username: string
}

export interface UserInfo {
  id: number
  userId: string
  realName: string
  sex: string
  vipLevel: string
  score: number
  couldBorrow: number
  hasBorrowed: number
  amount: number
  registerDate: string
}

export interface UserDetail {
  userId: string
  username: string
  realName: string
  password: string
  sex: string
  nation: string
  duties: string
  couldBorrow: number
  registerDate: string
  status: string
  idType: string
  idCardNumber: string
  phone: string
  marriage: string
  address: string
  note: string
}


export interface IRegisterUserLeader {
    name: string,
    email: string,
    password: string,
    eventName: string,
    type: string
    startDateTime?: string,
    endDateTime?: string,
    images?: string[],
    description?: string,
    isOpen?: boolean
  }

export interface IRegisterUserPlayer {}
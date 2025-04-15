
export interface IRegisterNewEvent {
    eventName: string,
    type: string
    startDateTime?: string,
    endDateTime?: string,
    images?: string[],
    description?: string,
  }

export interface IRegisterUserPlayer {}
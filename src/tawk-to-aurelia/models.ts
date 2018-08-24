export class UserDetails {
  constructor(
    public name: string,
    public email: string,
    public hash?: string
  ) {}
}

export interface Tawk_API {
  onLoad(): void;
  setAttributes(attributes: { [key: string]: string }, callback: (error: any) => void): void
  visitor: { name: string, email: string, hash?: string }
  getStatus(): "online" | "away" | "offline"
}


import { Tawk_API } from "./models";


export class TawkToService {
  public api: Tawk_API;
  
  constructor() {
    if (!(window as any).Tawk_API) {
      (window as any).Tawk_API = {} as Tawk_API;
      this.api = (window as any).Tawk_API;
    }
  }
}

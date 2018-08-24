import { autoinject } from "aurelia-framework";

import { UserDetails } from "./tawk-to-aurelia/models";
import { TawkToService } from "tawk-to-aurelia/tawk-to-service";

@autoinject
export class App {
  message = 'Hello World!';
  userDetails = new UserDetails("Demo Visitor", "visitor@test.com");
  loggedIn = false;
 
  constructor(private tt: TawkToService) {

  }

  public updateDetails() {
    this.userDetails = new UserDetails(this.userDetails.name, this.userDetails.email);
    this.loggedIn = true;
  }
}

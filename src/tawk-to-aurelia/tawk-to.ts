import {
  autoinject,
  bindable,
  noView
} from "aurelia-framework";

import { UserDetails } from "./models";
import { TawkToService } from "./tawk-to-service";

@autoinject
@noView
export class TawkTo {
  @bindable accountId: string;
  @bindable widgetName: string = "default";
  @bindable userDetails: UserDetails;

  constructor(private service: TawkToService, private element: Element) {}

  public attached() {
    if (!this.accountId) {
      throw new Error("No accountId provided");
    }

    const remoteScript = document.createElement("script");
    remoteScript.async = true;
    remoteScript.src = `https://embed.tawk.to/${this.accountId}/${this.widgetName}`;
    remoteScript.charset = "UTF-8";
    remoteScript.setAttribute("crossorigin", "*");

    this.element.appendChild(remoteScript);
  }

  userDetailsChanged(newDetails: UserDetails) {
    if (this.service.api.getStatus) {
      this.service.api.setAttributes({
        name: newDetails.name,
        email: newDetails.email,
        hash: newDetails.hash
      }, function (error) {
        if (error === "UNAUTHORIZED_API_CALL") {
          throw new Error("You need to provide a hash along the UserDetails. This has to be calculated from the users email using your API Key (Dashboard -> Property Settings)")
        }
      });      
    } else {
      this.service.api.visitor = {
        name: this.userDetails.name,
        email : this.userDetails.email
      };
    }
  }
}

import {
  FrameworkConfiguration,
  PLATFORM
} from "aurelia-framework";

export function configure(config: FrameworkConfiguration) {
  config.globalResources([PLATFORM.moduleName("./tawk-to")]);
}

export * from "./models";
export * from "./tawk-to-service";
export * from "./tawk-to";

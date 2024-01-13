import * as dotenv from "dotenv";

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({ path: nodeNameEnv });
  }

  public getEnvironment(currentVariable: string): string | undefined {
    return process.env[currentVariable];
  }

  public getNumberEnv(currentVariable: string): number {
    return Number(this.getEnvironment(currentVariable));
  }

  public get nodeEnv(): string {
    return this.getEnvironment("NODE_ENV")?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const arrayEnv: Array<string> = ["env"];

    if (path.length > 0) {
      const stringToArray = path.split(".");
      arrayEnv.unshift(...stringToArray);
    }

    return "." + arrayEnv.join(".");
  }
}

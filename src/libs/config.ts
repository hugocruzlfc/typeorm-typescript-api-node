import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

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

  public get typeORMConfig() {
    const MysqlDataSource = new DataSource({
      type: "mysql",
      host: this.getEnvironment("DB_HOST"),
      port: this.getNumberEnv("DB_PORT"),
      username: this.getEnvironment("DB_USER"),
      password: this.getEnvironment("DB_PASSWORD"),
      database: this.getEnvironment("DB_DATABASE"),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
      synchronize: true,
      logging: false,
      namingStrategy: new SnakeNamingStrategy(),
    });

    return MysqlDataSource;
  }

  async dbConnect(): Promise<DataSource> {
    return this.typeORMConfig.initialize();
  }
}

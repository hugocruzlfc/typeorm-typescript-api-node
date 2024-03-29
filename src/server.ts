import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from "./libs";
import { UserRouter } from "./user";
import { PurchaseProductRouter, PurchaseRouter } from "./purchase";
import { ProductRouter } from "./product";
import { CustomerRouter } from "./customer";
import { CategoryRouter } from "./category";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.dbConnect();

    this.app.use("/api", this.routers());
    this.listen();

    this.app.get("/", (req, res) => {
      res.send("Welcome to this API REST made with Node.js and TypeScript 🚀");
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new PurchaseRouter().router,
      new ProductRouter().router,
      new CustomerRouter().router,
      new CategoryRouter().router,
      new PurchaseProductRouter().router,
    ];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => console.log("Database connected ⚙️"))
      .catch((error) => console.log(error));
  }
}

new ServerBootstrap();

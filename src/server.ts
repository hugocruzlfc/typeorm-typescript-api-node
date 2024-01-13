import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./router";

class ServerBootstrap {
  public app: express.Application = express();
  private port: number = 4000;

  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
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
    const routes: Array<express.Router> = [new UserRouter().router];
    return routes;
  }
}

new ServerBootstrap();

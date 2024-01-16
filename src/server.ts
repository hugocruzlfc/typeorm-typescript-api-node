import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConfigServer } from "./libs";
import { UserRouter } from "./user";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.dbConnect()
      .then(() => console.log("Database connected ⚙️"))
      .catch((error) => console.log(error));
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

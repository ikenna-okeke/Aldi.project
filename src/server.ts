import cds from "@sap/cds";
import "reflect-metadata";
import express from "express";
import { createCombinedHandler, useContainer } from "cds-routing-handlers";

export class Server {
  public static async run() {
    // @ts-ignore
    const app = express();

    await cds.connect("db");
    cds
      .serve("all")
      .at("Admin")
      .in(app)
      .with((srv: any) =>
        createCombinedHandler({
          handler: [__dirname + "/handlers/**/*.js", __dirname + "/functions/**/*.js"],
        })(srv)
      );

    const port = process.env.PORT || 3001;
    app.listen(port, async () => {
      console.info(`Server is listing at http://localhost:${port}`);
    });
  }
}

Server.run();

////////////////

import cds, { Request } from "@sap/cds";
import { OnRead, Entities, Handler, Req, BeforeCreate, AfterCreate } from "cds-routing-handlers";
import { GalacticSpaceFarers, GalacticSpaceFarer } from "../../@cds-models/Admin/index";
import sgMail from "@sendgrid/mail";
import { IMessage } from "../utils";

@Handler(GalacticSpaceFarers.name)
export class AdminHandler {
  @BeforeCreate()
  public async beforeCreate(@Req() req: Request) {
    const { stardustCollection, wormholeNavigationSkill } = req.data;

    if (!wormholeNavigationSkill || wormholeNavigationSkill < 0) {
      req.error(400, "Wormhole Navigation Skill must be a psoitive integer or zero.");
      // return req.reject(statuscode, message)
    }

    if (!stardustCollection || stardustCollection < 0) {
      req.error(400, "Stardust collection must be a positive integer.");
      // return req.reject(statuscode, message)
    }
  }

  @AfterCreate()
  public async createGalaxy(@Entities() galaxy: GalacticSpaceFarer) {
    const { name, email } = galaxy;
    const msg = {
      to: email,
      from: process.env.SENDGRID_SENDER,
      subject: "Low Stock Alert",
      text: `welcome to the galaxy ${name}`,
      html: `<strong> Dear ${name} we congratulate you on starting Your adventurous journey among the stars.</strong>`,
    };

    //using the TWILO API to send an email to the newly created spaceFahrer
    // you can read up here https://www.twilio.com/en-us/blog/send-and-receive-email-with-sap-cap
    sgMail
      .send(msg as IMessage)
      .then(() => console.log("Email sent"))
      .catch((error: any) => console.error(error));
  }

  //Restrict access to only the user's planet
  @OnRead()
  public async onRead(@Entities() galaxy: GalacticSpaceFarers, @Req() req: Request) {
    const user = req.user; //obtained from the JWT Token
    const fahresPlannet = user.attr?.originPlanet;
    if (!fahresPlannet) {
      req.reject(403, "Access denied. User planet not specified.");
    }
    return SELECT.from(galaxy).where({ originPlanet: fahresPlannet });
  }
}

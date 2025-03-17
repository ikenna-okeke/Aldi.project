import cds, { Request } from "@sap/cds";
import { Entities, Handler, Param, Req } from "cds-routing-handlers";
import { Func, Action } from "cds-routing-handlers";
import { GalacticSpaceFarers, GalacticSpaceFarer } from "../../@cds-models/Admin/index";

@Handler()
export class FunctionHandler {
  @Func("countAllPages")
  public async countAllPages(@Req() req: Request) {
    return await SELECT.from(GalacticSpaceFarers).columns("count(1) as count");
  }

  @Action("pagination")
  public async copyPage(@Req() req: Request) {
    // const ID = req.params[1];
    const selectedFahere = (await SELECT.one.from(GalacticSpaceFarers).where({ ID: req.params[1] })) as GalacticSpaceFarer;

    const { ID } = selectedFahere;
    return { message: `Mission Started for Spacefarer ${ID}` };
  }

  @Func("filter")
  public async filterTravellers(@Req() req: Request) {}

  @Func("sorting")
  public async sortTraveller(@Req() req: Request) {}
}

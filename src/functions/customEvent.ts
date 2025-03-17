import cds, { Request } from "@sap/cds";
import { Handler, Param, Req } from "cds-routing-handlers";
import { Func, Action } from "cds-routing-handlers";

@Handler()
export class FunctionHandler {
  @Func("pagination")
  public async copyPage(@Req() req: Request) {}

  @Func("filter")
  public async filterTravellers(@Req() req: Request) {}

  @Func("sorting")
  public async sortTraveller(@Req() req: Request) {}
}

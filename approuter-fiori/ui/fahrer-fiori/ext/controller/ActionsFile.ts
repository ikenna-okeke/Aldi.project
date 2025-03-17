import ExtensionAPI from "sap/fe/core/ExtensionAPI";
import Context from "sap/ui/model/odata/v4/Context";
import MessageToast from "sap/m/MessageToast";
import Table from "sap/m/Table";
import Sorter from "sap/ui/model/Sorter";
import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param pageContext the context of the page on which the event was fired
 */
export function onSort(this: ExtensionAPI, pageContext: Context) {
  const tableId = "com.ikenna.aldi.ikenna.project::GalacticSpaceFarersList--fe::table::GalacticSpaceFarers::LineItem::Table";
  const tableId2 = "com.ikenna.aldi.ikenna.project::GalacticSpaceFarersList--fe::table::GalacticSpaceFarers::LineItem-innerTable-listUl";
  const sorter = new Sorter("name", true);
  let allSort = [];
  allSort.push(sorter);
  const table = this.byId(tableId) as Table;
  //   table.setGrowing(true);
  //   table.setGrowingThreshold(10);
  const bindings = table.getBinding("items") as ODataListBinding;

  bindings?.sort(allSort);
}

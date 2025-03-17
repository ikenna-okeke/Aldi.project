sap.ui.define(["sap/ui/model/Sorter"], function (Sorter) {
  "use strict";

  /**
   * Generated event handler.
   *
   * @param this reference to the 'this' that the event handler is bound to.
   * @param pageContext the context of the page on which the event was fired
   */
  function onSort(pageContext) {
    const tableId = "com.ikenna.aldi.ikenna.project::GalacticSpaceFarersList--fe::table::GalacticSpaceFarers::LineItem::Table";
    const tableId2 = "com.ikenna.aldi.ikenna.project::GalacticSpaceFarersList--fe::table::GalacticSpaceFarers::LineItem-innerTable-listUl";
    const sorter = new Sorter("name", true);
    let allSort = [];
    allSort.push(sorter);
    const table = this.byId(tableId);
    //   table.setGrowing(true);
    //   table.setGrowingThreshold(10);
    const bindings = table.getBinding("items");
    bindings?.sort(allSort);
  }
  var __exports = {
    __esModule: true
  };
  __exports.onSort = onSort;
  return __exports;
});
//# sourceMappingURL=ActionsFile-dbg.js.map

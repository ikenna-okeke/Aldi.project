using {aldi.dx as ad} from '../db/schema';

//remember to grant access to only authenticated users using xsuaa
service Admin @(requires: 'authenticated-user') {
  entity GalacticSpaceFarers @(restrict: [{
    grant: [
      'READ',
      'WRITE'
    ],
    to   : 'spaceUser'
  }])                             as projection on ad.GalacticSpacefarers
    actions {
      action filter();
      action Pagination();
      action sorting()
    };

  annotate GalacticSpaceFarers with @odata.draft.enabled;
  entity IntergalacticDepartments as projection on ad.IntergalacticDepartments;
  entity IntergalacticPositions   as projection on ad.IntergalacticPositions;

}

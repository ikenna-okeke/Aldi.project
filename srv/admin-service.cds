using {aldi.dx as ad} from '../db/schema';

//remember to grant access to only authenticated users using xsuaa
service Admin {
  entity GalacticSpaceFarers      as projection on ad.GalacticSpacefarers
    actions {
      action filter();
      action pagination();
      action sorting()
    };

  annotate GalacticSpaceFarers with @odata.draft.enabled;
  entity IntergalacticDepartments as projection on ad.IntergalacticDepartments;
  entity IntergalacticPositions   as projection on ad.IntergalacticPositions;

}

// annotate Admin with @(requires: 'authenticated-user');

// annotate Admin.GalacticSpaceFarers with @(requires: [
//   'User',
//   'Viewer'
// ]);

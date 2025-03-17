using {
  cuid,
  managed
} from '@sap/cds/common';

namespace aldi.dx;

entity IntergalacticDepartments : cuid, managed {
  name        : String;
  description : String;
}

entity IntergalacticPositions : cuid {
  title       : String;
  description : String;
  department  : Association to IntergalacticDepartments;
}

// Galactic Spacefarer Entity
entity GalacticSpacefarers : cuid, managed {
  name                    : String;
  stardustCollection      : Integer;
  wormholeNavigationSkill : Integer;
  originPlanet            : String;
  spacesuitColor          : String;
  department              : Association to IntergalacticDepartments;
  position                : Association to IntergalacticPositions;
  email                   : String;
}

//Create a new repo on github
//Clean up the test folder and remove the cds file there
//create and deploy to SAP BTP to see its working
//Write a read me on how to go about with the deployment
//find where to include you can do this entirely with a freestyle SAP UI5 app instead of fiori

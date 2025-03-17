// using Admin from './admin-service';

// annotate Admin.GalacticSpaceFarers with {
//     stardustCollection @title: 'Stardust Collection';
//     spacesuitColor     @title: 'Spacesuit Color';
//     name               @title: 'Name';
//     email              @title: 'Email';
// }


// annotate Admin.GalacticSpaceFarers with @(UI: {
//     SelectionFields : [department_ID],
//     LineItem        : [
//         {Value: name

//         },

//         {Value: stardustCollection

//         },
//         {Value: spacesuitColor

//         }

//     ],

//     ///This defines the Object Page header with a title of called Main
//     Facets          : [{
//         $Type : 'UI.ReferenceFacet',
//         Label : 'Main',
//         Target: '@UI.FieldGroup#Main'
//     }],


//     FieldGroup #Main: {Data: [
//         {Value: name},
//         {Value: stardustCollection},
//         {Value: spacesuitColor, },
//     ]}
// }

// ) {


// }

// annotate Admin.GalacticSpaceFarers with @(UI: {HeaderInfo: {
//     TypeName      : 'Galaxy Space Farer',
//     TypeNamePlural: 'Galaxy Space Farers',
//     Title         : {
//         $Type: 'UI.DataField',
//         Value: name
//     }
// }, });


// annotate Admin.GalacticSpaceFarers with @(UI.FilterFacets: [{
//     Target: '@UI.FieldGroup#chartData',
//     Label : '{i18n>chartData}',
// }], );

// annotate Admin.GalacticSpaceFarers with @(UI.FieldGroup #chartData: {Data: [
//     {Value: stardustCollection},
//     {Value: spacesuitColor, },
// ]

// }, );

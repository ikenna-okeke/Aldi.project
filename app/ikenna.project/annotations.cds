annotate service.GalacticSpaceFarers with {
    stardustCollection @title: 'Stardust Collection';
    spacesuitColor     @title: 'Spacesuit Color';
    name               @title: 'Name';
    email              @title: 'Email';
}

annotate service.GalacticSpaceFarers with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'name',
                Value: name,
            },
            {
                $Type: 'UI.DataField',
                Label: 'stardustCollection',
                Value: stardustCollection,
            },
            {
                $Type: 'UI.DataField',
                Label: 'spacesuitColor',
                Value: spacesuitColor,
            }
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Label: '{i18n>Name1}',
            Value: name,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>Stardustcollection}',
            Value: stardustCollection,
        },

        {
            $Type: 'UI.DataField',
            Label: '{i18n>Spacesuitcolor}',
            Value: spacesuitColor,
        },
    ],
    UI.HeaderInfo                : {
        TypeName      : '{i18n>SpaceTraveller}',
        TypeNamePlural: '{i18n>SpaceTravellers}',
        Title         : {
            $Type: 'UI.DataField',
            Value: name,
        },
        Description   : {
            $Type: 'UI.DataField',
            Value: originPlanet,
        },
    },

    UI.SelectionFields           : [name],
);

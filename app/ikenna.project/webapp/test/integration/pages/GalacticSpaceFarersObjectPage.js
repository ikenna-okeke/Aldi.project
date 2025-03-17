sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ikenna.aldi.ikenna.project',
            componentId: 'GalacticSpaceFarersObjectPage',
            contextPath: '/GalacticSpaceFarers'
        },
        CustomPageDefinitions
    );
});
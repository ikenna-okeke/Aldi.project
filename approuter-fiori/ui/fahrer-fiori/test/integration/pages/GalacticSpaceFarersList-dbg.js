sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ikenna.aldi.ikenna.project',
            componentId: 'GalacticSpaceFarersList',
            contextPath: '/GalacticSpaceFarers'
        },
        CustomPageDefinitions
    );
});
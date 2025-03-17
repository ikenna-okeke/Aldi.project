sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ikenna/aldi/ikenna/project/test/integration/FirstJourney',
		'com/ikenna/aldi/ikenna/project/test/integration/pages/GalacticSpaceFarersList',
		'com/ikenna/aldi/ikenna/project/test/integration/pages/GalacticSpaceFarersObjectPage'
    ],
    function(JourneyRunner, opaJourney, GalacticSpaceFarersList, GalacticSpaceFarersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ikenna/aldi/ikenna/project') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheGalacticSpaceFarersList: GalacticSpaceFarersList,
					onTheGalacticSpaceFarersObjectPage: GalacticSpaceFarersObjectPage
                }
            },
            opaJourney.run
        );
    }
);
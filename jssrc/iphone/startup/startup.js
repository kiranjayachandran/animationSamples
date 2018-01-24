//startup.js file
kony.print = function() {
    return;
};
var globalhttpheaders = {};
var appConfig = {
    appId: "animationSamples",
    appName: "animationSamples",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.8",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "animationSamples",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://mydevcloud.konycloud.com/animationSamples/MWServlet",
    secureurl: "https://mydevcloud.konycloud.com/animationSamples/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeMVCTemplates();
    initializeUserWidgets();
    frmHomeGlobals();
    frmMappingGlobals();
    frmVariableGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
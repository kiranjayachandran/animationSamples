function addWidgetsfrmMapping() {
    frmMapping.setDefaultUnit(kony.flex.DP);
    var btn1 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btn1",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_d066fc3956644f458c34e7698d25074d,
        "skin": "CopyslButtonGlossBlue0dfaf00d1f74d45",
        "text": "Show",
        "top": "95dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btm2 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btm2",
        "isVisible": true,
        "left": "50dp",
        "onClick": AS_Button_i0ee8fb6a8b444e38fea22070793be80,
        "skin": "slButtonGlossBlue",
        "text": "Show",
        "top": "170dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmMapping.add(btn1, btm2);
};

function frmMappingGlobals() {
    frmMapping = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMapping,
        "enabledForIdleTimeout": false,
        "id": "frmMapping",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};
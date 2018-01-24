function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30.89%",
        "id": "flxContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20%",
        "skin": "CopyslFbox0eac6ce234a4449",
        "top": "5%",
        "width": "60%",
        "zIndex": 1
    }, {}, {});
    flxContainer.setDefaultUnit(kony.flex.DP);
    var btn = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btn",
        "isVisible": true,
        "left": "40%",
        "skin": "slButtonGlossBlue",
        "text": "a",
        "top": "40%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainer.add(btn);
    var btnMove = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "75dp",
        "id": "btnMove",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_e1707cb8cb804f8a876cc2f22da0e5c4,
        "skin": "slButtonGlossBlue",
        "text": "Move",
        "top": "50%",
        "width": "27.78%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnRotate = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "75dp",
        "id": "btnRotate",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_ea125c163dd04d4bab77a4cc68378816,
        "skin": "slButtonGlossBlue",
        "text": "Rotate",
        "top": "65%",
        "width": "27.78%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnScale = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "75dp",
        "id": "btnScale",
        "isVisible": true,
        "left": "201dp",
        "onClick": AS_Button_gdd28ead42cc4dcc852f2b6fa51788f5,
        "skin": "slButtonGlossBlue",
        "text": "Scale",
        "top": "50%",
        "width": "27.78%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnTransform = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "75dp",
        "id": "btnTransform",
        "isVisible": true,
        "left": "198dp",
        "onClick": AS_Button_c41c696bf09f4ab397df1dccec5acf55,
        "skin": "slButtonGlossBlue",
        "text": "Transform",
        "top": "65%",
        "width": "27.78%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var cpyMoveContainer = new kony.ui.Button({
        "bottom": "10.84%",
        "focusSkin": "slButtonGlossRed",
        "height": "6%",
        "id": "cpyMoveContainer",
        "isVisible": true,
        "left": "67dp",
        "onClick": AS_Button_bc537b15cbbb484b91e8b66b23d0bb00,
        "skin": "slButtonGlossBlue",
        "text": "Move Container",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(flxContainer, btnMove, btnRotate, btnScale, btnTransform, cpyMoveContainer);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
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
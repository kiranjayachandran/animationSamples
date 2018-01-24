function addWidgetsfrmVariable() {
    frmVariable.setDefaultUnit(kony.flex.DP);
    var txtValue = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtValue",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "63dp",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "140dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Button0ac877fe8dc004a = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0ac877fe8dc004a",
        "isVisible": true,
        "left": "56dp",
        "onClick": AS_Button_i80796365fd44a2c8e6131e1f5210b2d,
        "skin": "slButtonGlossBlue",
        "text": "Show",
        "top": "248dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmVariable.add(txtValue, Button0ac877fe8dc004a);
};

function frmVariableGlobals() {
    var RBarBtnItem0 = new kony.ui.BarButtonItem({
        "type": constants.BAR_BUTTON_TITLE,
        "tintColor": undefined,
        "style": constants.BAR_ITEM_STYLE_PLAIN,
        "enabled": true,
        "metaData": {
            "title": "Edit"
        }
    });
    frmVariable = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmVariable,
        "enabledForIdleTimeout": false,
        "id": "frmVariable",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "333333",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": [RBarBtnItem0]
        },
        "titleBarSkin": "slTitleBar"
    });
};
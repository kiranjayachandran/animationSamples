function AS_Button_gdd28ead42cc4dcc852f2b6fa51788f5(eventobject) {
    function SCALE_ACTION____b29a1cca2e384e748242af2ef9ef4ea9_Callback() {}
    frmHome.btn.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "width": "100%",
            "height": "100%"
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": SCALE_ACTION____b29a1cca2e384e748242af2ef9ef4ea9_Callback
    });
}
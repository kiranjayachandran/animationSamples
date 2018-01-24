function AS_Button_bc537b15cbbb484b91e8b66b23d0bb00(eventobject) {
    function MOVE_ACTION____hb52edf304624ceabd101815eab2165a_Callback() {}
    frmHome.flxContainer.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "left": "30%",
            "top": "30%"
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": MOVE_ACTION____hb52edf304624ceabd101815eab2165a_Callback
    });
}
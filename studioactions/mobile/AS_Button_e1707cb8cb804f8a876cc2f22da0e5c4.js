function AS_Button_e1707cb8cb804f8a876cc2f22da0e5c4(eventobject) {
    function MOVE_ACTION____c160f92152d04bff82d4e470752af5a5_Callback() {}
    frmHome.btn.animate(kony.ui.createAnimation({
        "100": {
            "top": "50dp",
            "left": "50dp",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": MOVE_ACTION____c160f92152d04bff82d4e470752af5a5_Callback
    });
}
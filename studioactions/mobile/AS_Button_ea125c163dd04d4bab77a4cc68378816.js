function AS_Button_ea125c163dd04d4bab77a4cc68378816(eventobject) {
    function ROTATE_ACTION_3D____c005def05a6d49739ff4a38cca2513b3_Callback() {}
    //#ifdef winphone8
    //Rotate 3D not supported for windows devices
    //#else
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate3D(120, 1, 1, 1);
    frmHome.btn.animate(kony.ui.createAnimation({
        "100": {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.4,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": ROTATE_ACTION_3D____c005def05a6d49739ff4a38cca2513b3_Callback
    });
    //#endif
}
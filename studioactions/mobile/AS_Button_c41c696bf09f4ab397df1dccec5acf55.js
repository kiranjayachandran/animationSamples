function AS_Button_c41c696bf09f4ab397df1dccec5acf55(eventobject) {
    function TRANSFORM_ACTION_NEW____h9c04a97f0ad4db58ed2c9a94fbd1ae4_Callback() {}
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate(120);
    trans100.translate(50, 50);
    frmHome.btn.animate(kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": "2",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25,
        "direction": kony.anim.DIRECTION_ALTERNATE
    }, {
        "animationEnd": TRANSFORM_ACTION_NEW____h9c04a97f0ad4db58ed2c9a94fbd1ae4_Callback
    });
}
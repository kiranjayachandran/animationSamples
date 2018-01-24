//actions.js file 
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

function AS_Button_d066fc3956644f458c34e7698d25074d(eventobject) {
    frmMapping.btm2["skin"] = frmMapping.btn1["skin"];
}

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

function AS_Button_ea125c163dd04d4bab77a4cc68378816(eventobject) {
    function ROTATE_ACTION_3D____c005def05a6d49739ff4a38cca2513b3_Callback() {}
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
}

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

function AS_Button_i0ee8fb6a8b444e38fea22070793be80(eventobject) {
    var Val = frmVariable.txtValue.text;
    if ((Val == pass)) {
        alert(Val);
    } else {
        alert("fail")
    }
}

function AS_Button_i80796365fd44a2c8e6131e1f5210b2d(eventobject) {
    var Val = frmVariable.txtValue.text;
    if ((Val == pass)) {
        alert(Val);
    } else {
        alert("fail")
    }
}
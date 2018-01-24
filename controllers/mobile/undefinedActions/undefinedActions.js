define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btn1 **/
    AS_Button_d066fc3956644f458c34e7698d25074d: function AS_Button_d066fc3956644f458c34e7698d25074d(eventobject) {
        var self = this;
        frmMapping.btm2["skin"] = frmMapping.btn1["skin"];
    },
    /** onClick defined for btm2 **/
    AS_Button_i0ee8fb6a8b444e38fea22070793be80: function AS_Button_i0ee8fb6a8b444e38fea22070793be80(eventobject) {
        var self = this;
        var Val = frmVariable.txtValue.text;
        if ((Val == pass)) {
            alert(Val);
        } else {
            alert("fail")
        }
    }
});
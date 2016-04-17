cc.Class({
    extends: cc.Component,

    properties: {
        animName:''
    },

    onLoad: function () {
        this.getComponent(cc.Animation).playAdditive(this.animName);
    },

});

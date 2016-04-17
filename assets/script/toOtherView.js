cc.Class({
    extends: cc.Component,

    properties: {
        otherView:cc.Node,
    },

    onLoad() {
        this.node.on('touchend',this.toOtherView,this)
    },
    
    toOtherView(){
        this.node.parent.setScale(cc.v2(0,0));
        this.otherView.setScale(cc.v2(1,1));
    }

});

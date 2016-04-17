cc.Class({
    extends: cc.Component,

    properties: {
        onLoadMessage:''
    },

    onLoad() {
        this.node.getChildByName('message').getComponent('showMessage').enabled = false;
        this.node.getChildByName('message').getComponent(cc.Label).string = this.onLoadMessage;
    },
    
    onMoveFinish(){
        this.node.getChildByName('message').getComponent(cc.Label).string = '';
        this.node.getChildByName('message').getComponent('showMessage').enabled = true;
    }

});

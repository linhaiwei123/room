cc.Class({
    extends: cc.Component,

    properties: {
        message:'',
        _isPlay:false,
    },

    onLoad() {
        this.node.parent.on('touchend',this.showMessage,this)
    },

    showMessage(){
        if(this._isPlay){return}
        this._isPlay = true;
        this.getComponent(cc.Label).string = this.message;
        this.node.runAction(cc.sequence(
                cc.fadeOut(1),
                cc.callFunc(this.finish,this)
            ))
    },
    
    finish(){
        this.getComponent(cc.Label).string = '',
        this.node.opacity = 255;  
        this._isPlay = false;
    }
});

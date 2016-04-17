cc.Class({
    extends: cc.Component,

    properties: {
        childLeave:cc.SpriteFrame,
        matureLeave:cc.SpriteFrame,
        matureLeaveArea:cc.Node,
    },

    onLoad() {
        this.node.once('touchend',this.grow,this)
    },
    
    grow(){
        this.scheduleOnce(this.toChildLeave,5)
    },
    
    toChildLeave(){
        cc.log('child');
        this.getComponent(cc.Sprite).spriteFrame = this.childLeave;
        //   this.getComponent(cc.Label).string = '幼叶';
        this.scheduleOnce(this.toMatureLeave,5);
    },
    
    toMatureLeave(){
        cc.log('mature');
        this.getComponent(cc.Sprite).spriteFrame = this.matureLeave;
        //   this.getComponent(cc.Label).string = '成熟叶';
          this.matureLeaveArea.active = true;
    },
    
    

});

cc.Class({
    extends: cc.Component,

    properties: {
        canvas:cc.Node,
        woodAngel:cc.Prefab
    },

    onLoad() {
        this.node.on('touchend',this.generateAngel,this)
    },

    generateAngel(){
        let woodAngelInstance = cc.instantiate(this.woodAngel);
        this.canvas.addChild(woodAngelInstance);
        
        this.node.removeFromParent();
    }
});
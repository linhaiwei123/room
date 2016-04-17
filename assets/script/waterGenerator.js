cc.Class({
    extends: cc.Component,

    properties: {
        canvas:cc.Node,
        waterAngel:cc.Prefab
    },

    onLoad() {
        this.node.once('touchend',this.generateAngel,this)
    },
    
    generateAngel(){
        let waterAngelInstance = cc.instantiate(this.waterAngel);
        this.canvas.addChild(waterAngelInstance,100);
    }
});

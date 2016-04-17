cc.Class({
    extends: cc.Component,

    properties: {
        canvas:cc.Node,
        goldAngel:cc.Prefab
    },

    onLoad() {
        this.node.on('collision',this.generateAngel,this)
    },

    generateAngel(){
        let goldAngelInstance = cc.instantiate(this.goldAngel);
        this.canvas.addChild(goldAngelInstance);
        
        this.node.removeFromParent();
    }
});

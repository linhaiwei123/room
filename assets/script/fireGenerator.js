cc.Class({
    extends: cc.Component,

    properties: {
        canvas:cc.Node,
        fireAngel:cc.Prefab
    },

    onLoad() {
        this.node.on('collision',this.generateAngel,this)
    },

    generateAngel(){
        let fireAngelInstance = cc.instantiate(this.fireAngel);
        this.canvas.addChild(fireAngelInstance);
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab:cc.Prefab,
        content:cc.Node,
        canvas:cc.Node,
        targetItem:cc.Node,
    },

    onLoad() {
        this.node.on('touchend',this.pick,this)
    },
    
    pick(){
        let item = cc.instantiate(this.itemPrefab);
        let dragItemComponent = item.getComponent('dragItem');
        dragItemComponent.targetItem = this.targetItem;
        this.content.addChild(item);
        dragItemComponent.init();
        this.node.removeFromParent();
    }

});

cc.Class({
    extends: cc.Component,

    properties: {
        targetItem:cc.Node,
        _originPosition:null,
        _originParent:null,
    },

    onLoad: function () {
        
        
        this.node.on('touchstart',this.convertToWorldCoordinate,this)
        this.node.on('touchmove',this.drag,this);
        this.node.on('touchend',this.drop,this);
    },
    
    init(){
        this._originPosition = this.node.position;
        cc.log(this._originPosition);
        this._originParent = this.node.parent;
        cc.log(this._originParent);
    },
    
    convertToWorldCoordinate(event){
        
        let worldPoint = this.node.parent.convertToWorldSpaceAR(this.node.position);
        let nodePoint  = cc.find('Canvas').convertToNodeSpaceAR(worldPoint);
        this.node.parent = cc.find('Canvas');
        this.node.position = nodePoint;
        cc.log(this.node.position);
    },
    
    drag(event){
        this.node.position = this.node.position.add(event.touch.getDelta());
    },
    
    drop(event){
        let worldPoint = this.node.parent.convertToWorldSpaceAR(this.node.position);
        let nodePoint  = this.targetItem.parent.convertToNodeSpaceAR(worldPoint);
        let distance = cc.pDistance(nodePoint,this.targetItem.position);
        let hideCheckPoint = cc.pDistance(this.targetItem.position,cc.v2(0,0));
        cc.log(distance);
        cc.log(hideCheckPoint);
        if(distance < 50 && hideCheckPoint > 5){
            this.targetItem.emit('collision');
            cc.log('collision');
            this.node.removeFromParent();
        }else{
            this.node.position = this._originPosition;
            this.node.parent = this._originParent;
        }
    }
    
});

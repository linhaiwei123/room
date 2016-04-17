cc.Class({
    extends: cc.Component,

    properties: {
        _index:0,
       index : {
           get:function(){
               return this._index;
           },
           set:function(i){
               this._index = i;
               
               if(this._index == 5){
                  this.trigger();   
               }
           }
       } 
    },

    onLoad() {
        
    },
    
    trigger(){
        this.node.once('touchend',this.out,this);
    },
    
    out(){
      cc.director.loadScene('end');   
    }

});

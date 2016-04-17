cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad() {
        cc.find('Canvas/wall_a/taiji').getComponent('taiji').index++;
    },

});

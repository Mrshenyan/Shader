import shadermaterial from "./shadermaterial";

const {ccclass, property} = cc._decorator;

@ccclass
export default class util{
    userShader(sprite,lab){
        if(cc.game.renderType === cc.game.RENDER_TYPE_CANVAS){
            console.warn("shader not surport for canvas");
            return;
        }
        if(!sprite||!sprite.SpriteFrame||sprite.lab == lab){
            return;
        }

        if(lab){
            if(lab.vert == null||lab.frag ==null){
                console.warn('shader not defined',lab);
                return;
            }
            cc.dynamicAtlasManager.enabled = false;
            let material = new shadermaterial();
            let name = lab.name?lab.name:"None";
            material.callFunc(name,lab.vert,lab.frag,lab.defines||[]);
            let texture = sprite.SpriteFrame.getTexture();
            material.setTexture(texture);
            material.updateHash();

            sprite._material = material;
            sprite._renderData.material = material;
            sprite.lab = lab;
            return material;
        }else{
            sprite.setState(1);
        }
    }
}

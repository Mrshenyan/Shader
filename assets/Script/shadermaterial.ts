const {ccclass, property} = cc._decorator;
const renderEngine = cc.renderer.renderEngine;
const Material = renderEngine.Material;

@ccclass
export default class shadermaterial extends cc.Component {
    updateHash() {
        throw new Error("Method not implemented.");
    }
    setTexture(texture: any) {
        throw new Error("Method not implemented.");
    }
    callFunc(name: any, vert: any, frag: any, arg3: any) {
        throw new Error("Method not implemented.");
    }

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}

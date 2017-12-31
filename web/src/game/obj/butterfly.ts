import * as BABYLON from 'babylonjs';
import { Game } from '../game';
import { BaseObject } from './baseobject';

export class ButterflyObject extends BaseObject {

    private velocity: BABYLON.Vector3;
    
    constructor(game: Game) {
        super(game);

        this.velocity = new BABYLON.Vector3(0, 0, 0);

        this.sprite = new BABYLON.Sprite('butterflySprite', this.game.sprites2);
        this.sprite.size = .5;
        this.sprite.position = new BABYLON.Vector3(0, 1, 0);
        this.sprite.playAnimation(0, 1, true, 250, null);        
    }

    public update() {
        if (Math.random() < 0.025) {
            this.velocity.x = .1 * (Math.random() - .5);
            this.velocity.z = .1 * (Math.random() - .5);
        }

        this.sprite.position.addInPlace(this.velocity);
    }
}
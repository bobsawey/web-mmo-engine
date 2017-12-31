import * as BABYLON from 'babylonjs';
import { Game } from '../game';
import { BaseObject } from './baseobject';

export class PlayerObject extends BaseObject {

    private speed: number = 0.05;
    
    constructor(game: Game) {
        super(game);

        this.sprite = new BABYLON.Sprite('playerSprite', this.game.sprites);
        this.sprite.size = .5;
        this.sprite.position = new BABYLON.Vector3(0, 1, 0);
    }

    public update() {
        if (this.game.key('ArrowDown')) {
            this.sprite.position.z -= this.speed;
        }

        if (this.game.key('ArrowUp')) {
            this.sprite.position.z += this.speed;
        }

        if (this.game.key('ArrowLeft')) {
            this.sprite.position.x -= this.speed;
        }

        if (this.game.key('ArrowRight')) {
            this.sprite.position.x += this.speed;
        }
    }
}
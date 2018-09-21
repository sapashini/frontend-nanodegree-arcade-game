// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started



    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Main player class
class PlayerMain {
	constructor() {
		this.sprite = 'images/char-pink-girl.png';
		this.xMove = 101;
		this.yMove = 83;
		this.startX = this.xMove* 2;
		this.startY = (this.yMove* 5) - 2;
		this.x = this.startX;
		this.y = this.startY;
	}

	// Draw player at the current position.
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	//Handle keyboared inputs
	handleInput(input) {
		if (input == 'left' && this.x > 0) {
			this.x -= this.xMove;
		}
		else if (input == 'up' && this.y > 0) {
				this.y -= this.yMove;
		}
		
		else if (input == 'right' && this.x < this.xMove * 4) {
			this.x += this.xMove;
		}
		else if (input == 'down' && this.y < this.yMove * 4) {
				this.y += this.yMove;
		}
	}
	
}

// Now instantiate your objects.
const player = new PlayerMain();

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

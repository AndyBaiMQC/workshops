class Enemy { 
        update(timeDiff) { 
                this.y = this.y + timeDiff * this.speed 
                this.x = this.x + timeDiff * this.speedX
                this.domElement.style.top = this.y + "px" 
                this.domElement.style.left = this.x + "px"
                if (this.x > GAME_WIDTH) {
                        this.x = -this.x
                }
                if (this.y > GAME_HEIGHT) { 
                        this.root.removeChild(this.domElement) 
                        this.destroyed = true 
                } 
        } 
        constructor(theRoot, enemySpot) { 
                this.root = theRoot 
                this.spot = enemySpot 
                this.x = enemySpot * ENEMY_WIDTH 
                this.y = -ENEMY_HEIGHT 
                this.destroyed = false 
                this.domElement = document.createElement("img") 
                this.domElement.src = "images/enemy.png" 
                this.domElement.style.position = "absolute" 
                this.domElement.style.left = this.x + "px" 
                this.domElement.style.top = this.y + "px" 
                this.domElement.style.zIndex = 5 
                theRoot.appendChild(this.domElement) 
                this.speed = Math.random() / 2 + 0.25 
                this.speedX = Math.random() / 3
        } 
} 
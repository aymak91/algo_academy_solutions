// https://leetcode.com/problems/asteroid-collision/

let asteroidCollision = function(asteroids) {
    
    // the only time asteroids explode is if the left asteroid is moving right as the right asteroid moves left
    // i.e. left is postive, right is negative
    
    let stack = [];
    
    for (let i = 0; i < asteroids.length; i++) {
        if (stack.length < 1 || asteroids[i] > 0) { // if stack is empty or if the asteroid is positive
            stack.push(asteroids[i]); // then just push the asteroid into the stack
        } else {
            while(true) {
                let peek = stack[stack.length - 1]; // look at the top
                if (peek < 0){ // if previous asteroid was negative, there will be no collision
                    stack.push(asteroids[i]);
                    break;
                } else if (peek === -asteroids[i]) { // if prev was pos and both are equal in magnitude, pop last asteroid and do not push
                    stack.pop();
                    break;
                } else if (peek > -asteroids[i]) { // if prev was pos and is greater than asteroid, do nothing. current asteroid explodes
                    break;
                } else { // else if prev was pos and is less than current asteroid, keep destroying prev asteroid
                    stack.pop();
                    if (stack.length < 1) { // if everything in stack got blown up
                        stack.push(asteroids[i]);
                        break;
                    }
                }
            }
        }
        
    }
    
    return stack;
};

// Time: O(n) where n is the length of asteroids
// Space: O(n) where n is the length of asteroids

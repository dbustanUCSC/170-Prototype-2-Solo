
title = "Hello";

description = ` u are sus 
`;

/**
 * @typedef {{
* pos: Vector,
* }} Player
*/

/**
* @type {Player}
*/
let player;
const G = {
 WIDTH: 100,
 HEIGHT: 150,
 PARTICLE_SPEED_MIN : 0.5,
 PARTICLE_SPEED_MAX: 1.0,
 ENGINE_PARTICLE_RANGE: 7,
 ENGINE_PARTICLE_SPEED_INCREASE: 0.08
}

options = {
  viewSize: {x: G.WIDTH, y: G.HEIGHT}
};

player = {
 pos: vec(G.WIDTH * 0.5, G.HEIGHT * 0.5),
};


characters = [
  `
  ll
  rllc
  rlllllc
  ll
  `,
  `
   llp
  lllr
   llp
  `,
  `
  yyp
  yyp
  yyp
  `
];

/**
 * @typedef {{
 * pos: Vector,
 * speed: number
 * }} defaultparticles
 */

/**
 * @typedef {{
* angle: number,
* pos: Vector,
* length: number,
* }} tentacle
*/

/**
 * @typedef {{
* pos: Vector,
* model: char,
* }} enemy
*/

/**
 * @type {tentacle [] }
 * 
 */
let tentaclesOnEnemy;

/**
 * @type {defaultparticles [] }
 * 
 */
let backgroundParticles, engineParticles;

/**
 * @type {enemy [] }
 * 
 */
let enemies;

//we need something to control the speed of all of the particles
//perhaps a bool that will handle the states of the 

let state1 = false;
let state2speed;
options = {};

function TentacleCreation(enemy){
  tentaclesOnEnemy = times(Math.random() * 4, () => {
    const posX = enemy.x -Math.random() * 4;
    const posY = enemy.y/2;
    return {
      pos: vec(posX, posY),
      length: 0,
      angle: 0,
    };
  });
}
//what do we want out of this?

//Do we want to have our enemies hold Tentacles? yes.

//We also want to gauge our enemies spawning based on the amount of score the player has, Perhaps increase it by different amounts per amount
function EnemyCreation(){
  let rand
}

function SetParticleProperties(){
  backgroundParticles = times(20, () =>{
    const posX = rnd(0, G.WIDTH);
    const posY = rnd(0, G.HEIGHT);
    return {
      pos: vec(posX, posY),
      speed: rnd(G.PARTICLE_SPEED_MIN, G.PARTICLE_SPEED_MAX),
    };
  });
  engineParticles = times(10, () => {
    const offsetX = rnd (-G.ENGINE_PARTICLE_RANGE, G.ENGINE_PARTICLE_RANGE);
    const offsetY = rnd (-G.ENGINE_PARTICLE_RANGE, G.ENGINE_PARTICLE_RANGE);
    return {
      pos: vec(player.pos.x + offsetX, player.pos.y + offsetY),
      speed: rnd(G.PARTICLE_SPEED_MIN, G.PARTICLE_SPEED_MAX),
    }
  });
}

function CreateBackgroundParticles(extraSpeed) {
  backgroundParticles.forEach((s) =>{
    s.pos.x -= s.speed * extraSpeed;
    s.pos.wrap(0, G.WIDTH, 0, G.HEIGHT);
    color("light_yellow");
    box(s.pos, 1);
  });
}

function CreateEngineParticles() {
    engineParticles.forEach((e) => {
    e.speed += G.ENGINE_PARTICLE_SPEED_INCREASE;
    e.pos.x -= e.speed;
    color("red");
    box(e.pos, 1);
  });
}
let extraSpeed;
function update() {
  if (!ticks) {
    SetParticleProperties();
  }
  if (state1){
    //particles definition
    extraSpeed = 1;
    CreateBackgroundParticles(extraSpeed);
    
    
    color("black");
    char("a", player.pos);
      
        player.pos.y += 0.5;
      
  
      if (input.isPressed){
        player.pos.y -= 1;
      } 
      color("red");
      //box(player.pos, 4, 4);
  } else if (!state1) {
    extraSpeed = 4;
    CreateBackgroundParticles(extraSpeed);
    CreateEngineParticles();
    color("black");
    char("a", player.pos);

    player.pos.y += 0.5;
      if (input.isPressed){
        player.pos.y -= 0.7;
      }
      
      
      
  }
  
  //What should we start with first? perhaps putting the player in
  
}

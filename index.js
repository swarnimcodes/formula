const BACKGROUND = "#181818";
const FOREGROUND = "#FF00FF";
const FPS = 60;

// the formula ::
// x' = x / z
// y' = y / z


console.log(game);

game.width = 800;
game.height = 800;

const ctx = game.getContext("2d"); // 2d, webgl, webgl2, webgpu, bitmaprenderer
// possibly inc perf:  https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext#desynchronized
console.log(ctx);

// function to clear the "canvas" on each frame
function clear() {
    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, game.width, game.height);    
}

function point({ x, y }) {
    const s = 20;
    ctx.fillStyle = FOREGROUND;
    ctx.fillRect(x - s/2, y - s/2, s, s);
}

function screen(p) {
    return {
	x: (p.x + 1)/2 * game.width,
	y: (1 -(p.y +1)/2) * game.height,
    }
}

function project({ x, y, z }) {
    return {
	x: x/z,
	y: y/z,
    }
}

const pos = { x: 0.5, y: 0, z: 1 };
const center = { x: 0, y: 0, z: 1 };
const dx = 0;
const dy = 0;
let dz = 0;
function frame() {
    const dt = 1/FPS;
    dz += 1*dt;
    pos.z = 1 + dz;
    clear();
    
    point(screen(project(center)))
    point(screen(project(pos)))

    setTimeout(frame, 1/FPS*1000);
}


/*
60 frames in 1 second
so time for next frame = 1/60 seconds
 */
setTimeout(frame, 1/FPS*1000);



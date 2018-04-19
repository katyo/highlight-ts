export default `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;`;

export const sample1 = `// This was mis-detected as HSP and Perl because parsing of
// keywords in those languages allowed adjacent dots

window.requestAnimationFrame(function render() {
  var pos = state.pos;

  canvasEl.width = 500;
  canvasEl.height = 300;

  if (dpad.right) {
    pos.x += 3;
  } else if (dpad.left) {
    pos.x -= 3;
  }

  ctx.fillStyle = '#AF8452';
  ctx.fillRect(pos.x + 5, pos.y - 10, 10, 10);

  window.requestAnimationFrame(render);
});`;

export const short_plain = `const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
}`;

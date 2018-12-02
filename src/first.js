const canvasSketch = require('canvas-sketch');
const FPS = 60

const settings = {
  // Enable an animation loop
  animate: true,
  // Set loop duration to 3
  // Use a small size for better GIF file size
  dimensions: [ 1024, 1024 ],
  // Optionally specify a frame rate, defaults to 30
  fps: FPS
};

// Start the sketch
canvasSketch(() => {
  return ({ context, width, height, frame }) => {
    // Fill the canvas with pink
    context.fillStyle = '#0c0c0c';
    context.fillRect(0, 0, width, height);

    // Get a seamless 0..1 value for our loop
    const t = Math.sin(frame * Math.PI);

    // Animate the thickness with 'playhead' prop
    const thickness = 2

    // Rotate with PI to create a seamless animation
    const rotation = frame * Math.PI

    const brightness = Math.sin(Math.cos(frame))

    // Draw a rotating white rectangle around the center
    const cx = width / 2;
    const cy = height / 2;
    const length = height * 0.5;
    context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
    context.save();
    context.translate(cx, cy);
    context.rotate(rotation);
    context.fillRect(-thickness / 2, -length / 2, thickness, length);
    context.restore();
  };
}, settings);
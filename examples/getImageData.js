#!/usr/bin/env ./node_modules/openvg/bin/node-pi

/**
 * Module dependencies.
 */

var Canvas = require('../lib/canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d')
  , fs = require('fs');

var eu = require('./examples-util');
var shapes = require('./shapes');
var squareSize = 120;

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillRect(0,0,150,150);

ctx.fillStyle = '#ff8000';
shapes.drawSquare(ctx, squareSize);

ctx.save();
ctx.translate(0, canvas.height-squareSize);
ctx.fillStyle = '#0080ff';
shapes.drawSquare(ctx, squareSize);
ctx.restore();

ctx.save();
ctx.translate(canvas.width-squareSize, canvas.height-squareSize);
ctx.fillStyle = '#8000ff';
shapes.drawSquare(ctx, squareSize);
ctx.restore();

ctx.save();
ctx.translate(canvas.width-squareSize, 0);
ctx.fillStyle = '#ff0080';
shapes.drawSquare(ctx, squareSize);
ctx.restore();

var img = ctx.getImageData(0, 0, 120, 120);
ctx.putImageData(img, 200, 200);
ctx.putImageData(img, 400, 200);
ctx.putImageData(img, 200, 400);
ctx.putImageData(img, 400, 400);

canvas.vgSwapBuffers();
eu.waitForInput();
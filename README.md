jQuery.aimg
===========
jQuery plugin for animating image sprites e.g. simulating apng format

## CSS3 implementation 
http://codepen.io/ruslansavenok/pen/rOBBZo

Check out [The Demo](https://dl.dropboxusercontent.com/u/18659172/code/jquery.aimg/v0.3/demo/index.html)

## How To Use
1. Create sprite of your animation ![](http://beta.hstor.org/storage1/23f0d0f4/61944ec6/871774fb/7bb1a6b9.png)
2. Create HTML - `<div class="ajax-loading"></div>`
3. Create CSS rule - `.ajax-loading {background: url(loader.png); width: 30px; height: 30px;}`, where width/height represents dimensions on animation frame.
4. Initialize jQuery plugin - `$('.ajax-loading').aimg({frames: 8});`, where `frames:` represents amount of frames in your sprite

## Options
    currFrame: 0, // starting frame
    delay: 100,   // delay between frame animation (ms)
    frames: 8     // amount of frames

## Methods
* `$loader.aimg('stop');` - stop running animation
* `$loader.aimg('reset');` - reset animation (stop & set currFrame to 0)
* `$loader.aimg();` - continue stopped or reseted animation

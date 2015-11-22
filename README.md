# jquery1

Project: Javascript/jQuery

http://www.theodinproject.com/web-development-101/javascript-and-jquery?ref=lnav

This project took me longer than I wanted to but just because I didn't want to push a terrible effort when I knew I could make something functional. 

First problem I had was making each button clear whatever it had done previously. I had done a drawing with the gradient button and when I clicked the color button, it would start performing the color function but it was doing it on top of the gradient drawing. I tried changing the function directly to clear the last effect by having a clear function at the end of every function but that caused the grid to not display at all. I tried a lot of things but I was getting further away from where I had started. After a lot of changes I finally decided to check for issues with scope and found I hadn't closed an earlier function which solved those problems. Now I was able to have each button perform its function, starting with a new grid everytime, so no overlap was happening.

My last problem was having the function for sizing the grid stay within the container it was given. There were some other problems regarding background color and the grid only going halfway across the container for whatever reason but having realised my first problem was simply scope, I had a feeling the fix to this problem was probably something simple as well. After some small changes to the sizing function, I got what I wanted.

I originally thought the max size of the grid should be 128 * 128. The code works up until that number, it's slower naturally but found there was no reason to go above a 64 * 64 grid because at some point after that, the speed of your mouse skips over some squares before it makes a change to the square's color and I hope that's more to do with mouse speed than a fault in the function, although I'm probably wrong.

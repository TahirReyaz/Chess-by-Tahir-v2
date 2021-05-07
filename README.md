# Chess
Its a chess game. I first made this using C++ graphics, so this version is just its Javascript translation.
The concepts used in this repository are:  
-Canvas and its drawing methods.  
-Maps.  
-JavaScript functions.  

I have used canvas which is similar to C++ graph.
Then I drew the board image, and the chess piece image on the canvas.
I specified the location of the pieces into an array, which stores the co-ordinates of the pieces.
The drawing method also requires the co-ordinates just like C++ methods.
In C++ I couldn't use images so I used strings containing the names of the pieces.
I also drew a cursor which is moved using the keyboard arrow keys or the arrow button images provided below the canvas.
A single image is used for arrow buttons and its parts are mapped and call a function when they are clicked, which changes the position of the cursor and the co-ordinates of a piece if it is selected.

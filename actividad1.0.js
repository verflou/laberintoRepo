
let maze = crearLabe();

function crearLabe(){
    let mz = [["s",".","."],
              ["#",".","#"],
              ["#",".","G"]];
    return mz
}

for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze.length; j++) {
        if (maze[i][j] == "s") {
            resol(maze, j, i);
        }
    }
}

function resol(mz, x, y) {
    if (x == -1 || y == -1 || x == mz.length+1 || y == mz.length+1) {
        return false
    }
    if (mz[x][y] == "G") {
        return true
    }
    if (mz[x][y] == "#") {
        return false
    }
    mz[x][y] == "x";
    if (resol(mz, x, y+1) == true) {
        return true
    }
    if (resol(mz, x+1, y) == true) {
        return true
    }
    if (resol(mz, x, y-1) == true) {
        return true
    }
    if (resol(mz, x-1, y) == true) {
        return true
    }

}

/*
if (x,y outside maze) 
return false
if (x,y is goal) 
return true
if (x,y not open)
 return false
mark x,y as part of solution path
if (FIND-PATH(North of x,y) == true) 
return true
if (FIND-PATH(East of x,y) == true) 
return true
if (FIND-PATH(South of x,y) == true) 
return true
if (FIND-PATH(West of x,y) == true) 
return true


unmark x,y as part of solution path
return false
*/
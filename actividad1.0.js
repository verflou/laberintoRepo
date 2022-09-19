let a = 0;
let b = 0;
let maze = MkRandMz();
maze[b][a] = "S";

if (resol(maze, a, b) == true) {
    console.log("!Encontro el camino!");
    mostrar();
} else {
    console.log("No encontro el camino...");
}

// CREAR LABERINTO
/*
function crearLabe() {
    let mz = [
        [".", ".", ".", ".", "."],
        ["#", "#", "#", "#", "."],
        [".", ".", ".", ".", "."],
        [".", "#", ".", "#", "."],
        [".", "#", ".", "#", "G"],
    ];
    return mz
}
*/

//INTENTO CREAR LABERINTO ALEATORIO
function MkRandMz() {
    let mz = [
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
        [".", ".", ".", ".", "."],
    ];
    mz[Math.floor(Math.random() * (5 - 3 + 1) ) + 3][
        Math.floor(Math.random() * (5 - 3 + 1) ) + 3
    ] = "G";
    for (let i = 0; i < mz.length; i++) {
        for (let j = 0; j < mz.length; j++) {
            let nro = Math.floor(Math.random() * 4);
            if (nro !== 3 && (i%2) !== 0) {
                if (mz[i][j] !== "G") {
                    mz[i][Math.floor(Math.random() * 5)] = "#";
                }
            }
        }
    }
    return mz;
}

// MOSTRAR LABERINTO
function mostrar() {
    for (let i = 0; i < maze.length; i++) {
        console.log(maze[i]);
    }
}

// RESOLVER LABERINTO
function resol(mz, x, y) {
    if (x == -1 || y == -1 || x == mz.length || y == mz.length) {
        return false;
    }
    if (mz[y][x] == "G") {
        return true;
    }
    if (mz[y][x] == "#") {
        return false;
    }
    if (mz[y][x] == "X") {
        return false;
    }
    if (mz[y][x] == "+") {
        return false;
    }
    if (mz[y][x] !== "S") {
        mz[y][x] = "+";
    }
    //ESTE
    if (resol(mz, x + 1, y) == true) {
        return true;
    }
    //NORTE
    if (resol(mz, x, y - 1) == true) {
        return true;
    }
    //OESTE
    if (resol(mz, x - 1, y) == true) {
        return true;
    }
    //SUR
    if (resol(mz, x, y + 1) == true) {
        return true;
    }

    if (mz[y][x] !== "S") {
        mz[y][x] = "X";
    }
    return false;
}

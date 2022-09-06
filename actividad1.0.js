

function crearLabe(){
    let mz = [["s",".",".",".","#","#"],
              ["#",".","#",".",".","."],
              ["#",".","#","#",".","#"],
              [".",".","#",".","#","#"],
              ["#",".",".",".","#","G"],
              ["#",".","#",".",".","."]]
    console.log(mz)
}

crearLabe()


f
function resol(mz,) {
    
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
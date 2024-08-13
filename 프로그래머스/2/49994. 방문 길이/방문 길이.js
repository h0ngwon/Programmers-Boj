function solution(dirs) {
    let move = {"U" : [0, 1], "D": [0, -1], "L" : [-1, 0], "R": [1, 0]};
    let cur = [0, 0];
    let path = new Set();
    
    for(let dir of dirs) {
        let nextX = cur[0] + move[dir][0];
        let nextY = cur[1] + move[dir][1];
        
        if(Math.abs(nextX) > 5 || Math.abs(nextY) > 5) continue;
        
        path.add(''+cur[0]+cur[1]+nextX+nextY+'');
        path.add(''+nextX+nextY+cur[0]+cur[1]+'');
        
        cur = [nextX, nextY];
    }
    
    console.log(path)
    
    return path.size / 2
}
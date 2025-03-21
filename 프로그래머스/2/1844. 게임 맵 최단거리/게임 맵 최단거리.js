function solution(maps) {
    let xLen = maps.length;
    let yLen = maps[0].length;

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    
    let targetX = xLen - 1;
    let targetY = yLen - 1;

    const queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        const [curX, curY, move] = queue.shift();
        if(curX === targetX && curY === targetY) return move;
        
        for(let i = 0; i < 4; i++) {
            const x = curX + dx[i];
            const y = curY + dy[i];
            
            if(x >= 0 && x < xLen && y >= 0 && y < yLen && maps[x][y] === 1) {
                queue.push([x, y, move + 1]);
                maps[x][y] = 0;
            }
        }
    }
    
    
    
    return -1;
}
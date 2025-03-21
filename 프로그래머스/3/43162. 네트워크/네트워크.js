function solution(n, computers) {
    let answer = 0;
    let visited = [false];
    
    const dfs = (i) => {
        visited[i] = true;
        
        for(let j = 0; j < computers[i].length; j++) {
            if(!visited[j] && computers[i][j] === 1) {
                dfs(j);
            }
        }
    }
    
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer++;
}
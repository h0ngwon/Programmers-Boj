function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({length: dungeons.length}, () => false);
    
    const dfs = (gauge, depth) => {
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= gauge) {
                visited[i] = true;
                dfs(gauge - dungeons[i][1], depth + 1);
                
                visited[i] = false;
            }
        }
        answer = Math.max(answer, depth);
    }
    
    dfs(k, 0);
    
    return answer;
}
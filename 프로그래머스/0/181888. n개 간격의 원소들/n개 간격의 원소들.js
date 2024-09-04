function solution(num_list, n) {
    var answer = [];
    num_list.map((x, idx) => {
        if(idx % n === 0) answer.push(x)
    })
    return answer;
}
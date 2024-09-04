function solution(numbers, n) {
    let sum = 0;
    numbers.map((x) => {
        if(sum > n) return sum;
        sum += x;
    });
    
    return sum;
}
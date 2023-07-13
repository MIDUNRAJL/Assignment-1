let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let first_diagonal = 0;
let second_diagonal = 0;
let difference;
for(let i=0;i<matrix.length;i++){
    first_diagonal = first_diagonal + matrix[i][i];
    difference = matrix[i].length-1-i;
    second_diagonal = second_diagonal + matrix[i][difference];
}
    console.log(first_diagonal);
    console.log(second_diagonal);
    console.log(first_diagonal-second_diagonal);
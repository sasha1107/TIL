let input = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"
let flag = [];
input.split('\n').forEach(i => flag.push(i.replace(/1/g, 'f').split(' ')))
// console.log(flag)
// [
//     [ '0', 'f', '0', '0', '0' ],
//     [ '0', '0', '0', '0', '0' ],
//     [ '0', '0', '0', 'f', '0' ],
//     [ '0', '0', 'f', '0', '0' ],
//     [ '0', '0', '0', '0', '0' ]
//   ]

for (let i = 0; i < flag.length; i++){
    for (let j = 0; j < flag.length; j++){
        if (flag[i][j] === 'f'){
            if (i-1 >= 0 && flag[i-1][j] == '0'){
                flag[i-1][j] = "*"
            }
            if (i+1 < flag.length && flag[i+1][j] == '0'){
                flag[i+1][j] = "*"
            }
            if (j-1 >= 0 && flag[i][j-1] == '0'){
                flag[i][j-1] = "*"
            }
            if (j+1 < flag.length && flag[i][j+1] == '0'){
                flag[i][j+1] = "*"
            }
        }
    }
}

flag.forEach(i => console.log(i.join(' ')))
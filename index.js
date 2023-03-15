const arrOne = ['1','2','3'];
const arrTwo = ['1','2',['1.1','1.2','1.3'],'3'];

function numbers (arr) {
    let res = [];
    for (let el of arr) {
        if (Array.isArray(el)){
            res.push(`<li> ${numbers(el)} </li>`)
        } else if (arr.indexOf(el) === 0) {
            res.push(`<ul> <li> ${el} </li>`);
        } else if (arr.indexOf(el) === arr.length -1) {
            res.push(`<li> ${el} </li> </ul>`);
        } else {
            res.push(`<li> ${el} </li>`);
        }
    }
    return res.join(' ');
}

document.querySelector('#one').insertAdjacentHTML('beforeend', numbers(arrOne));
document.querySelector('#two').insertAdjacentHTML('beforeend', numbers(arrTwo));
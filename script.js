const strT = document.querySelector('.in_txt');
const numOfWordT = document.querySelector('.word_for_search');
const pRes = document.querySelector('.num_of_words');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    const str = strT.value;
    const numOfWord = numOfWordT.value;

    let counter = 0;
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            temp += str[i];
        } else {
            if (temp.toLowerCase() === numOfWord.toLowerCase()) {
                counter += 1;
                temp = '';
            }
            temp = '';
        };
    };
    pRes.textContent = counter;
    console.log(counter);
});


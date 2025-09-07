const buttons = document.getElementsByTagName('button');
const sectionInfos = document.getElementsByClassName('info-section');
const questionSections = document.getElementsByClassName('question-section');
const numbers = document.getElementsByClassName('number');
const accContent = document.getElementsByClassName('accordion-content');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === '↓') {
            sectionInfos[i].style.display = 'block';
            buttons[i].innerHTML = '&uarr;'

            questionSections[i].style.color = '#087f5b';
            questionSections[i].style.fontWeight = '500';
            numbers[i].style.color = '#087f5b';
            numbers[i].style.fontWeight = '500';
            accContent[i].style.borderTop = '4px solid #087f5b';
        } else if (buttons[i].textContent === '↑') {
            sectionInfos[i].style.display = 'none';
            buttons[i].innerHTML = '&darr;'

            questionSections[i].style.color = 'hsl(210, 10%, 23%)';
            questionSections[i].style.fontWeight = '400';
            numbers[i].style.color = 'hsl(210, 10%, 83%)';
            numbers[i].style.fontWeight = '0';
            accContent[i].style.borderTop = '';
        }
    })
}
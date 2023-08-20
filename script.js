const summaryList = document.querySelector('.summary__list');

createElement = (ref) => {
    const listItem = document.createElement('li');
    listItem.classList.add('summary__listitem');
    
    const listItemTitle = document.createElement('p');
    listItemTitle.classList.add('summary__listitem-title');
    listItemTitle.textContent = ref["category"];

    const listItemImg = document.createElement('img');
    listItemImg.classList.add('summary__listitem-icon');
    listItemImg.setAttribute("src", ref["icon"]);
    listItemTitle.appendChild(listItemImg);

    const listItemScore = document.createElement('p');
    listItemScore.classList.add('summary__listitem-score');
    listItemScore.textContent = ref["score"];

    const listItemTotal = document.createElement('span');
    listItemTotal.classList.add('summary__listitem-total');
    listItemTotal.textContent = " / 100";
    listItemScore.appendChild(listItemTotal);

    listItem.appendChild(listItemTitle);
    listItem.appendChild(listItemScore);

    summaryList.append(listItem);
}

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(file => {
            createElement(file);
        });
    })

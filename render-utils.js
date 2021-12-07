// consider: what data type is game here? where will you need to pass it this data type in your app?
export function renderGame(game) {
    const div = document.createElement('div');
    const team1Div = renderTeam(game.name1, game.score1);
    const team2Div = renderTeam(game.name2, game.score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

// export function renderPastGame(pastGame) {
//     const div = document.createElement('div');
//     const team1Div = renderTeam(pastGame.name1, pastGame.score1);
//     const team2Div = renderTeam(pastGame.name2, pastGame.score2);

//     div.append(team1Div, team2Div);

//     div.classList.add('game');

//     return div;
// }

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    teamDiv.classList.add('team');
    nameDiv.classList.add('name');
    scoreDiv.classList.add('score');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}

// export function renderPastGame(pastGame) {
//     const container = document.createElement('div');
//     const name1 = document.createElement('p');
//     const name2 = document.createElement('p');
//     const score1 = document.createElement('p');
//     const score2 = document.createElement('p');

//     container.classList.add('game');
//     name1.textContent = pastGame.name1;
//     name2.textContent = pastGame.name2;
//     score1.textContent = pastGame.score1;
//     score2.textContent = pastGame.score2;

//     container.append(name1, name2, score1, score2);

//     return container;
// }
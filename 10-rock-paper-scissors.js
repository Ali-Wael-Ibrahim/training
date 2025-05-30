let score = JSON.parse(localStorage.getItem('score')) || {win: 0, lose: 0, tie: 0};

function pick_cm_move()
{
    const rv = Math.floor(Math.random() * 3) + 1;
    if(rv == 1)return 'rock';
    if(rv == 2)return 'paper';
    if(rv == 3)return 'scissors';
}
function result(x,y)
{
    if(x==y)return 'Draw';
    if(x=='rock'&&y=='paper')return 'Lose';
    if(x=='rock'&&y=='scissors')return 'Win';
    if(x=='paper'&&y=='rock')return 'Win';
    if(x=='[aper'&&y=='scissors')return 'Lose';
    if(x=='scissors'&&y=='paper')return 'Win';
    if(x=='scissors'&&y=='rock')return 'Lose';
}
function playgame(x, computer_move)
{
    let message = '';
    if(result(x,computer_move) == 'Draw')
    {
        score.tie++;
        message = 'Draw';
    }
    else if(result(x,computer_move) == 'Win')
    {
        score.win++;
        message = 'You Won';
    }
    else
    {
        score.lose++;
        message = 'You Lost'
    }
    update_score_show(message,x,computer_move);
    localStorage.setItem('score',JSON.stringify(score));
}
function Reset_score()
{
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('score');
    let info_text = document.querySelector('.show_result');
    info_text.innerHTML = '';
    info_text = document.querySelector('.show_choices');
    info_text.innerHTML = 'Score reset';
    info_text = document.querySelector('.show_score');
    info_text.innerHTML = `Draw = ${score.tie} Win = ${score.win} Lose = ${score.lose}`;
}
function update_score_show(result,my_choice,computer_choice)
{
    let info_text = document.querySelector('.show_result');
    info_text.innerHTML = result;
    console.log(result);
    info_text = document.querySelector('.show_choices');
    info_text.innerHTML = `
    You
    <img src="images/${my_choice}-emoji.png" class="move-icon">
    <img src="images/${computer_choice}-emoji.png" class="move-icon">
    Computer
    `;
    info_text = document.querySelector('.show_score');
    info_text.innerHTML = `Draw = ${score.tie} Win = ${score.win} Lose = ${score.lose}`;
}
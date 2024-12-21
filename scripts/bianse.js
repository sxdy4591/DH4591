function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTitleColor() {
    const title = document.getElementById('title');
    title.style.color = getRandomColor();
}

// 每隔1秒更改标题颜色
setInterval(changeTitleColor, 1000);
// JavaScript Document
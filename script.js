let score = 0; // スコアを保持する変数

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');

// クッキーをクリックしたときのイベントリスナー
cookie.addEventListener('click', function() {
    score++; // スコアを増やす
    scoreDisplay.textContent = score; // スコア表示を更新
});


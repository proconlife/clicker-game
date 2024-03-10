let score = 0; // スコアを保持する変数
let scorePerClick = 1; // クリックごとのスコア
let upgradeCost = 10; // アップグレードのコスト

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const upgradeBtn = document.getElementById('upgradeBtn');
const upgradeCostDisplay = document.getElementById('upgradeCost');

// クッキーをクリックしたときのイベントリスナー
cookie.addEventListener('click', function() {
    score += scorePerClick; // スコアを増やす
    scoreDisplay.textContent = score; // スコア表示を更新
});

// アップグレードボタンをクリックしたときのイベントリスナー
upgradeBtn.addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost; // コストを差し引く
        scorePerClick++; // クリックごとのスコアを増やす
        upgradeCost *= 2; // 次のアップグレードコストを増やす
        scoreDisplay.textContent = score; // スコア表示を更新
        upgradeCostDisplay.textContent = upgradeCost; // アップグレードコストを更新
    }
});


let score = 0;
let scorePerClick = 1;
let upgradeCost = 10;
let autoUpgradeCost = 20; // 自動アップグレードのコスト
let autoScorePerSecond = 0; // 秒ごとの自動スコア増加量

const cookie = document.getElementById('cookie');
const scoreDisplay = document.getElementById('score');
const upgradeBtn = document.getElementById('upgradeBtn');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const autoUpgradeBtn = document.createElement('button'); // 自動アップグレードボタンの作成
autoUpgradeBtn.textContent = `自動カウントアップ (コスト: ${autoUpgradeCost} カウント)`;
document.getElementById('game-container').appendChild(autoUpgradeBtn); // ボタンをDOMに追加

cookie.addEventListener('click', function() {
    score += scorePerClick;
    updateDisplay();
});

upgradeBtn.addEventListener('click', function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        scorePerClick++;
        upgradeCost *= 2;
        updateDisplay();
    }
});

autoUpgradeBtn.addEventListener('click', function() {
    if (score >= autoUpgradeCost) {
        score -= autoUpgradeCost;
        autoScorePerSecond++;
        autoUpgradeCost *= 2; // 自動アップグレードのコストも増加させる
        setInterval(() => {
            score += autoScorePerSecond;
            updateDisplay();
        }, 1000); // 1秒ごとにスコアを自動で増やす
        updateDisplay();
    }
});

function updateDisplay() {
    scoreDisplay.textContent = score;
    upgradeCostDisplay.textContent = upgradeCost;
    autoUpgradeBtn.textContent = `自動カウントアップ (コスト: ${autoUpgradeCost} カウント)`; // ボタンのテキストを更新
}

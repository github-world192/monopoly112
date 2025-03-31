# 大富翁遊戲

## 簡介

這是一款基於網頁的多人遊玩大富翁遊戲，支援擲骰子、移動、購買土地等基本功能。

## 安裝與運行

### 1. 克隆專案
```sh
git clone https://github.com/github-world192/monopoly112
```

### 2. 啟動伺服器(必須)
由於本地開啟 `html/game.html` 可能無法載入圖片與資源，因此需要執行以下指令。

```sh
cd monopoly112
python3 -m http.server 8000
```

### 3. 在瀏覽器中開啟
在瀏覽器輸入：
```
http://localhost:8000/html/intro.html
```

### 4. 手機模擬測試
在 Chrome 或 Edge 開啟開發者工具：
- Windows: `Ctrl + Shift + I`
- Mac: `Cmd + Option + I`

點擊右邊的 **手機模擬** 圖示，即可模擬手機環境測試遊戲。

## 遊戲功能改動
1. 增加遊戲出場畫面及背景音樂。
2. 增加遊戲過程中的背景圖片與音樂。
3. 玩家移動時，顯示當前所在的位置。
4. 骰子音效(未完成)。

## 專案架構
```
│  BuyLandServlet.java
│  Game.java
│  GameServlet.java
│  Lands.java
│  Monopoly.java
│  pom.xml
│
├─html 載入 JS
│      game.html
│      intro.html
│
├─images 圖片資源
│      background.jpg
│      logo.jpg
│
├─js
│      game.js 遊戲主程序
│      intro.js 初始畫面
│
└─sound_effects 音效資源
        dice_rolling.mp3
        game_bgm.mp3
        intro_sound.mp3
```

## 相關影片
[![遊戲演示](https://img.youtube.com/vi/weRO096sJI4/0.jpg)](https://www.youtube.com/watch?v=weRO096sJI4)

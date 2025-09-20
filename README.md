# 🎮 2048 Game

Classic **2048 puzzle game** implemented using **JavaScript (ES6 classes), HTML, SCSS, and Gulp**.
The project is based on a base layout template with **Gulp, SCSS, and Stylelint**.

---

## 🚀 DEMO

- [🎲 Play here](https://yuliimar.github.io/game-2048/)

---

## 📐 Features

- 4x4 grid game field
- Move cells with **arrow keys**
- Merge tiles into doubled values (2+2 → 4, 4+4 → 8, etc.)
- Random new tile `2` (90%) or `4` (10%) after each move
- Victory at tile **2048**
- **Game Over** message when no moves available
- **Score counter** increases by sum of merged tiles
- **Restart** button resets the board
- Grid-based responsive layout with SCSS

---

## 🛠️ Project Structure

---

## 📦 Game Class API

Methods you can use:

- `constructor(initialState = emptyBoard)`
- `getState()`
- `getScore()`
- `getStatus()`
- `moveLeft()`
- `moveRight()`
- `moveUp()`
- `moveDown()`
- `start()`
- `restart()`

---

## ▶️ Getting Started

Clone repo and run locally:

```bash
git clone https://github.com/<your_account>/<repo_name>.git
cd <repo_name>
npm install
npm start
```

# Zero Sum

> A modern and technical reinterpretation of the classic *Rock, Paper, Scissors* game, focused on decision-making under pressure, clear game phases, and a clean modular architecture built entirely with **Vanilla JavaScript**.

---

## 🚀 Live Demo
🔗 https://logicfer-25.github.io/zero-sum/

---

## 🧠 What This Project Demonstrates

- Ability to design and manage application state without frameworks
- Clear separation of concerns between logic and UI
- Practical use of design patterns in a real-world scenario
- Handling of user-driven and time-based interactions
- Deployment and version control using GitHub Pages

This project is intended to reflect how a junior frontend developer approaches structure, logic, and maintainability in a real application.

---

## 🔧 Future Improvements

- Improve mobile responsiveness and layout
- Add accessibility enhancements
- Refactor animations for smoother performance
- Extend game modes or difficulty levels

---

## 🎯 Project Overview

**Zero Sum** is a portfolio-oriented project designed to demonstrate strong fundamentals in frontend development, with emphasis on logic clarity and application flow.

Key focus areas include:

- Modular JavaScript architecture
- State-driven UI without routing
- Observer and Singleton patterns applied to global state and shared data
- Event delegation
- Separation of logic and presentation
- Time-based gameplay mechanics
- Clean and maintainable code structure

Instead of relying purely on randomness, the game emphasizes **speed, pressure, and visible decision-making**.

---

## 🧩 Application Structure

The application is divided into **three views**, all controlled by a centralized global state (no routes involved).

---

### 🏠 Home View

- Displays general project information
- Shows cards for each available game mode
- Acts as the main navigation hub

---

### 🎴 Game One — Card-Based Mode

- The user receives **3 random cards (visible)**
- The bot receives **3 random cards (hidden)**
- The user selects one card to play
- The bot selects a card at random
- Both cards animate toward the center
- Card values are compared
- The winner gains one point
- After all cards are used:
  - A modal appears with:
    - Restart game
    - Exit to Home
- Restarting or exiting fully resets UI and state

---

### ⚡ Game Two — Time Pressure Mode

- Both user and bot display **Rock, Paper, Scissors** options
- The user must:
  1. Select **two options**
  2. Discard **one option within 5 seconds**
- The bot also selects two options and discards one
- If the user fails to discard in time:
  - The bot automatically wins the round
- Final choices are compared
- Score persists across rounds
- The game continues until the user exits
- Exiting resets all state and UI

---

## 🏗️ Technical Architecture

### 📌 Global State (Observer + Singleton)

- Controls the active view
- Notifies subscribers on state changes
- Serves as a lightweight alternative to routing

---

### 📌 ScoreManager (Singleton)

- Centralized score handling
- Shared across all game modes
- Decoupled from UI rendering

---

### 📌 Separation of Responsibilities

Each game mode is split into:

- `logicGameX.js` → game rules and flow
- `updateManagerX.js` → UI updates and styles
- `gameXView.js` → DOM rendering
- Centralized event delegation

This structure ensures:

- Predictable behavior
- Easier debugging
- Cleaner refactoring
- Scalable design

---

### 📌 Render Pipeline

```js
renderUI(view)
```

Renders the correct view based on the current global state.

## 🎮 Key Features

- ✔ Vanilla JavaScript (no frameworks)

- ✔ Modular ES6 architecture

- ✔ State-driven UI

- ✔ Time-based decision mechanics

- ✔ Event delegation

- ✔ Clear game phases

- ✔ Full UI and state reset on exit

## 🛠️ Technologies Used

- HTML5

- CSS3

- JavaScript (ES6 Modules)

- Observer Pattern

- Singleton Pattern

- Modular Architecture

## ▶️ Installation & Usage

This project must be run on a local server due to ES module usage.

### Option 1 — VS Code Live Server (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/your-username/zero-sum.git
```

2. Open the project folder in VS Code

3. Install the Live Server extension

4. Right-click index.html → Open with Live Server

### Option 2 — Any Local Server
``` bash
npx serve
```

or

``` bash
python -m http.server
```

## 👨‍💻 Author

Federico (logicFer)
Self-taught Frontend Developer focused on JavaScript, application logic, and clean software architecture.
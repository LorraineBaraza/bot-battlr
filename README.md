# ⚔️ Bot Battlr
Live view: https://lord-of-the-bots.netlify.app/

**Bot Battlr** is a dynamic, React-based single-page application (SPA) where you can browse a list of battle bots, view their detailed specs, enlist them into your personal army, discharge them when they're no longer needed, and even delete them permanently (with dramatic flair, of course).

This app is inspired by collectible battle games and the aesthetic of epic sci-fi and fantasy worlds like Warhammer and the comic *Pick me up: Infinite Gacha*.

---

## 🚀 Features

- 🔍 **Browse All Bots**  
  View a full catalog of battle bots fetched from a JSON server.

- 📋 **View Bot Specs**  
  Click on any bot card to reveal detailed information including name, class, catchphrase, health, damage, and armor.

- 🛡️ **Enlist Bots to Your Army**  
  Select bots and enlist them into your elite squad. You’ll receive dramatic notifications like:
  > *“[BotName] has answered the call. The frontline awaits.”*

- ♻️ **Discharge Bots from Your Army**  
  Reorganize your army by removing bots. You'll be notified:
  > *“[BotName] has been honorably discharged. May their circuits rest.”*

- ☠️ **Terminate Bots with Extreme Prejudice**  
  Permanently delete a bot from the database and memorialize them with:
  > *“[BotName] has returned to the embrace of the gods. His courage shall forever be remembered.”*

- 🔁 **Tab-Based Navigation**  
  Switch between:
  - **Bot Collection**
  - **Your Bot Army**
  - **Side-by-Side Comparison View**

- 💬 **Notification System**  
  Clear, themed alerts that reflect the gravity of each action.

---

## 🧠 Technologies Used

- **React** (Vite or Create React App depending on setup)
- **JavaScript (ES6+)**
- **JSON Server** – simulating a REST API
- **CSS** – manually styled in `index.css` and `app.css`

---

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm installed
- `json-server` installed globally or as a dev dependency

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/bot-battlr.git
cd bot-battlr

# Install dependencies
npm install

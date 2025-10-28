# 📘 Dictionary Web App

A simple and elegant **Dictionary Web App** built with **Node.js**, **Express**, **EJS**, and **Axios** that lets users search for the meaning, synonyms, antonyms, and examples of any English word.  
It also features a **random word generator** for fun and learning new words!

---

## 🚀 Features

- 🔍 Search for any English word and view:
  - Definitions  
  - Synonyms  
  - Antonyms  
  - Example sentences  
- 🎲 Generate a random English word with one click  
- 🔊 Audio pronunciation support (button-ready)  
- 💡 Clean UI with **Bootstrap 5** and **EJS templates**
- ⚡ Fast API calls using **Axios**

---

## 🧩 Tech Stack

| Layer | Technology |
|:------|:------------|
| Backend | Node.js, Express.js |
| Frontend | EJS, Bootstrap 5 |
| HTTP Requests | Axios |
| APIs Used | [Free Dictionary API](https://dictionaryapi.dev/) & [Random Word API](https://random-word-api.herokuapp.com/) |

---

## 🛠️ Installation and Setup

### 1️⃣ Clone the repository


git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
2️⃣ Install dependencies

npm install
3️⃣ Run the app


node index.js
4️⃣ Open in browser
Go to http://localhost:3000

🧠 How It Works
The home page (/) displays a simple search bar and buttons.

Users can:

Type a word → Hit "Submit" → See word details.

Click “Generate a random word” → Random word appears with details.

The app fetches data using Axios from:

https://api.dictionaryapi.dev/api/v2/entries/en/<word>

https://random-word-api.herokuapp.com/word

📂 Project Structure
pgsql

📦 dictionary-app
├── 📁 public
│   ├── style.css
├── 📁 views
│   ├── index.ejs
├── index.js
├── package.json
└── README.md





🧑‍💻 Author
I_blame_sumit
Built with ❤️ using Node.js and Express.

📜 License
This project is open source and available under the MIT License.

💬 Feedback
If you find a bug or have a feature request, feel free to open an issue or pull request!

✨ “Expand your vocabulary — one word at a time.” ✨


# Link Shortener

A simple URL shortener built with **React (frontend)** and **Node.js with Express (backend)**. This application allows users to shorten long URLs and access them via a shorter link.

## 🚀 Features
- Shorten any long URL.
- Generates a unique short link.
- Simple and clean UI.

---

## 📌 Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express, PostgreSQL
- **Database:** PostgreSQL (Local)

---

## ⚙️ How to Run the Project Locally

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/your-username/link-shortener.git
cd link-shortener
```

---

## 🖥️ Running the Backend

### 🔹 2. Navigate to Backend Folder
```sh
cd backend
```

### 🔹 3. Install Dependencies
```sh
npm install
```

### 🔹 4. Start the Backend Server
```sh
node server.js
```
> The backend will run at `http://localhost:5000`

---

## 🌐 Running the Frontend

### 🔹 5. Open a New Terminal and Navigate to Frontend Folder
```sh
cd frontend
```

### 🔹 6. Install Dependencies
```sh
npm install
```

### 🔹 7. Update API URL in `LinkShortener.js`
> Open `frontend/src/LinkShortener.js` and replace the **API URL**:
```js
const response = await axios.post('http://localhost:5000/shorten', { url: inputUrl });
const fullShortenedUrl = `http://localhost:5000/${response.data.shortenedUrl}`;
```

### 🔹 8. Start the Frontend Server
```sh
npm run dev
```
> The frontend will run at `http://localhost:5173`

---

## 🛠️ Project Structure
```
📦 link-shortener
 ┣ 📂 backend
 ┃ ┣ 📜 server.js
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 .env
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📜 LinkShortener.js
 ┃ ┃ ┗ 📜 App.css
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 index.html
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

---

## 📝 API Endpoints
| Method | Endpoint       | Description                  |
|--------|--------------|------------------------------|
| `POST` | `/shorten`   | Shortens a given URL        |
| `GET`  | `/:id`      | Redirects to the long URL   |

---

## 📩 Contact
For any queries or issues, feel free to reach out:
- **GitHub:** [GitHub Profile](https://github.com/kesavan2522)
- **Email:** suryakesavan6@gmail.com

---

🎉 **Now you're ready to run the project locally!** 🚀
```



✅ **What this README includes:**  
- Steps to run the backend and frontend locally  
- Code changes required (`localhost:5000`)  
- API endpoints  
- Project structure  

Let me know if you need modifications! 🚀

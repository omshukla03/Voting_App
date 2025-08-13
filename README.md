# 🗳️ Community Voting App

A simple and responsive **Community Voting Application** built with **Angular**.  
It allows users to create polls, vote on options, and view results instantly.  
Includes a **Dark/Light mode toggle** for better user experience.

---

## 📸 Features
- ✅ Create polls with multiple options.
- ✅ Vote on polls with live vote count updates.
- ✅ Dark/Light mode toggle with saved preference.
- ✅ Fully responsive UI with Bootstrap styling.
- ✅ Persistent theme using `localStorage`.
- ✅ Clean and minimal design.

---

## 🛠️ Technologies Used
- **Angular** (Standalone Components)
- **Bootstrap** (Styling & Layout)
- **TypeScript**
- **RxJS** (For API calls)
- **HTML5 & CSS3**

---

## 📂 Project Structure
```
src/
│── app/
│   │── poll/               # Main poll component
│   │   ├── poll.component.html
│   │   ├── poll.component.css
│   │   ├── poll.component.ts
│   │── poll.service.ts     # API calls for polls
│   │── poll.models.ts      # Data models
│
│── assets/                 # Static assets
│── index.html              # Main HTML file
│── styles.css              # Global styles
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
ng serve
```
App will be available at: **http://localhost:4200**

---

## 🌐 Deployment on GitHub Pages
To deploy the app to **GitHub Pages**:
```bash
npm install angular-cli-ghpages --save-dev
ng build --output-path=dist/your-repo-name --base-href "https://your-username.github.io/your-repo-name/"
npx angular-cli-ghpages --dir=dist/your-repo-name
```
Then, enable **GitHub Pages** in your repo settings → Pages → `gh-pages` branch.

---

## 📷 Screenshots
### Light Mode
<img width="1905" height="953" alt="image" src="https://github.com/user-attachments/assets/a79bd5a4-abd4-4b4b-8b9b-0ffcba86cddb" />


### Dark Mode
<img width="1913" height="949" alt="image" src="https://github.com/user-attachments/assets/176a3651-e06e-46a4-a262-c47120485e0e" />
<img width="1914" height="949" alt="image" src="https://github.com/user-attachments/assets/8f3d1a29-7292-49a7-bfcc-6e1a21ef4f53" />


---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork the repo  
2. Create a new branch (`feature/your-feature`)  
3. Commit changes  
4. Push to branch and create a Pull Request  

---

**Developed with ❤️ using Angular**

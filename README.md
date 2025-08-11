# 🗳️ Voting App

A full-stack **Voting Application** inspired by interactive platforms like the YouTube community section.  
Users can create polls, vote, and view results in real-time. Built with **Spring Boot** and **Angular** for a seamless experience.

---

## 📌 Features
- **User Authentication** (Login/Signup)
- **Create Polls** with multiple options
- **Vote Once per Poll** per user
- **Real-time Vote Count Updates**
- **View Poll Results** in graphical format
- **Responsive UI** for mobile and desktop
- **Secure REST APIs** with validation

---

## 🛠 Tech Stack
**Backend**
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- REST APIs

**Frontend**
- HTML5, CSS3, JavaScript
- Angular Framework

---

## 📂 Project Structure
```
voting-app/
│
├── backend/           # Spring Boot Application
│   ├── src/main/java  # Java source files
│   ├── src/main/resources
│   └── pom.xml
│
├── frontend/          # Angular Application
│   ├── src
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/voting-app.git
cd voting-app
```

### 2️⃣ Backend Setup (Spring Boot)
- Open `backend` folder in your IDE (IntelliJ/Eclipse).
- Create a MySQL database:
```sql
CREATE DATABASE voting_app;
```
- Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/voting_app
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```
- Run the Spring Boot app:
```bash
mvn spring-boot:run
```

### 3️⃣ Frontend Setup (Angular)
```bash
cd frontend
npm install
ng serve
```
- Access the app at: **http://localhost:4200**

---

## 📡 API Endpoints
| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| POST   | `/api/auth/signup`   | Register new user      |
| POST   | `/api/auth/login`    | User login             |
| GET    | `/api/polls`         | Get all polls          |
| POST   | `/api/polls`         | Create new poll        |
| POST   | `/api/votes/{pollId}`| Vote for a poll option |

---

## 📸 Screenshots
> *(Add your project screenshots here)*

---

## 📜 License
This project is licensed under the **MIT License** - you are free to use, modify, and distribute.

---

## 🤝 Contributing
Pull requests are welcome! If you have suggestions or improvements, feel free to fork the repo and submit a PR.

---

**Developed with ❤️ using Spring Boot & Angular**

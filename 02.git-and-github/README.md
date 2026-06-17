# Git Basic Workflow 🚀

Yeh steps follow karke aap apna code GitHub par push kar sakte ho.

---

## ⚙️ Requirements
Shuru karne se pehle aapke system me yeh installed/setup hona chahiye:
- [Git](https://git-scm.com/downloads)  
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/download)  
- [GitHub Account](https://github.com/join)  

---

## Steps

1. GitHub par ek **naya repository** banao.  
2. Us repository ka **URL copy** karo.  
3. Apne system me kisi bhi folder ke andar search bar me **cmd** likh kar enter karo (Command Prompt open ho jayega).  
4. Command chalao:  
   ```bash
   git clone <copied repository url>
   ```
5. Repository folder me jao:  
   ```bash
   cd <repository-name>
   ```
6. VS Code open karo:  
   ```bash
   code .
   ```
7. VS Code me ek **naya file create** karo.  
8. File ke andar kuch content likho.  
9. File ko staging area me add karo:  
   ```bash
   git add .
   ```
10. Commit banao apne message ke sath:  
    ```bash
    git commit -m "aapka koi bhi message"
    ```
11. Changes ko GitHub par push karo:  
    ```bash
    git push
    ```

---

## ✅ Notes
- Step 4 me `<copied repository url>` ki jagah GitHub se copied URL paste karo.  
- Step 5 me `<repository-name>` ki jagah apne repo ka folder name likho.  
- Har commit ka message meaningful likhne ki koshish karo.  

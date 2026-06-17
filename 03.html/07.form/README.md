
# 📋 HTML Form Elements – Asaan Reference Guide (Urdu + English Mix)

HTML forms ka kaam hota hai **user se data lena** — jaise name, email, password waghera.  
Neeche tumhein saare important form elements aur unke attributes ka simple aur complete chart mil jaayega.  

---

## 🧾 `<input>` Element aur Uske Types

`<input>` HTML ka **sabse zyada use hone wala** form element hai.  
Ye alag-alag `type` values ke sath aata hai, jaise `text`, `password`, `email`, etc.

| Type | Kya Karta Hai | Common Attributes |
|------|----------------|-------------------|
| `text` | Single-line text likhne ke liye. | `name`, `value`, `placeholder`, `maxlength`, `required` |
| `password` | Hidden input (password type). | `name`, `maxlength`, `required` |
| `email` | Email address likhne ke liye. | `name`, `placeholder`, `required` |
| `number` | Sirf numbers lene ke liye. | `min`, `max`, `step`, `required` |
| `range` | Slider banata hai (value select karne ke liye). | `min`, `max`, `step`, `value` |
| `date` | Calendar se date choose karne ke liye. | `min`, `max`, `value` |
| `color` | Color picker kholta hai. | `value` (hex color) |
| `file` | File upload karne ke liye. | `accept`, `multiple`, `required` |
| `checkbox` | Multiple options choose karne ke liye. | `checked`, `value`, `name` |
| `radio` | Single option choose karne ke liye. | `checked`, `value`, `required` |
| `submit` | Form ko submit karta hai. | `value`, `formaction` |
| `reset` | Form ki values reset karta hai. | `value` |
| `hidden` | Hidden data store karta hai. | `name`, `value` |
| `search` | Search box ke liye. | `placeholder`, `name` |
| `tel` | Phone number input. | `pattern`, `placeholder` |
| `url` | Website URL input. | `placeholder`, `required` |

---

## 🗒️ `<textarea>` – Multi-line Text Box

Yeh tab use hota hai jab user ko **zyada likhna ho** (jaise feedback ya message).

```html
<textarea name="message" rows="5" cols="40" placeholder="Apna message likho..."></textarea>
```

| Attribute | Matlab |
|------------|---------|
| `name` | Field ka naam jisse backend data milta hai. |
| `rows` | Kitni lines visible hongi. |
| `cols` | Box ki width define karta hai. |
| `placeholder` | Hint text jo user ko guide karta hai. |
| `maxlength` | Max characters limit. |
| `required`, `readonly`, `disabled` | Common restrictions. |

---

## 🔽 `<select>` aur `<option>`

Dropdown banane ke liye use hota hai — single ya multiple choice.

```html
<select name="country" required>
  <option value="">--Country Choose Karo--</option>
  <option value="pk">Pakistan</option>
  <option value="in">India</option>
</select>
```

| Tag | Kya Karta Hai | Important Attributes |
|-----|----------------|----------------------|
| `<select>` | Dropdown list banata hai. | `name`, `multiple`, `size`, `required` |
| `<option>` | Dropdown ke andar option deta hai. | `value`, `selected`, `disabled` |

---

## 📁 File Input Example

```html
<input type="file" name="resume" accept=".pdf,.docx" multiple>
```

| Attribute | Matlab |
|------------|---------|
| `accept` | Kaunse file types allow hain. |
| `multiple` | Ek se zyada files select karne ki permission. |

---

## 🧱 `<fieldset>` aur `<legend>`

Yeh dono elements **form ke related fields ko group** karte hain — ek border ke andar.

```html
<fieldset>
  <legend>Personal Information</legend>
  <input type="text" name="fname" placeholder="First Name">
  <input type="text" name="lname" placeholder="Last Name">
</fieldset>
```

| Tag | Matlab |
|-----|---------|
| `<fieldset>` | Group banata hai input fields ka. |
| `<legend>` | Us group ka title show karta hai. |

---

## 🏷️ `<label>` Element

`<label>` tag ka kaam hota hai input field ke liye **text title** dena.  
Is se form accessible aur user-friendly hota hai.  

### ✅ Example 1 — Input ke andar Label
```html
<label>Username:
  <input type="text" name="username">
</label>
```
➡️ Input label ke andar hai, to `for` attribute ki zarurat nahi.

### ✅ Example 2 — `for` aur `id` ke sath
```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email">
```
➡️ `label` ka `for` attribute input ke `id` se link hota hai.

| Attribute | Matlab |
|------------|---------|
| `for` | Input ke ID se connect karta hai. |
| `form` | Agar label form ke bahar likha ho to form ID se link karta hai. |

### 💡 Fayda Kya Hai?
- Accessibility improve hoti hai (screen readers ke liye).  
- Mobile pe click karte hi field active ho jaata hai.  
- Form clean aur understandable lagta hai.

---

## 🎛️ `<button>` Element

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button">Click Me</button>
```

| Type | Kya Karta Hai |
|------|----------------|
| `submit` | Form data bhejta hai. |
| `reset` | Form saaf karta hai. |
| `button` | Custom action ke liye. |

| Common Attributes | Matlab |
|--------------------|---------|
| `name` | Button ka naam (form data mein send hota hai). |
| `value` | Submit hone par bhejni wali value. |
| `disabled` | Button ko disable karta hai. |

---

🧠 *Yeh chart students ke liye banaya gaya hai taake form elements easily yaad rahein aur practice ke waqt reference milta rahe.*

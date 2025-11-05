# 🧮 Modern Calculator

A beautiful, fully-functional web-based calculator with glassmorphism design, built using HTML, CSS, and JavaScript.

![Calculator Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🔢 Basic Operations
- **Addition (+)** - Add numbers together
- **Subtraction (−)** - Subtract numbers
- **Multiplication (×)** - Multiply numbers
- **Division (÷)** - Divide numbers with zero-division protection

### 📐 Advanced Functions
- **Percentage (%)** - Convert numbers to percentages
- **Square Root (√)** - Calculate square root of positive numbers
- **Square (x²)** - Calculate square of any number

### 💾 Memory Functions
- **MC (Memory Clear)** - Clear stored memory value
- **MR (Memory Recall)** - Retrieve stored memory value
- **M+ (Memory Add)** - Add current value to memory
- **M− (Memory Subtract)** - Subtract current value from memory
- Visual indicator shows when memory is active

### ⌨️ Keyboard Support
- **Numbers (0-9)** - Type directly
- **Decimal point (.)** - For decimal numbers
- **Operators (+, -, *, /)** - Use keyboard operators
- **Enter or =** - Calculate result
- **Escape or C** - Clear calculator
- **Backspace** - Delete last digit
- **%** - Percentage function

### 🎯 Smart Features
- **BODMAS Order of Operations** - Correct mathematical precedence
- **Error Handling** - Division by zero shows "Error" with shake animation
- **Chained Operations** - Perform multiple calculations in sequence
- **Decimal Support** - Work with floating-point numbers
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🚀 How to Use

### Basic Calculations
1. Click number buttons or type on keyboard to enter numbers
2. Click an operator (+, −, ×, ÷) or use keyboard
3. Enter the second number
4. Press **=** or **Enter** to see the result

**Example:** `7 + 3 = 10`

### Advanced Calculations
- **Percentage:** Enter a number, then click **%** button
  - Example: `50%` → `0.5`
  
- **Square Root:** Enter a number, then click **√** button
  - Example: `√16` → `4`
  
- **Square:** Enter a number, then click **x²** button
  - Example: `5²` → `25`

### Using Memory
1. Calculate a number or enter a value
2. Click **M+** to add it to memory
3. Perform other calculations
4. Click **MR** to recall the stored value
5. Click **MC** to clear memory

### BODMAS Support
The calculator follows proper mathematical order:
- **B**rackets (not implemented)
- **O**rders (powers/roots)
- **D**ivision
- **M**ultiplication
- **A**ddition
- **S**ubtraction

**Example:** `2 + 3 × 4` = `14` (not 20)

## 🎨 Design Features

- **Glassmorphism UI** - Modern frosted glass effect
- **Gradient Background** - Beautiful purple gradient
- **Smooth Animations** - Hover effects and transitions
- **Clean Typography** - Poppins font for readability
- **Responsive Layout** - Adapts to all screen sizes
- **Accessible** - Keyboard navigation support

## 📁 Project Structure

```
basic-calculator/
│
├── index.html       # HTML structure
├── style.css        # Styling (100 lines)
├── script.js        # Calculator logic (99 lines)
└── README.md        # Documentation
```

## 🛠️ Technical Details

### Code Stats
- **HTML:** Clean semantic structure
- **CSS:** 100 lines of compact styling
- **JavaScript:** 99 lines of optimized code

### Key Technologies
- Vanilla JavaScript (no frameworks)
- CSS3 with backdrop-filter
- Grid layout for button arrangement
- Event delegation for efficient handling

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🚦 Getting Started

### Option 1: Direct Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Vinayakyeti/basic-calculator.git
   ```
2. Open `index.html` in your browser
3. Start calculating!

### Option 2: Live Demo
Visit the live demo at: `https://vinayakyeti.github.io/basic-calculator/`

### Option 3: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```
Then open `http://localhost:8000`

## 🎯 Usage Examples

### Simple Calculation
```
Input: 15 + 27
Output: 42
```

### Complex Calculation (BODMAS)
```
Input: 10 + 5 × 2
Output: 20 (not 30)
```

### Using Memory
```
Step 1: 100 + 50 = 150
Step 2: Click M+ (150 stored)
Step 3: 25 × 4 = 100
Step 4: Click MR (shows 150)
Step 5: + = (result: 250)
```

### Error Handling
```
Input: 10 ÷ 0
Output: Error (with shake animation)
```

## 🔧 Customization

### Change Theme Colors
Edit `style.css`:
```css
body {
    background: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### Modify Button Colors
```css
.btn-operator { background: rgba(your, colors, here, 0.5); }
```

## 🐛 Known Limitations

- No bracket support for complex expressions
- Limited to standard calculator operations
- Memory stores only one value

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Vinayakyeti**
- GitHub: [@Vinayakyeti](https://github.com/Vinayakyeti)

## 🌟 Acknowledgments

- Design inspired by modern glassmorphism trends
- Built with ❤️ using vanilla web technologies
- Font: [Poppins](https://fonts.google.com/specimen/Poppins) by Google Fonts

---

**Made with 💜 by Vinayakyeti** | [View Demo](https://vinayakyeti.github.io/basic-calculator/) | [Report Issue](https://github.com/Vinayakyeti/basic-calculator/issues)

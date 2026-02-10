# EduCraft - Online Learning Platform

A modern, responsive landing page for an online education platform. Built with clean HTML, CSS, and vanilla JavaScript.

# DEMO LIKK: https://website-course-ux-ui.onrender.com

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Course Filtering** - Filter courses by category (Programming, Design, Marketing, AI & ML, Mobile Dev, Content)
- **Search Functionality** - Real-time search across course titles and descriptions
- **Sorting Options** - Sort courses by price, duration, or difficulty level
- **Smooth Animations** - Minimalist animations and transitions for better UX
- **Clean Code** - Well-organized, commented code for easy maintenance

## 📁 Project Structure

```
course-website-ux-ui/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and filtering
├── auth.html           # Authentication page (optional)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

No special requirements needed! This is a static website that runs in any modern web browser.

### Installation

1. **Clone or download** this repository to your local machine

2. **Open the project**
   ```bash
   cd course-website-ux-ui
   ```

3. **Launch the website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## 🎨 Customization

### Colors

Main colors are defined in `styles.css`. Key color variables:

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Dark**: `#0a0a0a` (Almost Black)
- **Light**: `#fafafa` (Off White)

### Fonts

The project uses Google Fonts:
- **DM Sans** - Body text
- **Space Grotesk** - Headings

### Adding New Courses

To add a new course, edit both `index.html` and `script.js`:

**In index.html:**
```html
<div class="course-card" data-category="your-category" data-price="4999" data-duration="12" data-level="2">
    <div class="course-image">🎓</div>
    <div class="course-content">
        <span class="course-badge">Category</span>
        <h3>Course Title</h3>
        <p>Course description...</p>
        <div class="course-meta">
            <div class="course-meta-item">⏱ 12 weeks</div>
            <div class="course-meta-item">📊 Intermediate</div>
        </div>
        <div class="course-footer">
            <span class="course-price">$4999</span>
            <a href="#" class="btn-small">Learn More</a>
        </div>
    </div>
</div>
```

**In script.js:**
```javascript
const courses = [
    // Add your course data
    { element: null, category: 'your-category', price: 4999, duration: 12, level: 2, title: 'Your Course Title' }
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 968px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Contact

For questions or suggestions, feel free to reach out or open an issue.

---

**Built with ❤️ for demonstrate my knowladge**

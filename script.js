/* ===================================
   EduCraft - Main JavaScript
   Handles filtering, sorting, and animations
   =================================== */

// Course data structure for filtering and sorting
const courses = [
    { element: null, category: 'programming', price: 4999, duration: 12, level: 2, title: 'Full Stack Web Development' },
    { element: null, category: 'design', price: 3999, duration: 10, level: 1, title: 'UI/UX Design Masterclass' },
    { element: null, category: 'marketing', price: 4499, duration: 8, level: 2, title: 'Digital Marketing Pro' },
    { element: null, category: 'ai', price: 5999, duration: 16, level: 3, title: 'Machine Learning A-Z' },
    { element: null, category: 'mobile', price: 5499, duration: 14, level: 2, title: 'iOS & Android Development' },
    { element: null, category: 'content', price: 3499, duration: 6, level: 1, title: 'Content Marketing & Copywriting' }
];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeCourseElements();
    initializeFilters();
    initializeScrollAnimations();
    initializeSmoothScrolling();
});

// Link course data with DOM elements
function initializeCourseElements() {
    const courseCards = document.querySelectorAll('.course-card[data-category]');
    courseCards.forEach((card, index) => {
        if (courses[index]) {
            courses[index].element = card;
        }
    });
}

// Setup all filter event listeners
function initializeFilters() {
    const searchInput = document.getElementById('courseSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');

    // Search input handler
    searchInput.addEventListener('input', filterAndSortCourses);

    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterAndSortCourses();
        });
    });

    // Sort dropdown handler
    sortSelect.addEventListener('change', filterAndSortCourses);
}

// Main filtering and sorting logic
function filterAndSortCourses() {
    const searchTerm = document.getElementById('courseSearch').value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const sortBy = document.getElementById('sortSelect').value;
    const noResults = document.getElementById('noResults');

    // Filter courses based on category and search term
    let visibleCourses = courses.filter(course => {
        if (!course.element) return false;

        // Check category match
        const categoryMatch = activeCategory === 'all' || course.category === activeCategory;

        // Check search term match in title, description, or badge
        const searchMatch = course.title.toLowerCase().includes(searchTerm) ||
                          course.element.querySelector('.course-content p').textContent.toLowerCase().includes(searchTerm) ||
                          course.element.querySelector('.course-badge').textContent.toLowerCase().includes(searchTerm);

        return categoryMatch && searchMatch;
    });

    // Sort filtered courses
    if (sortBy !== 'default') {
        visibleCourses.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'duration-short':
                    return a.duration - b.duration;
                case 'duration-long':
                    return b.duration - a.duration;
                case 'level':
                    return a.level - b.level;
                default:
                    return 0;
            }
        });
    }

    // Hide all courses initially
    courses.forEach(course => {
        if (course.element) {
            course.element.style.display = 'none';
            course.element.classList.add('hidden');
        }
    });

    // Show filtered courses with staggered animation
    if (visibleCourses.length > 0) {
        noResults.style.display = 'none';
        document.getElementById('resultsCount').textContent = visibleCourses.length;
        
        visibleCourses.forEach((course, index) => {
            setTimeout(() => {
                course.element.style.display = 'block';
                course.element.classList.remove('hidden');
                course.element.classList.add('show');
            }, index * 100);
        });
    } else {
        noResults.style.display = 'block';
        document.getElementById('resultsCount').textContent = '0';
    }
}

// Reset all filters to default state
function resetFilters() {
    document.getElementById('courseSearch').value = '';
    document.getElementById('sortSelect').value = 'default';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    filterAndSortCourses();
}

// Quick filter from hero section tags
function quickFilter(category) {
    // Smooth scroll to courses section
    document.getElementById('courses').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Apply filter after scroll animation
    setTimeout(() => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        filterAndSortCourses();
    }, 500);
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll-triggered animations for cards
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to cards
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

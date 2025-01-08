// Add categories to the projects data structure
const projects = [
  {
    title: "Form Login",
    category: "web-development",
    image: "Form Login/formlogin.jpg",
    link: "Form Login/index.html"
  },
  {
    title: "Kalkulator",
    category: "web-development",
    image: "Kalkulator/kalkulator.jpg",
    link: "Kalkulator/kalkulator.html"
  },
  {
    title: "Dashboard",
    category: "web-development",
    image: "Dashboard/dashboard.jpg",
    link: "Dashboard/index.html"
  },
  {
    title: "Tetris Adrian",
    category: "game-development",
    image: "tetris.jpg",
    link: "tetrisadrian.html"
  },
  {
    title: "Dashboard Penjualan",
    category: "data-visualization",
    image: "dashboardpenjualan.jpg",
    link: "dashboard.html"
  },
  {
    title: "HTML Certificate",
    category: "certificate",
    image: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0001.jpg",
    link: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0001.jpg"
  },
  {
    title: "CSS Certificate",
    category: "certificate",
    image: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0002.jpg",
    link: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0002.jpg"
  },
  {
    title: "JavaScript Certificate",
    category: "certificate",
    image: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0003.jpg",
    link: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0003.jpg"
  },
  {
    title: "JavaScript Intermediate Certificate",
    category: "certificate",
    image: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0004.jpg",
    link: "Sololearn/41734c4a-2113-4b92-8d2e-791e797b3aca_page-0004.jpg"
  }
];

// Function to create filter buttons
function createFilterButtons() {
  const categories = [...new Set(projects.map(project => project.category))];
  const filterContainer = document.createElement('div');
  filterContainer.className = 'text-center mb-4';
  
  // Add "All" button
  const allButton = document.createElement('button');
  allButton.className = 'btn btn-primary me-2 mb-2 active';
  allButton.textContent = 'All';
  allButton.setAttribute('data-category', 'all');
  filterContainer.appendChild(allButton);
  
  // Add category buttons
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'btn btn-outline-primary me-2 mb-2';
    button.textContent = category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    button.setAttribute('data-category', category);
    filterContainer.appendChild(button);
  });
  
  // Insert filter buttons before the portfolio grid
  const portfolioSection = document.querySelector('#portfolio .container');
  portfolioSection.insertBefore(filterContainer, portfolioSection.querySelector('.row'));
  
  // Add click event listeners
  filterContainer.addEventListener('click', filterProjects);
}

// Function to filter projects
function filterProjects(event) {
  if (!event.target.matches('button')) return;
  
  // Update active button
  const buttons = document.querySelectorAll('#portfolio button');
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
  
  const category = event.target.getAttribute('data-category');
  const projectCards = document.querySelectorAll('#portfolio .col');
  
  projectCards.forEach(card => {
    const projectCategory = projects.find(p => 
      p.title === card.querySelector('.card-header').textContent
    )?.category;
    
    if (category === 'all' || category === projectCategory) {
      card.style.display = '';
      // Add fade-in animation
      card.style.opacity = '0';
      setTimeout(() => card.style.opacity = '1', 50);
    } else {
      card.style.display = 'none';
    }
  });
}

// Add smooth transitions for filtering
const style = document.createElement('style');
style.textContent = `
  #portfolio .col {
    transition: opacity 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

// Initialize filtering system when DOM is loaded
document.addEventListener('DOMContentLoaded', createFilterButtons);
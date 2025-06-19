/**
 * RoboInk Steampunk Theme JavaScript
 * Handles interactive elements and steampunk animations
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize theme functionality
  initSteampunkEffects();
  initCategoryCardHover();
  initNewsletterForm();
  initMobileMenu();
  initSmoothScrolling();

  /**
   * Add steampunk visual effects
   */
  function initSteampunkEffects() {
    // Add gear rotation variations
    const gears = document.querySelectorAll('.gear-decoration');
    gears.forEach((gear, index) => {
      const duration = 15 + (index * 5); // Vary rotation speed
      const direction = index % 2 === 0 ? 'normal' : 'reverse';
      gear.style.animationDuration = duration + 's';
      gear.style.animationDirection = direction;
    });

    // Add subtle parallax effect to hero background elements
    const heroElements = document.querySelectorAll('.hero-section .gear-decoration');
    if (heroElements.length > 0) {
      window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroElements.forEach((element, index) => {
          const speed = 0.2 + (index * 0.1);
          element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * (index % 2 === 0 ? 0.1 : -0.1)}deg)`;
        });
      });
    }
  }

  /**
   * Enhanced category card hover effects
   */
  function initCategoryCardHover() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
      const image = card.querySelector('img');
      
      card.addEventListener('mouseenter', function() {
        // Add subtle glow effect
        this.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.2), 0 4px 12px rgba(231, 169, 119, 0.15)';
        
        // Slightly rotate the card
        this.style.transform = 'translateY(-8px) rotate(1deg)';
      });
      
      card.addEventListener('mouseleave', function() {
        // Reset to default state
        this.style.boxShadow = '';
        this.style.transform = '';
      });
      
      // Add click ripple effect
      card.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(212, 180, 131, 0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          left: ${x}px;
          top: ${y}px;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /**
   * Newsletter form enhancement
   */
  function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = newsletterForm?.querySelector('input[type="email"]');
    const submitButton = newsletterForm?.querySelector('button[type="submit"]');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
      if (!emailInput.value.trim()) {
        e.preventDefault();
        showNotification('Please enter your email address', 'error');
        return;
      }
      
      if (!isValidEmail(emailInput.value)) {
        e.preventDefault();
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      // Show loading state
      submitButton.textContent = 'Subscribing...';
      submitButton.disabled = true;
    });
    
    // Add visual feedback for email input
    emailInput?.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    emailInput?.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  }

  /**
   * Mobile menu functionality
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const menuOverlay = document.querySelector('[data-menu-overlay]');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('menu-open');
      
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
    
    // Close menu when clicking overlay
    menuOverlay?.addEventListener('click', closeMobileMenu);
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('menu-open')) {
        closeMobileMenu();
      }
    });
    
    function openMobileMenu() {
      mobileMenu.classList.add('menu-open');
      menuOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Animate menu items
      const menuItems = mobileMenu.querySelectorAll('li');
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      });
    }
    
    function closeMobileMenu() {
      mobileMenu.classList.remove('menu-open');
      menuOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  /**
   * Smooth scrolling for anchor links
   */
  function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Utility Functions
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'error' ? 'var(--rust)' : 'var(--teal)'};
      color: var(--parchment);
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      z-index: 1000;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);
  }

  /**
   * Performance optimization: Lazy load images
   */
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }

  // Initialize lazy loading
  initLazyLoading();

  /**
   * Add loading states for interactive elements
   */
  function addLoadingStates() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
          this.classList.add('loading');
          const originalText = this.textContent;
          this.textContent = 'Loading...';
          
          // Reset after 3 seconds (adjust based on actual loading time)
          setTimeout(() => {
            this.classList.remove('loading');
            this.textContent = originalText;
          }, 3000);
        }
      });
    });
  }

  addLoadingStates();
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .notification {
    font-family: 'Roboto', sans-serif;
  }
  
  .btn-primary.loading,
  .btn-secondary.loading {
    opacity: 0.7;
    pointer-events: none;
  }
  
  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .lazy.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);
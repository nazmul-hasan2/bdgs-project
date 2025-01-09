// ***darkmode***
    const htmlTag = document.getElementById("htmlTag");
    document.getElementById("switch").addEventListener("click", function () {
      htmlTag.classList.toggle("dark");
    });


// ***navmenu/mobilemenu***
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('#mobile-menu-items a');

    // Open menu
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });

    // Close menu
    mobileMenuClose.addEventListener('click', closeMenu);

    // Close menu on clicking a menu item
    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    function closeMenu() {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300); // Match duration with transition
    }


// ***navactivelink***
  document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    // Get the current URL path
    const currentPath = window.location.pathname;

    // Loop through all nav items and add 'active' class to the matching item
    navItems.forEach((item) => {
      if (item.getAttribute("href") === currentPath) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });


    // JavaScript to toggle FAQ answers and icons with one open at a time
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const button = item.querySelector('button');
      const answer = item.querySelector('.faq-answer');
      const icon = button.querySelector('i.fa-chevron-down');
      
      button.addEventListener('click', () => {
        // Close all other open FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherIcon = otherItem.querySelector('i.fa-chevron-down');
            otherAnswer.classList.remove('open');
            otherIcon.classList.remove('rotate-180');
          }
        });

        // Toggle the current FAQ
        answer.classList.toggle('open');
        icon.classList.toggle('rotate-180');
      });
    });

document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skills ul li');
    
    skillItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = '#4CAF50';
        item.style.fontWeight = 'bold';
      });
      item.addEventListener('mouseout', () => {
        item.style.color = '#333';
        item.style.fontWeight = 'normal';
      });
    });
  });
  
const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Close all items
    items.forEach(i => {
      i.classList.remove('active');
      const icon = i.querySelector('.toggle-icon');
      if (icon) icon.src = './image/icon-plus.svg';
    });

    // Toggle current item
    if (!isOpen) {
      item.classList.add('active');
      const icon = item.querySelector('.toggle-icon');
      if (icon) icon.src = './image/icon-minus.svg';
    }
  });
});
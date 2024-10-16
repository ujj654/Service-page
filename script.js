document.querySelectorAll('.group').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transition = 'transform 1s';
        box.style.transform = 'rotate(360deg)';
    });

    box.addEventListener('mouseleave', () => {
       box.style.transition = 'none';
       box.style.transform = 'rotate(0deg)';
    });
});
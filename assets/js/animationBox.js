document.addEventListener('DOMContentLoaded', function() {
    const expandableBoxes = document.querySelectorAll('.expandable-box');

    expandableBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            const content = this.querySelector('.expandable-content');
            content.style.maxHeight = content.scrollHeight + 'px';
        });

        box.addEventListener('mouseleave', function() {
            const content = this.querySelector('.expandable-content');
            content.style.maxHeight = '0';
        });
    });
});
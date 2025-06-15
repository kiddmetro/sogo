/* FAQ section JS */
document.querySelectorAll('.faq-question').forEach(item => {
item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const toggle = item.querySelector('.faq-toggle');

    // Close all others
    document.querySelectorAll('.faq-answer').forEach(ans => {
    if (ans !== answer) ans.style.display = 'none';
    });
    document.querySelectorAll('.faq-toggle').forEach(tog => {
    if (tog !== toggle) tog.textContent = '+';
    });

    // Toggle current
    if (answer.style.display === 'none') {
    answer.style.display = 'block';
    toggle.textContent = '−';
    } else {
    answer.style.display = 'none';
    toggle.textContent = '+';
    }
});
});


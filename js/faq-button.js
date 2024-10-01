// Selects All FAQ Buttons
const faqButtons = document.querySelectorAll('.faq-question');

// Iterates Over All Buttons & Adds An Event
faqButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Grabs The Sibling Next To It
        const answer = button.nextElementSibling;

        if (answer.style.maxHeight) {
            // Sets The Value Equal To Nothing
            answer.style.maxHeight = null;
            button.firstElementChild.innerHTML = 'add'; // Corrected this line
            button.style.borderBottomLeftRadius = '0.313rem';
            button.style.borderBottomRightRadius = '0.313rem';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            button.firstElementChild.innerHTML = 'remove'; // Corrected this line
            button.style.borderBottomLeftRadius = '0';
            button.style.borderBottomRightRadius = '0';
        }
    });
});

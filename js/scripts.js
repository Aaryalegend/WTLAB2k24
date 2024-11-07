document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formMessage = document.getElementById('formMessage');

    try {
        const response = await fetch('php/process_form.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if (result.status === 'success') {
            formMessage.innerHTML = `<p style="color: green;">${result.message}</p>`;
            this.reset();
        } else {
            formMessage.innerHTML = `<p style="color: red;">${result.message}</p>`;
        }
    } catch (error) {
        formMessage.innerHTML = `<p style="color: red;">There was an error submitting the form.</p>`;
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: targetSection.offsetTop - 50, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = "Dynamic Business Website";
    let i = 0;
    const typingSpeed = 150; // speed of typing
    const cursorBlinkSpeed = 300; // speed of cursor blink

    const typeWriter = () => {
        if (i < typewriterText.length) {
            document.getElementById("typewriter-title").innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Stop blinking cursor after typing is done
            document.getElementById("typewriter-title").style.borderRight = "none"; 
        }
    };

    // Start typing effect
    typeWriter();
});
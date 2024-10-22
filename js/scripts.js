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

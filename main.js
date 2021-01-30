const allBtn = document.querySelectorAll('.contLigne');

allBtn.forEach(btn => {
    btn.addEventListener('click', () => {        
        btn.classList.toggle('active');
    })
})
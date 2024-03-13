const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            console.log('Button clicked:', this);
            const currentBtn = document.querySelector('.active-btn');
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn');

            // Toggle active section
            const targetId = this.getAttribute('id');
            console.log('Target section ID:', targetId);
            if (targetId) {
                const targetSection = document.getElementById(targetId);
                console.log('Target section element:', targetSection);
                if (targetSection) {
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });
                    targetSection.classList.add('active');
                } else {
                    console.error('Target section element not found!');
                }
            } else {
                console.error('Target section ID is null or undefined!');
            }
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log('Section clicked:', e.target);
        if (id) {
           sectBtns.forEach((btn) => {
               btn.classList.remove('active-btn');
           });
           e.target.classList.add('active-btn');

           sections.forEach((section) => {
               section.classList.remove('active');
           });

           const element = document.getElementById(id);
           element.classList.add('active');
        }
    });
}

pageTransitions();





/*   <a href="https://UmairTechSavvy/Team-Selection" target="_blank" class="icon">

          <i class="fab fa-github"></i>
          
                  </a>
                  <a href="https://UmairTechSavvy/Stock-Trading" target="_blank" class="icon">

                    <i class="fab fa-github"></i>
                    
                            </a>
                            <a href="https://UmairTechSavvy/Meal-App" target="_blank" class="icon">

                              <i class="fab fa-github"></i>
                              
                                      </a>*/
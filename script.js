   if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 800, once: true });
    } else {
      console.warn('AOS library not loaded.');
    }

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.querySelectorAll('.skeleton-card').forEach(card => {
          card.classList.add('loaded');
        });
      }, 1500);
    });

    function openModal() {
      document.getElementById('form-modal').classList.add('show');
      document.getElementById('modal-step-1').classList.add('active');
      document.getElementById('step-1').classList.add('active');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('whatsapp').value = '';
    }

    function closeModal() {
      document.getElementById('form-modal').classList.remove('show');
      document.querySelectorAll('.modal-step').forEach(step => step.classList.remove('active'));
      document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
        step.textContent = step.id.split('-')[1];
      });
    }

    function nextStep(currentStep) {
      const steps = document.querySelectorAll('.modal-step');
      const progressSteps = document.querySelectorAll('.progress-step');
      const inputs = [
        document.getElementById('name'),
        document.getElementById('email'),
        document.getElementById('whatsapp')
      ];

      if (currentStep < 3 && !inputs[currentStep - 1].value) {
        alert('Por favor, preencha o campo antes de continuar.');
        return;
      }

      steps[currentStep - 1].classList.remove('active');
      progressSteps[currentStep - 1].classList.remove('active');
      progressSteps[currentStep - 1].classList.add('completed');

      if (currentStep < 3) {
        steps[currentStep].classList.add('active');
        progressSteps[currentStep].classList.add('active');
      }
    }

    function prevStep(currentStep) {
      const steps = document.querySelectorAll('.modal-step');
      const progressSteps = document.querySelectorAll('.progress-step');

      steps[currentStep - 1].classList.remove('active');
      progressSteps[currentStep - 1].classList.remove('active');
      steps[currentStep - 2].classList.add('active');
      progressSteps[currentStep - 2].classList.add('active');
      progressSteps[currentStep - 2].classList.remove('completed');
    }

    async function submitForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const whatsapp = document.getElementById('whatsapp').value;

      if (!name || !email || !whatsapp) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      try {
        const response = await fetch('/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, whatsapp })
        });

        if (response.ok) {
          document.querySelectorAll('.modal-step').forEach(step => step.classList.remove('active'));
          document.getElementById('modal-step-success').classList.add('active');
          document.getElementById('step-3').classList.add('completed');
        } else {
          throw new Error('Erro ao enviar.');
        }
      } catch (error) {
        alert('Erro ao enviar. Tente novamente.');
        console.error('Erro:', error);
      }
    }
 
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.defer=true;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');
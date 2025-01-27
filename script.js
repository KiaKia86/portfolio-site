// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project Modals
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const project = card.getAttribute('data-project');
    let content = '';

    if (project === 'orca') {
      content = `
        <h2>ORCA v.1</h2>
        <p><strong>Duration:</strong> Dec 2024 - Jan 2025</p>
        <p><strong>Description:</strong> Weather Station Prototype Board Design featuring ESP32-WROOM-32D-N16 with a CP2102N UART bridge (CP2102N-A02-GQFN28R). The design uses essential components (resistors, capacitors, etc.) and high-precision sensor modules, including:</p>
        <ul>
          <li>BMP580 for barometric pressure measurement.</li>
          <li>ICM-20948 for 9-axis motion tracking (IMU).</li>
          <li>AHT21 for temperature and humidity sensing.</li>
        </ul>
        <p>This project demonstrates expertise in PCB design, sensor integration, and embedded systems for environmental monitoring. With the IoT web server, the user can see live data from the sensors and visualize the changes over time with the built-in graph function.</p>
        <div class="project-images">
          <img src="images/orca1.jpg" alt="ORCA v.1 Image 1" class="project-thumbnail">
          <img src="images/orca2.jpg" alt="ORCA v.1 Image 2" class="project-thumbnail">
          <img src="images/orca-schematic.jpg" alt="ORCA v.1 Schematic" class="project-thumbnail">
        </div>
      `;
    } else if (project === 'novel') {
      content = `
        <h2>Calassador Novel</h2>
        <p><strong>Published:</strong> 2022</p>
        <p><strong>Description:</strong> Co-authored a fast-paced novel published in 2022. Calassador features an interesting storyline that is fast-paced and meant for anyone to read! Co-Author: Nicholas Poptop.</p>
        <p><strong>Available on Amazon:</strong> <a href="https://www.amazon.com/Calassador-Mr-Kiyarash-Shahriari-Kesheh/dp/B0BSFRZTX3" target="_blank">Paperback: $7.99 | Kindle: $4.99</a></p>
        <div class="project-images">
          <img src="images/novel1.jpg" alt="Novel Image 1" class="project-thumbnail">
          <img src="images/novel2.jpg" alt="Novel Image 2" class="project-thumbnail">
        </div>
      `;
    } else if (project === 'turbojet') {
      content = `
        <h2>Turbojet Engine CAD</h2>
        <p><strong>Status:</strong> Ongoing</p>
        <p><strong>Description:</strong> Designing an RC turbojet engine. Currently, I have completed the impeller, stator, and stator cover.</p>
        <div class="project-images">
          <img src="images/impeller.jpg" alt="Impeller" class="project-thumbnail">
          <img src="images/stator.jpg" alt="Stator" class="project-thumbnail">
          <img src="images/impeller-cover.jpg" alt="Impeller Cover" class="project-thumbnail">
          <img src="images/stator-cover.jpg" alt="Stator Cover" class="project-thumbnail">
        </div>
      `;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';

    // Add click event listeners to thumbnails in the modal
    document.querySelectorAll('.modal .project-thumbnail').forEach(img => {
      img.addEventListener('click', () => {
        const imageModal = document.getElementById('image-modal');
        const expandedImage = document.getElementById('expanded-image');
        expandedImage.src = img.src;
        imageModal.style.display = 'block';
      });
    });
  });
});

// Close modals
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Image Modal
const imageModal = document.getElementById('image-modal');
const closeImageModal = document.querySelector('.close-image-modal');

closeImageModal.addEventListener('click', () => {
  imageModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = 'none';
  }
});

// Loading Animation
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});
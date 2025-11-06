document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
});

const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Solar PV', 'EV Charging', 'Sales Strategy', 'Policy Advocacy', 'Project Management', 'Community Engagement'],
    datasets: [{
      label: 'Roy’s Skills',
      data: [9, 8, 9, 7, 8, 10],
      backgroundColor: 'rgba(0, 121, 107, 0.2)',
      borderColor: '#00796b',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 10
      }
    }
  }
});
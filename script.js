// Set deployment date
document.getElementById('deploy-date').textContent = new Date().toLocaleDateString();

// Demo button functionality
const demoBtn = document.getElementById('demo-btn');
const demoText = document.getElementById('demo-text');

const messages = [
    '🎉 JavaScript is working!',
    '✨ This site is live on Cloudflare Pages!',
    '🚀 Automatic deployments are awesome!',
    '💫 Push to GitHub, deploy to the world!',
    '🌟 Edge computing at its finest!'
];

let clickCount = 0;

demoBtn.addEventListener('click', () => {
    clickCount++;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    demoText.textContent = randomMessage + ` (Click #${clickCount})`;
    
    // Add animation
    demoText.style.opacity = '0';
    setTimeout(() => {
        demoText.style.transition = 'opacity 0.5s ease';
        demoText.style.opacity = '1';
    }, 100);
});

// Add some console messages for debugging
console.log('🚀 Cloudflare Pages Test Site loaded successfully!');
console.log('📍 Served from:', window.location.hostname);
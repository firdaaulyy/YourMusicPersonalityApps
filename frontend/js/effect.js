// ==== BLUR EFFECT ====

let lastParticleTime = 0;
const particleDelay = 20; // 20ms: durasi minimal antar partikel

document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();
    if (currentTime - lastParticleTime > particleDelay) {
        createSmokeParticle(e.clientX, e.clientY);
        lastParticleTime = currentTime;
    }
});

function createSmokeParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    document.body.appendChild(particle);

    // posisi awal (tepat di kursor)
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // variasi ukuran dasar asap
    const size = Math.random() * 20 + 10; // antara 10px - 30px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // animasi setelah elemen muncul di DOM
    setTimeout(() => {
        // logika asap
        const destinationX = (Math.random() - 0.5) * 60; 
        const destinationY = (Math.random() - 0.5) * -100; 
        
        // Mengembang (scale(4)) dan memudar (opacity(0))
        particle.style.transform = `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(4)`;
        particle.style.opacity = '0';
    }, 10);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        particle.remove();
    }, 1500);
}
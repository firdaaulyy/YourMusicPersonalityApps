const analyzeBtn = document.getElementById('analyzeBtn');
const resultArea = document.getElementById('resultArea');
const trackList = document.getElementById('trackList');
const analysisContent = document.getElementById('analysisContent');

analyzeBtn.onclick = async () => {
    // UI State Loading
    analyzeBtn.disabled = true;
    analyzeBtn.innerText = "Analyzing your vibes...";
    resultArea.classList.add('hidden');

    try {
        // Panggil Backend FastAPI
        const response = await fetch('http://127.0.0.1:8000/analyze');
        const data = await response.json();

        if (data.status === "success") {
            console.log(data.tracks); 

            // Render Tracks
            trackList.innerHTML = data.tracks.map((track, i) => `
                <div class="track-item" onclick="updatePlayer('${data.track_ids[i]}')" style="cursor:pointer; padding:10px; border-bottom:1px solid #282828;">
                    <span>${track}</span>
                    <span style="color:#1DB954; float:right;">▶</span>
                </div>
            `).join('');

            // Render Analysis
            analysisContent.innerText = data.analysis;

            // putar lagu pertama otomatis
            if (data.track_ids && data.track_ids.length > 0) {
                updatePlayer(data.track_ids[0]);
            }

            // Show Results
            resultArea.classList.remove('hidden');
            analyzeBtn.innerText = "Analyze Again";
        } else {
            alert("Something went wrong: " + data.message);
            analyzeBtn.innerText = "Connect & Analyze";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Make sure your Backend (Uvicorn) is running!");
        analyzeBtn.innerText = "Connect & Analyze";
    } finally {
        analyzeBtn.disabled = false;
    }
};

// Fungsi untuk merender player Spotify ke dalam kotak "Now Listening"
function playMusic(id) {
    const playerContainer = document.getElementById('spotifyPlayer');
    // Kita gunakan URL Embed resmi Spotify
    if (playerContainer){
        playerContainer.innerHTML = `
            <iframe 
                src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
            </iframe>`;
    }
}

// Di dalam analyzeBtn.onclick (setelah dapat data dari backend)
if (data.status === "success") {
    const list = document.getElementById('trackList');
    
    // Render list lagu agar setiap baris bisa diklik
    list.innerHTML = data.tracks.map((track, i) => `
        <div class="track-item" onclick="updatePlayer('${data.track_ids[i]}')">
            <span>${track}</span>
            <span class="play-icon">▶</span>
        </div>
    `).join('');

    // Secara default, putar lagu pertama dari list
    playMusic(data.track_ids[0]);

    // Tampilkan sisanya
    document.getElementById('analysisContent').innerText = data.analysis;
    document.getElementById('resultArea').classList.remove('hidden');
}

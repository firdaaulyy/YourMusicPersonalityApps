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
            // Render Tracks
            trackList.innerHTML = data.tracks
                .map(track => `<li>${track}</li>`)
                .join('');

            // Render Analysis
            analysisContent.innerText = data.analysis;

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
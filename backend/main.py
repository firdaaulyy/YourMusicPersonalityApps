import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google import genai
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

# Load variables dari .env
load_dotenv()

app = FastAPI()

# Konfigurasi CORS agar Frontend bisa memanggil Backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inisialisasi Gemini Client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def get_spotify_client():
    return spotipy.Spotify(auth_manager=SpotifyOAuth(
        client_id=os.getenv("SPOTIFY_CLIENT_ID"),
        client_secret=os.getenv("SPOTIFY_CLIENT_SECRET"),
        redirect_uri="http://127.0.0.1:8888/callback",
        scope="user-top-read"
    ))

@app.get("/analyze")
async def analyze_personality():
    try:
        sp = get_spotify_client()
        
        # Ambil 5 lagu teratas (short_term = 4 minggu terakhir, medium_term = 6 bulan terakhir)
        results = sp.current_user_top_tracks(limit=5, time_range='short_term')
        track_names = []
        track_ids = []

        for item in results['items']:
            track_names.append(f"{item['name']} by {item['artists'][0]['name']}")
            track_ids.append(item['id'])
        
        if not results:
            return {"status": "error", "message": "No listening history found."}

        # Prompt untuk Gemini AI
        prompt = (
            "Kamu adalah seorang psikolog musik yang peka, mendalam, dan intuitif. "

            "Berdasarkan lagu-lagu favorit berikut: "
            f"{', '.join(track_names)}, "

            "analisis kepribadian pendengarnya secara personal dengan menggunakan kata 'kamu'. "
            "Awali dengan sapaan hangat yang singkat (contoh: 'Untukmu yang...,' atau 'Hai kamu,'). "

            "Pisahkan tulisan menjadi 2 hingga 3 baris pendek agar mudah dibaca, seperti refleksi. "
            "Gunakan gaya bahasa yang hangat, emosional, dan sedikit melankolis, seperti tahu betul kepribadian seseorang. "

            "Fokus pada emosi, pola pikir, dan cara kamu berhubungan dengan orang lain. "
            "Buat seolah-olah kamu benar-benar memahami isi hati mereka. "

            "Maksimal 200 kata. "
            "Jangan gunakan bullet point, tanda bintang, atau simbol khusus. Hanya teks biasa."
        )

        # Generate Content menggunakan Gemini
        response = client.models.generate_content(
            model="gemma-3-1b-it",
            contents=prompt
        )

        return {
            "status": "success",
            "tracks": track_names,
            "track_ids": track_ids,
            "analysis": response.text
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}
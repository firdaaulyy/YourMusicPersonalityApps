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
        
        # Ambil 5 lagu teratas (short_term = 4 minggu terakhir)
        top_tracks = sp.current_user_top_tracks(limit=5, time_range='short_term')
        track_list = [f"{t['name']} by {t['artists'][0]['name']}" for t in top_tracks['items']]
        
        if not track_list:
            return {"status": "error", "message": "No listening history found."}

        # Prompt untuk Gemini AI
        prompt = (
            f"As a professional music psychologist, analyze the personality of a person who frequently listens to: "
            f"{', '.join(track_list)}. Write a deep, friendly, and poetic analysis in Indonesian. "
            f"Maximum 150 words. Do not use any asterisks (*) or special characters for formatting."
        )

        # Generate Content menggunakan Gemini
        response = client.models.generate_content(
            model="gemma-3-1b-it",
            contents=prompt
        )

        return {
            "status": "success",
            "tracks": track_list,
            "analysis": response.text
        }

    except Exception as e:
        return {"status": "error", "message": str(e)}
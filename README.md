# 🎶 YourMusic Personality App

**YourMusic Personality App** adalah aplikasi web full-stack inovatif yang menganalisis kepribadian pengguna berdasarkan kebiasaan mendengarkan musik di Spotify.  

Aplikasi ini tidak hanya menampilkan daftar lagu, tetapi juga bertindak sebagai **“Psikolog Musik” digital** yang memberikan narasi mendalam tentang karakter, suasana hati, dan wawasan psikologis pengguna melalui integrasi AI.

---

### 🧠 Analyze My Soul
Fitur ini menganalisis kepribadian kamu melalui musik yang kamu dengarkan.

- Mengambil **5 lagu teratas** dari akun Spotify pengguna  
- Menggunakan **Spotify Web API** untuk data musik  
- Menggunakan **Google Gemini AI** untuk analisis psikologis  
- Menghasilkan **narasi kepribadian yang puitis dan mendalam**  

💡 Output:
- Insight karakter
- Emosi dominan
- Pola kepribadian berdasarkan musik
- Narasi “psikolog musik” yang personal

---

### 🎧 Find My Music
Fitur ini membantu kamu menemukan musik yang “kamu banget”.

- Menggunakan pendekatan **AI berbasis CNN + LSTM**
- Analisis berbasis **audio feature (MFCC / Mel-Frequency Cepstral Coefficients)**
- Input dari pengguna:
  - Lagu favorit  
  - Penyanyi favorit  
  - Genre  
  - Vibes / suasana lagu  

💡 Output:
- Hasil analisis preferensi musik
- Rekomendasi lagu yang mirip dengan selera pengguna
- Playlist personal yang relevan

🎵 Bonus:
- Pengguna dapat **menambahkan lagu langsung ke library Spotify**

---

### ▶️ Interactive Spotify Player
- Embedded player untuk memutar cuplikan lagu langsung di aplikasi

---

### 🌙 Modern & Responsive UI
- Desain dark mode elegan
- Terinspirasi dari Spotify
- Responsif di desktop & mobile

---

## 🚀 Teknologi yang Digunakan

| Bagian     | Teknologi |
|------------|----------|
| Backend    | FastAPI (Python) |
| Frontend   | HTML5, CSS3, Vanilla JavaScript |
| AI Model   | Google Gemini AI |
| AI Music   | CNN + LSTM (MFCC Feature Extraction) |
| API        | Spotify Web API (Spotipy) |
| Server     | Uvicorn |

---

## 🔑 Cara Mendapatkan API Key

### 1. Spotify Web API

1. Buka: https://developer.spotify.com/dashboard  
2. Login dengan akun Spotify  
3. Klik **Create App**  
4. Isi nama & deskripsi aplikasi  
5. Tambahkan Redirect URI:  
```

[http://localhost:8000/callback](http://localhost:8000/callback)

````
6. Ambil:
- Client ID
- Client Secret

---

### 2. Google Gemini AI API

1. Kunjungi: https://aistudio.google.com  
2. Klik **Get API Key**  
3. Pilih **Create API key in new project**  
4. Simpan API Key

---

## 🛠️ Instalasi & Persiapan

### 1. Prasyarat

- Python 3.8+
- Git

---

### 2. Clone Repository

```bash
git clone https://github.com/username/yourmusic-personality.git
cd yourmusic-personality
````

---

### 3. Setup Virtual Environment

```bash
# Membuat virtual environment
python -m venv venv

# Aktifkan (Windows)
venv\Scripts\activate

# Aktifkan (Mac/Linux)
source venv/bin/activate
```

---

### 4. Install Dependencies

```bash
pip install fastapi uvicorn spotipy google-generativeai python-dotenv
```

---

### 5. Konfigurasi Environment (.env)

Buat file `.env` di root project:

```env
SPOTIPY_CLIENT_ID='GANTI_DENGAN_CLIENT_ID_SPOTIFY'
SPOTIPY_CLIENT_SECRET='GANTI_DENGAN_CLIENT_SECRET_SPOTIFY'
SPOTIPY_REDIRECT_URI='http://localhost:8000/callback'
GEMINI_API_KEY='GANTI_DENGAN_API_KEY_GEMINI'
```

⚠️ **PENTING:**
Jangan pernah upload file `.env` ke GitHub.
File ini sudah masuk `.gitignore` untuk keamanan.

---
<!-- Disini nanti isinya integrasi arsitektur CNN LSTM, isinya tentang untuk menginstal library pip install librosa numpy tensorflow scikit-learn-->

## 🏃 Menjalankan Aplikasi

### 1. Jalankan Backend

```bash
uvicorn main:app --reload
```

---

### 2. Jalankan Frontend

Buka `index.html` dengan Live Server di VS Code:

* Klik kanan file → **Open with Live Server**

---

### 3. Mulai Analisis

1. Klik tombol **"Analyze My Personality"**
2. Login & otorisasi Spotify
3. Tunggu hasil analisis dari AI 🎶

---
<!-- INI NANTI DIISI SAMA STRUKTUR PROJECT -->

## 🎯 Tujuan Proyek

Project ini dibuat untuk:

* Eksplorasi integrasi AI dalam aplikasi web
* Pembelajaran full-stack development
* Eksperimen analisis psikologi berbasis musik

---

## ⚠️ Disclaimer

Aplikasi ini bersifat **eksperimental dan edukatif**.
Hasil analisis AI tidak dapat dijadikan sebagai diagnosis psikologis profesional.

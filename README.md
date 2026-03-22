# 🎶 YourMusic Personality App

**YourMusic Personality App** adalah aplikasi web full-stack inovatif yang menganalisis kepribadian pengguna berdasarkan kebiasaan mendengarkan musik di Spotify.  

Aplikasi ini tidak hanya menampilkan daftar lagu, tetapi juga bertindak sebagai **“Psikolog Musik” digital** yang memberikan narasi mendalam tentang karakter, suasana hati, dan wawasan psikologis pengguna melalui integrasi AI.

---

## ✨ Fitur Utama

- 🎧 **Integrasi Spotify Real-Time**  
  Menghubungkan akun Spotify secara aman untuk mengambil data *Top Tracks* pengguna.

- 🧠 **Analisis Kepribadian AI**  
  Menggunakan Google Gemini AI untuk menganalisis lirik dan genre lagu, lalu menghasilkan deskripsi kepribadian yang puitis dan mendalam.

- ▶️ **Interactive Spotify Player**  
  Embedded player untuk mendengarkan cuplikan lagu langsung di dalam aplikasi.

- 🌙 **Modern & Responsive UI**  
  Desain elegan dengan *Dark Mode*, terinspirasi dari Spotify, dan responsif di semua perangkat.

---

## 🚀 Teknologi yang Digunakan

| Bagian     | Teknologi |
|------------|----------|
| Backend    | FastAPI (Python) |
| Frontend   | HTML5, CSS3, Vanilla JavaScript |
| AI Model   | Google Gemini AI |
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

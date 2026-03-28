try:
    import tensorflow as tf
    import google.generativeai as genai
    print("Aman! TensorFlow & GenAI bisa dipanggil.")
except Exception as e:
    print("Masih Error:", e)
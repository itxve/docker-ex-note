import time, os


os.makedirs("out", exist_ok=True)
with open("out/client.txt", "+w") as f:
    f.write(f"{os.getenv('module')}, {time.asctime()}")

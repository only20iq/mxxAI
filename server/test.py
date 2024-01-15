import websockets
import asyncio
import ssl

# Sunucu URL'si
url = "ws://localhost:8000"

# SSL bağlamı oluşturma
# ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
# ssl_context.check_hostname = False
# ssl_context.verify_mode = ssl.CERT_NONE
# ssl_context.load_verify_locations("crt.pem")

async def connect():
    try:
        # url = input("Enter the server URL: ")
        # websocket = await websockets.connect(url, ssl=ssl_context)
        websocket = await websockets.connect(url)
        print(f"Websocket bağlantısı başarılı: {url}")
        # asyncio görevlerini oluşturma
        send_task = asyncio.create_task(send(websocket))
        receive_task = asyncio.create_task(receive(websocket))
        # asyncio görevlerini bekletme
        await send_task
        await receive_task
    except websockets.exceptions.ConnectionClosed as e:
        print(f"Websocket bağlantısı kapandı: {e.reason} ({e.code})")

async def receive(websocket):
    try:
        while True:
            message = await websocket.recv()
            print(f"Sunucudan gelen mesaj: {message}")
    except websockets.exceptions.ConnectionClosed as e:
        print(f"Websocket bağlantısı kapandı: {e.reason} ({e.code})")

async def send(websocket):
    try:
        while True: # while döngüsü ekle
            message = await asyncio.get_event_loop().run_in_executor(None, input, "") # input fonksiyonunu asenkron olarak çalıştır
            await websocket.send(message)
            print(f"Sunucuya gönderilen mesaj: {message}")
    except websockets.exceptions.ConnectionClosed as e:
        print(f"Websocket bağlantısı kapandı: {e.reason} ({e.code})")


asyncio.get_event_loop().run_until_complete(connect())

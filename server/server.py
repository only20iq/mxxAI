import websockets
import asyncio
import websockets.exceptions
import hashlib
import ssl
import pathlib


#Sunucu adresi ve port numarası belirleme
HOST = "localhost"
PORT = 8000

# SSL bağlamı oluşturma
# ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
# ssl_context.verify_mode = ssl.CERT_NONE
# ssl_context.load_verify_locations("crt.pem")
# ssl_context.load_cert_chain("crt.pem", "key.pem")
# ssl_context.check_hostname = False


#Bağlı olan istemcileri tutan küme
connected = set()

#Sunucudan gelen mesajları işleyen fonksiyon
async def handler(websocket, path):
    #İstemciyi bağlı olan küme içine ekleme
    connected.add(websocket)
    user_id = hashlib.md5(str(websocket).encode('utf-8')).hexdigest()
    websockets.broadcast(connected, "(+) " + user_id)
    #Bağlantı açık olduğu sürece
    while True:
        #Hata oluşabileceği durumlar için try bloğu
        try:
            #Mesajı almak
            message = await websocket.recv()
            #Mesajı ekrana yazdırmak
            print(f"Sunucudan gelen mesaj: {message}")
            #Mesajı bağlı olan tüm istemcilere göndermek
            await broadcast(connected, message, websocket)
            #Hata oluştuğunda except bloğu
        except websockets.exceptions.ConnectionClosedError as e:
            #Bağlantıyı kapatmak
            await websocket.close()
            #İstemciyi bağlı olan kümeden çıkarma
            connected.remove(websocket)
            #Döngüden çıkmak
            websockets.broadcast(connected, "(-) " + user_id + " A1")
            break
        except websockets.exceptions.ConnectionClosedOK:
            #Bağlantıyı kapatmak
            await websocket.close()
            #İstemciyi bağlı olan kümeden çıkarma
            connected.remove(websocket)
            #Döngüden çıkmak
            websockets.broadcast(connected, "(-) " + user_id + " A2")
            break


#Bağlı olan tüm istemcilere mesaj gönderen fonksiyon
async def broadcast(connected, message, sender=None):
    #Kümedeki her WebSocket bağlantısı için
    for websocket in connected:
        if sender == websocket:
            continue
        #Hata oluşabileceği durumlar için try bloğu
        try:
            #Mesajı göndermek
            await websocket.send(message)
        #Hata oluştuğunda except bloğu
        except websockets.exceptions.ConnectionClosedError as e:
            await websocket.close()
            connected.remove(websocket)
            websockets.broadcast(connected, "(-) " + user_id + " B1")
        except websockets.exceptions.ConnectionClosedOK:
            await websocket.close()
            connected.remove(websocket)
            websockets.broadcast(connected, "(-) " + user_id + " B2")


#Sunucuyu başlatma
# start_server = websockets.serve(handler, HOST, PORT, ssl=ssl_context)
start_server = websockets.serve(handler, HOST, PORT)
asyncio.get_event_loop().run_until_complete(start_server)
try:
    asyncio.get_event_loop().run_forever()
except KeyboardInterrupt:
    # Perform some cleanup actions here
    print("Shutting down gracefully...")

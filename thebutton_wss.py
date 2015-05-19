from websocket import create_connection
import json
ws = create_connection("wss://wss.redditmedia.com/thebutton?h=f3bb7d12a0339f9f61085b9b3be63fa1bb4aa309&e=1429411732")
while True:
	result =  ws.recv()
	result = json.loads(result)
	print result['payload']['seconds_left']

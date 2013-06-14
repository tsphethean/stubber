Stubber - A node.js SOAP Stubber
--------------------------------

Stubber provides an easy to maintain method of stubbing SOAP services.

Todo:
-----
* Create definition library file documenting services, requests and responses for ease of management
    - need to know which response belongs to which request, and what that is designed to simulate
* Create management form for adding new services
    - would generate hash, create file in responses folder, generate definition entry
    - investigate any nice OOP ways to do this
* Create end point which will return the exact request (or log it somewhere) for generating new requests when
  getting raw XML is tricky
* Stub REST services
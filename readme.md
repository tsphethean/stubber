Stubber - A node.js SOAP Stubber
--------------------------------

Stubber provides an easy to maintain method of stubbing SOAP services.

Usage:
------
* Prepare your SOAP request
* Point your SOAP client to http://127.0.0.1:9999/stub-generator (or modify server.js to run on whatever host:port combination you want), and note the hash value return in the response body
* In stubber/public, create a file with the name [hash].xml, with a contents of the desired SOAP response for your service
* Update your SOAP client to point at http://127.0.0.1:9999, make the request, and see the response returned to you

Todo:
-----
* Add example service
* Create definition library file documenting services, requests and responses for ease of management
    - need to know which response belongs to which request, and what that is designed to simulate
* Create management form for adding new services
    - would generate hash, create file in responses folder, generate definition entry
* Create end point which will return the exact request (or log it somewhere) for generating new requests when
  getting raw XML is tricky
* Stub REST services too
* Make endpoint and port a configuration item

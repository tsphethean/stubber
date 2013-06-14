Stubber - A node.js SOAP Stubber
--------------------------------

Stubber provides an easy to maintain method of stubbing SOAP services. It is designed to sit in your test environment and act as
a stub for the services you haven't build yet, the third parties you haven't connected to, or the ones you know don't have the
test data you need.

The idea is simple, for a given SOAP request, respond with a given SOAP response. One endpoint, multiple responses. Easy to add new
responders and easily able to scale.

Usage:
------
* Start node server.js
* Prepare your SOAP request
* Point your SOAP client to http://127.0.0.1:9999/stub-generator (or modify server.js to run on whatever host:port combination you want), and note the hash value return in the response body
* In stubber/public, create a file with the name [hash].xml, with a contents of the desired SOAP response for your service
* Update your SOAP client to point at http://127.0.0.1:9999, make the request, and see the response returned to you


**Note: Whitespace in the SOAP request is currently important, so you may get strange results depending on indentations.
If in doubt, make sure the client you generate the hash from, is the same you'll be using for making the "real" service call.**


Example:
--------
Use the following SOAP request to http://127.0.0.1:9999:

    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
        <soapenv:Header/>
        <soapenv:Body>
          <ExampleService/>
        </soapenv:Body>
    </soapenv:Envelope>

You should see the response from stubber/public/1de54fda8916d82fd4624afc15803d5932d10ad6.xml

Todo:
-----
* Add example service
* Fix potential whitespace issues
* Create definition library file documenting services, requests and responses for ease of management
    - need to know which response belongs to which request, and what that is designed to simulate
* Create management form for adding new services
    - would generate hash, create file in responses folder, generate definition entry
* Create end point which will return the exact request (or log it somewhere) for generating new requests when
  getting raw XML is tricky
* Stub REST services too
* Make endpoint and port a configuration item
* Puppet manifest for deploying Stubber to your target environment
* Load test

SOAP = HTTP + XML
简单的基于XML的协议，通过HTTP传输
需要先了解XML和XML命名空间
允许绕过防火墙
SOAP1.2
SOAP请求可能是GET或POST请求，POST至少有Content-Type和Content-Length

## 语法规则
- 必须用XML编码
- 必须使用 [SOAP Envelope](https://www.w3.org/2001/12/soap-envelope) 命名空间
- 必须使用 [SOAP Encoding](https://www.w3.org/2001/12/soap-encoding) 命名空间
- 不能包含DTD引用
- 不能包含XML处理指令

```xml
<!--
  POST /InStock HTTP/1.1
  Host: www.example.org
  Content-Type: application/soap+xml; charset=utf-8
  Content-Length: nnn
-->
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope" soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding"> <!--必须，标识此为SOAP消息-->
  <soap:Header> <!--可选-->
    <!--默认有actor、mustUnderstand、encodingStyle 属性，定义容器如何处理该消息-->
    <!--mustUnderstanded="0|1"，1表示接收者必须认可此元素-->
    <!--actor="http://..."，表示将Header元素寻址到一个特定的端点-->
    <!--encodingStyle 定义文档中使用的数据类型，此属性出现在任何SOAP中，并会应用到元素的内容及其子元素上，SOAP没有默认的编码方式-->
    <m:Trans xmlns:m="http://www.w3schools.com/transaction/" soap:mustUnderstand="1">234
    </m:Trans>
    <m:Trans xmlns:m="http://www.w3schools.com/transaction/" soap:actor="http://www.w3schools.com/appml/" soap:encodingStyle="URI">234
    </m:Trans>
  </soap:Header>
  <soap:Body xmlns:m="http://www.example.org/stock"> <!--必需，所有的调用和响应消息-->
    <!--Body 元素的直接子元素可以是合格的命名空间-->
    <m:GetStockPrice>
      <m:StockName>IBM</m:StockName>
    </m:GetStockPrice>
    <soap:Fault> <!--可选，必须是Body的子元素，只能出现一次，处理此消息所发生错误的信息-->
      <!--识别故障的代码 VersionMismatch-Envelope元素无效的命名空间被发现，MustUnderstand-Header元素的第一个直接子元素（带有设置为“1”的mustUnderstand属性）无法理解，Client-消息被不正确的构成，或包含了不正确的信息，Server-服务器有问题，因此无法处理进行下去-->
      <soap:faultcode>VersionMismatch</soap:faultcode>
      <!--可供人阅读的有关故障的说明-->
      <soap:faultstring></soap:faultstring>
      <!--谁引发故障的说明-->
      <soap:faultactor></soap:faultactor>
      <!--留存涉及Body元素的应用程序专用错误信息-->
      <soap:detail></soap:detail>
    </soap:Fault>
  </soap:Body>
</soap:Envelope>

<!--
  HTTP/1.1 200 OK
  Content-Type: application/soap+xml; charset=utf-8
  Content-Length: nnn
-->
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
  <soap:Body xmlns:m="http://www.example.org/stock">
    <m:GetStockPriceResponse>
      <m:Price>34.5</m:Price>
    </m:GetStockPriceResponse>
  </soap:Body>
</soap:Envelope>
```
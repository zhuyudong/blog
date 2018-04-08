[WSDL 1.2 语法](http://www.runoob.com/wsdl/wsdl-syntax.html)
## 概述
- 网络描述语言
- 使用XML编写
- 一种XML文档
- 描述网络服务（Web Services）
- 用于定位网络服务
- 还不是W3C标准

```xml
<definitions>
  <!--可被执行的操作以及相关信息-->
  <!--
    one-way 可接收消息，但不会返回响应
    request-response 接受请求并返回响应
    solicit-response  发送请求并等待响应
    notification 发送消息，但不会等待响应
  -->
  <portType name="glossaryTerms">
    <!--属于request-response-->
    <operation name="getTerm">
      <input message="getTermRequest"/>
      <output message="getTermResponse"/>
    </operation>
  </portType>
  <!--使用的数据类型-->
  <types></types>
  <!--操作的数据元素-->
  <message name="getTermRequest">
    <part name="term" type="xs:string"/>
  </message>
  <message name="getTermResponse">
    <part name="value" type="xs:string"/>
  </message>
  <!--为每个端口定义消息格式和协议细节-->
  <binding type="glossaryTerms" name="b1">
    <!--绑定到soap-->
    <!--type可取值document或rpc-->
    <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http" />
    <operation>
      <soap:operation soapAction="http://example.com/getTerm" />
      <!--使用literal对输入输出进行编码-->
      <input><soap:body use="literal"/></input>
      <output><soap:body use="literal"/></output>
    </operation>
  </binding>
</definitions>
```

### UDDI（Universal Description，Discovery and Integation）通用描述、发现与集成服务
- 存储有关web services 信息的目录
- 由WSDL描述的 web services 界面的目录
- 经由SOAP进行通信
- 被构建入了.NET平台

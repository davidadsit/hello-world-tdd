var assert = buster.assert;

buster.testCase("hello world", {

  "send hello world to the printer": function () {
    buster.assert(true) // buster bug
    var mockPrinter = sinon.mock(printer)
    mockPrinter.expects("print").withArgs("hello world").once()

    helloWorld.greet()

    mockPrinter.verify()
    mockPrinter.restore()
  }

});

buster.testCase("printer tests", {
  
  "print sends the message to console.log": function () {

  }

});

var assert = buster.assert;

var foo = {
  method1: function () {
    console.log("method1 called")
    return "method1 result"
  }
}

buster.testCase("learning about buster and sinon", {
  setUp: function () {
  },

  tearDown: function () {
  },

  "equals uses type coercion": function () {
    assert.equals("1", 1);
  },

  "stubs return a value": function () {
    sinon.stub(foo, "method1").returns("methodx result")

    console.log("calling the stubbed method: foo.method1()")
    assert.equals("methodx result", foo.method1())
  
    console.log("restoring the stubbed method: foo.method1()")
    foo.method1.restore()

    console.log("calling the real method: foo.method1()")
    assert.equals("method1 result", foo.method1())

    //Look at the console window in your browser.
  },

  "mocks track interactions": function () {
    buster.assert(true) // work around for buster bug that affects sinon mocks
    var mockFoo = sinon.mock(foo)

    mockFoo.expects("method1").once()

    console.log("calling the mocked method: foo.method1()")
    foo.method1()

    mockFoo.verify()
  
    console.log("restoring the mocked object: foo")
    mockFoo.restore()

    console.log("calling the real method: foo.method1()")
    assert.equals("method1 result", foo.method1())

    //Look at the console window in your browser.
  }

});


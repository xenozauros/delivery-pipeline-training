hello = require('../src/app.js')

describe('app', function(){
  it('test',function(){
    expect(hello()).toBe('Hello devops')
  })
})


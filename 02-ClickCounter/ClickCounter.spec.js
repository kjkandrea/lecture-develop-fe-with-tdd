describe('App.ClickCounter', ()=> {
  let counter
  beforeEach(()=> {
    counter = App.ClickCounter()
  })

  describe('getCounter()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      expect(counter.getValue()).toBe(0) // getValue의 값이 0이라는 것을 검증
    })
  })

  describe('increase()', ()=> {
    it('카운터를 1 올린다.', () => {
      counter.increase()
      expect(counter.getValue()).toBe(1)
    })
  })
})
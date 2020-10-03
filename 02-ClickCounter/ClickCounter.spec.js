describe('App.ClickCounter', ()=> {
  describe('getCounter()', ()=> {
    it('초기값이 0인 카운터 값을 반환한다', ()=> {
      const counter = App.ClickCounter()
      expect(counter.getValue()).toBe(0) // getValue의 값이 0이라는 것을 검증
    })
  })
})
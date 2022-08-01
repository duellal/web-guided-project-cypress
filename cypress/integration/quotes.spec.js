// write tests here
describe('Quotes app', () => {
   //Our tests go here
   beforeEach(() => {
      //arbitrary code we want running before the tests run
      cy.visit('http://localhost:1234')
   })
   //Tests:
   it('sanity test - making sure tests work', () => {
      expect(1 + 2).to.equal(3)
   })
})


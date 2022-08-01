// write tests here
describe('Quotes app', () => {
   //Our tests go here
   beforeEach(() => {
      //arbitrary code we want running before the tests run
      cy.visit('http://localhost:1234')
   });

   //Tests:
   it('sanity test - making sure tests work', () => {
      //'expect' is an assertion
      //there can be many assertions for each test inside the 'it' statement
      //usually the assertions are logically grouped together
      expect(1 + 2).to.equal(3)
      expect(2 + 3).not.to.equal(6)
      expect({}).not.to.equal({}) //not strict equality ==
      //.equal() === .eql()
      expect({}).to.eql({}) //strict equality ===
   });

   it('playing - selecting elements from the dom', () => {
      cy.get('input[name="text"]').should('exist');
      cy.get('input[name=foobar]').should('not.exist')
   });

   //Grab 3 things - my code:
   //second input - author name input
   //submit quote button
   //cancel button
   it('grabbing elements from dom alone', () => {
      cy.get('input[name="author"').should('exist');
      cy.get('button[id="submitBtn"]').should('exist');
      cy.get('button[id="cancelBtn"]').should('exist');
   });

   //Class Code:
   it('grabbing elements from dom class', () => {
      cy.get('input[name="author"]').should('exist')
      cy.get('button[id="submitBtn"]').should('exist');
      cy.get('button[id="cancelBtn"]').should('exist')
      //Two ways to do .contains():
      //Case Sensitive
      cy.contains('Submit Quote');
      //Not Case Sensitive
      cy.contains(/submit quote/i)
   })

   //Checking typed inputs
   it('can type inputs', () => {
      //grab inputs -> assert that they're empty -> type in them -> assert the typed input is there
      cy.get('input[name="text"]').should("have.value", "")
      cy.get('input[name="text"]').type("have fun learning")
   })
});


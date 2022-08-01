// write tests here
describe('Quotes app', () => {
   //Our tests go here
   beforeEach(() => {
      //arbitrary code we want running before the tests run
      cy.visit('http://localhost:1234')
   });

   //making functions to make code DRY:
   //making functions b/c functions grab "the latest"
   //the function order DOES matter - you should make functions based on what you think the user will do first
   const textInput = () => cy.get('input[name="text"]')
   const authorInput = () => cy.get('input[name="author"]')
   const submitButton = () => cy.get('button[id="submitBtn"]')
   const cancelButton = () => cy.get('button[id="cancelBtn"]')

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
      submitButton().should('exist');
      cancelButton().should('exist')
      //Two ways to do .contains():
      //Case Sensitive
      cy.contains('Submit Quote');
      //Not Case Sensitive
      cy.contains(/submit quote/i)
      cy.get('button[id="cancelBtn"]').should('exist').contains(/cancel/i)
   })

   //Checking typed inputs
   it('can type inputs', () => {
      //grab inputs -> assert that they're empty -> type in them -> assert the typed input is there
      cy.get('input[name="text"]').should("have.value", "")
      cy.get('input[name="text"]').type("have fun learning")
      cy.get('input[name="text"]').should('have.value', "have fun learning")
   })

   //DRY + clean code for checking inputs:
   it('DRY code for above tests', () => {
      cy.get('input[name="text"]')
         .should("have.value", "")
         .type("have fun learning")
         .should('have.value', 'have fun learning')

      cy.get('input[name="author"]')
         .should('have.value', '')
         .type('firstName lastName')
         .should('have.value', 'firstName lastName')
   });

   //DRYer code for above:
   //made functions (at top) to make code easier to read
   //need to invoke the functions (function()) in order for it to work
   it('DRYer code for above p.2', () => {
      textInput()
         .should("have.value", "")
         .type("have fun learning")
         .should('have.value', 'have fun learning')

      authorInput()
         .should('have.value', '')
         .type('firstName lastName')
         .should('have.value', 'firstName lastName')
   });

   it('Mine: submit button is disabled until inputs are filled', () => {
      //arrange: set up, sanity checks - make sure initial state is the state expected
      //act: (like typing or clicking - mimicking user inpute)
      //assert: the action has the effect we expect

      //My Code:
      submitButton()
         .should('have.prop', 'disabled', true)
         .click(
            textInput()
               .type('Words are hard'),
            authorInput()
               .type('Evan + Katelyn')
         )
         .should('have.prop', 'disabled', false)
   })

   it('Class: submit button is disabled until inputs are filled', () => {
      //arrange: set up, sanity checks - make sure initial state is the state expected
      //act: (like typing or clicking - mimicking user inpute)
      //assert: the action has the effect we expect

      //Class Code:
      submitButton()
         .should('be.disabled')

      textInput()
         .type('Words are hard')

      submitButton()
         .should('be.disabled')

      textInput()
         .clear()

      authorInput()
         .type('Evan + Katelyn')

      submitButton()
         .should('be.disabled')

      textInput()
         .type('Words are hard')

      submitButton()
         .should('not.be.disabled')
   });

   it('Mine: cancel button = cancel quote', () => {
      cancelButton()
         .should('not.be.disabled')

      textInput()
         .type('Words are hard')

      cancelButton()
         .clear(textInput())

      authorInput()
         .type('Evan + Katelyn')

      cancelButton()
         .clear(authorInput())

      textInput()
         .type('Words are hard')

      authorInput()
         .type('Evan + Katelyn')

      cancelButton()
         .clear(textInput())
   })

   it('Class: cancel button = cancel quote', () => {
      textInput()
         .type('Words are very hard')

      authorInput()
         .type('A Duell')

      cancelButton()
         .click()

      textInput()
         .should('have.value', "")

      authorInput()
         .should('have.value', "")

   });

   it('submit new quote', () => {
      //Arrange: text input is not in DOM
      //Act: Create new quote ('text input (author input)')
      //Assert: above quote is now in DOM
      cy.contains('text input (author input)').should('not.exist')

      textInput()
         .type('text input')

      authorInput()
         .type('author input')

      submitButton()
         .click()

      cy.contains('text input (author input)').should('exist')
   })
});


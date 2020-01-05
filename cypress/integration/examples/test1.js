// /<reference types="Cypress" />
describe('My First Test', function() {
    it('Login', function() {
        var i =0; 
     cy.visit("http://opencart.abstracta.us/")
   cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click()
   cy.get('#search > .form-control').type('zxz')
   cy.get('.input-group-btn > .btn').click()
   cy.get('#description').click()
   cy.get('#content > :nth-child(7)').should('have.text', 'There is no product that matches the search criteria.')
   cy.go('back')
   cy.get('#input-quantity').clear().type('3')   
   cy.get('#button-cart').click().then(function()
  { cy.get('#cart-total')
   .then((element) => {
     cy.log(element.text())
  })
})
   
   var cost
   var price
 

          

            cy.get('#content').find('.col-sm-4').find('.list-unstyled>li>h2')
            .then((element) => {
              cy.log(element.text())
            })
cy.contains('Add to Cart').click()
            
             
    })
    })
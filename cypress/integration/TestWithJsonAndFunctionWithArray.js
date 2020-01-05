///<reference types="Cypress" />
describe('My First Test', function() {
   
    before(function() {
        cy.fixture('JsonOfTestWithJsonAndFunctionWithArray').then(function(data)
       { this.data=data
       })

    })
   
   
   
    it('AddToCard', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop1')
    cy.log(this.data.productName[0])
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    }
    )
    })
})
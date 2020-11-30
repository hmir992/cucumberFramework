Feature: As a Ryanair user I login, attempt to make book a flight and payment is declined
		@test1
  	Scenario Outline: Login into Ryanair, Book a flight, enter invalid card information and payment is declined
    Given I make a booking from DUB to BER on 12/03/2020 for 2 adults and 1 child
    When I pay for booking with card details "<cardNumber>" , 10/21 and "<cvv>"
    Then I should get payment declined message
		
 	Examples:
	 | cardNumber 					| cvv	|
	 | 5555 5555 5555 5557  | 265 |
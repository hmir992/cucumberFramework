Feature: As a Ryanair user I do not login and attempt to make book a flight login popup is displayed
  
  	@test2
  	Scenario: Book a flight, without Logging into RyanAir and assert login popup
    Given I make a booking from DUB to BER on 12/03/2020 for 2 adults and 1 child
    Then I should get the login required popup
  
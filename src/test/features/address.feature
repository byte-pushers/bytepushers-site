Feature: Address feature
        In order to test Address
        As a client
        I will sample Address

        Scenario: create & init address
                Given a sample address
                When I generate generate a toJSON
                Then the results should not be null

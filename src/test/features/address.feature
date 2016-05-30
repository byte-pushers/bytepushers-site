Feature: Address feature
        In order to test Address
        As a developer
        I will sample Address

        Scenario: create & init address
                Given a sample address
                When I generate generate an address toJSON
                Then the results should equal given address JSON string

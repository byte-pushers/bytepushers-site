Feature: Inquiry feature
        In order to test Inquiry
        As a developer
        I will sample Inquiry

        Scenario: create & init inquiry
                Given a sample inquiry
                When I generate generate an inquiry toJSON
                Then the results should equal given inquiry JSON string

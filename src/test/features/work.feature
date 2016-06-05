Feature: Work Feature
        In order to test Work obj
        As a developer
        I will create a sample obj

        Scenario: test toJSON function
                Given a work object
                When I generate a JSON string
                Then it should equal the given JSON string

Feature: user functions
  This is the tests for the users throughout the site
  Controls the different privileges

  Scenario: add using to the system
    Given there is no general user on the system
    When I go to /admin/accounts/add
    Then add user details
    And page saves

  Scenario: use user to login to system
    Given there is a user in the database
    When go to /login
    Then submit the user details
    Then get the correct token back

  Scenario: check for wrong user sign in
    Given there is a user in the database
    When go to /login
    Then submit the user details
    Then get an error

  Scenario: Use the user token to get the user information
    Given there is a user in the database
    When submit token to /user
    Then the return has user first and last name
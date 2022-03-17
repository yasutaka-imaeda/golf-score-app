// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("sample-test", () => {
  let testUser;
  beforeEach(function() {
    cy.fixture("user").then(function(userjson) {
      testUser = userjson;
    });
  });

  it("Signin", () => {
    cy.visit("http://localhost:3000", { responseTimeout: 3000 });
    cy.wait(1000);
    cy.url({ timeout: 6000 }).should("include", "/localhost");
  });
});

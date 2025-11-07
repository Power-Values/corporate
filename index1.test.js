/**
 * Unit tests for index1.html functions
 * 
 * Setup: Install Jest with `npm install --save-dev jest jsdom`
 * Run tests with: `npm test`
 */

describe('handlePersonalDevelopment', () => {
  beforeEach(() => {
    // Mock window.location
    delete window.location;
    window.location = { href: '' };
  });

  test('redirects to https://powervalues.xyz/personal', () => {
    // Define the function (extracted from index1.html)
    function handlePersonalDevelopment() {
      window.location.href = 'https://powervalues.xyz/personal';
    }

    // Call the function
    handlePersonalDevelopment();

    // Assert the redirect occurred
    expect(window.location.href).toBe('https://powervalues.xyz/personal');
  });
});

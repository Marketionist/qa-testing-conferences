const { checkFile, } = require('img-link-checker');

(async () => {
    const brokenLinks = await checkFile(
        './README.md',
        /* eslint-disable max-len */
        ['https://stareast.techwell.com/', 'https://starwest.techwell.com/',]
        /* eslint-enable max-len */
    );

    // Print a list of broken links and exit the process (will mark the CI/CD build as failed)
    if (brokenLinks.length > 0) {
        console.error('Broken links list:', brokenLinks);
        process.exit(1);
    }
})();

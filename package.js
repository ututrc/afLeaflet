Package.describe({
    name: 'ututrc:autoform-leaflet',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Provides an AutoForm input field for geolocation using Leaflet.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/ututrc/afLeaflet',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use([
        'templating',
        'aldeed:autoform@5.6.0',
        'bevanhunt:leaflet@1.3.1',
        'appshore:leaflet-awesome-markers@1.0.3',
    ], 'client');

    api.addFiles([
        'configuration.js',
        'templates.html',
        'styles.css',
        'client.js',
    ], 'client');
});

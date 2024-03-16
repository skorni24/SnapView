const NodeGeocoder = require('node-geocoder');
const HttpError = require('../models/http-error');

const options = {
    provider: 'openstreetmap'
};

const geocoder = NodeGeocoder(options);

async function getLocation(address) {
    try {
        const res = await geocoder.geocode(address);
        if (res && res.length > 0) {
            const coordinates = {
                latitude: res[0].latitude,
                longitude: res[0].longitude
            };
            return coordinates;
        } else {
            throw new HttpError('Could not find location for the specified address', 422);
        }
    } catch (error) {
        console.error('Error during geocoding:', error);
        throw new HttpError('Could not find location for the specified address', 422);
    }
}

module.exports = getLocation;

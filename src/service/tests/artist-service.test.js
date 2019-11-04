const artistController = require('../../controllers/artist-controller');
const artistService = require('../artist-service');
const artist = require('../../models/Artist');
const mongoose = require('mongoose');

describe("findAll", () => {
    test("should call findAll from mongoose", () => {
    // arrange
    artist.findAll = jest.fn(() => [])
    // act
    artistService.findAll()
    // assert
    expect(artist.findAll).toHaveBeenCalledTimes(1)
    })
})
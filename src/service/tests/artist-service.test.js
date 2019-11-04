const artistController = require('../../controllers/artist-controller');
const artist = require('../../models/Artist');

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
const albumController = require('../../controllers/album-controller');
const album = require('../../models/Album');

describe("getAllAlbums", () => {
    test("should call getAllAlbums from mongoose", () => {
    //arrange
    album.getAllAlbums = jest.fn(() => [])
    //act
    albumService.getAllAlbums()   
    //assert
    expect(album.getAllAlbums).toHaveBeCalledTimes(1)
    })
})
const artistController = require('../artist-controller');
const artistService = require('../../service/artist-service');

describe("artistController", () => {
    test("addNewArtist should be called once", async () => {
    //arrange
    const requestMock = {body: {name: ""}}
    const responseMock = {
        render: jest.fn(),
        redirect: jest.fn()
    };
    artistService.addNewArtist = jest.fn ();
    //act
    await artistController.addNewArtist(requestMock, responseMock);
    //assert
    expect(responseMock.render).toHaveBeenCalledWith("/artist");
    })
})
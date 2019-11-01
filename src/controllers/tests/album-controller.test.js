const albumController = require('../album-controller');
const albumService = require('../service/album-service');

describe("albumController", () => {
    test("addNewAlbum should be adding new albums", async () => {
        //arrange
        const requestMock = {body: {title:"", genre:"", year: "" }}
        const responseMock = {
            render: jest.fn(),
            redirect: jest.fn()
        };
        albumService.addNewAlbum = jest.fn ();
    
        //act
        await albumController.addNewAlbum(requestMock, responseMock);
        
        //assert
        expect(responseMock.render).toHaveBeenCalledTimes(1);
    });
})
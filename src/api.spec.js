import * as apiModule from "./api";
import axios from 'axios'

jest.mock('axios', () => ({
    ...jest.requireActual('axios'),
    get: jest.fn(() => Promise.resolve([{type: 1, name: 'product 1'}]))
}))


describe('api.js', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    it('should call axios.get with the expected valeus', () => {
        const expectedUrl = 'https://qa-registry-interview-api.regsvcs.theknot.com/test-products';
        const expectedParams = {'name': 'TKWW ultimate wedding software'};
        apiModule.apiGet({endpoint:'/test-products', params: { ...expectedParams}});
        expect(axios.get).toHaveBeenCalledWith(expectedUrl, expectedParams);
    })
});
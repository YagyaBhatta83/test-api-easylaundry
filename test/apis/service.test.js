const axios = require('axios');
const baseurl = 'http://localhost:3000/services';

describe('servicesAPI', () => {
    let services;
    test('Post a service', async () => {
        let cat = await axios.post(baseurl, {
            'name': 'wash and fold'
        })
        expect(cat.data.name).toBe('wash and fold')
    })
})
var faker = require('faker')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '40404441404',
            email: faker.internet.email(firstName),
            whatsapp: '11974584058',
            address: {
                postalcode: '09888400',
                street: 'Rua Daniel Berg',
                number: '590',
                details: 'ap 7',
                district: 'Vila Erasmo',
                city_state: 'Santo André/SP'
            },
            delivery_method: 'Moto',
            cnh: 'download (32).jpg' 
        }   

        return data
        
    }

}

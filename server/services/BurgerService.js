import { BadRequest } from '../utils/Errors'

const BurgerList = {
  Burgers: [
    {
      name: 'Big Boy Double (Eat if you dare!!!!)',
      id: '0'
    },
    {
      name: 'Small lad single (for the small)',
      id: '1'
    },
    {
      name: 'Huge DOUBLE DECKER EXTREME!!!!!!',
      id: '2'
    },
    {
      name: 'GIGA CHAD BURGER (ONLY FOR THOSE WHOS JAWS ARE UNHINGEABLE)',
      id: '3'
    }
  ]
}

class BurgerService {
  async getBurgers() {
    const burgers = await BurgerList.Burgers
    return burgers
  }

  async CreateBurger(BurgerDetails) {
    BurgerDetails.id = BurgerList.Burgers.length.toString()
    await BurgerList.Burgers.push(BurgerDetails)
    return BurgerDetails
  }

  async EditBurger(id, updatedBurger) {
    const burgerIndex = await BurgerList.Burgers.findIndex(b => b.id === id)
    if (burgerIndex === -1) {
      throw new BadRequest('MMMMM NO')
    }
    BurgerList.Burgers.splice(burgerIndex, 1)
    return burgerIndex
  }
}

export const burgerService = new BurgerService()

import { Router } from 'express'

const router = Router()

const foods = [
    { name: 'Coca-Cola', price: 850 },
    { name: 'Pepsi', price: 450 },
    { name: 'Papas Lays', price: 820 },
    { name: 'Doritos', price: 790 },
    { name: 'Tabaco', price: 1200 },
]

const user = {
    name: 'Jesus',
    lastname: 'Malamute',
    role: 'admin'
}

router.get('/', (req, res) => {
    res.render('foods', {
        user,
        isAdmin: user.role == 'admin' ? true : false,
        foods
    })
})

export default router
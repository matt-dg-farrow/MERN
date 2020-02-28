const router = require('express').Router();
const bodyParser = require('body-parser');

const name = ['M', 'A', 'T', 'T'];

router.use((req,res,next) => {
    let time = new Date();
    console.log(time);
    next();
})

router.get('/', (req,res) => res.send('hello, my name is matt'));

router.delete('/delete/:id' , (req,res) =>{
    res.send(names.splice(req.params.id, 1));
    res.status(200);
})

router.post('/create' , (req,res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`)
})

router.patch('/update', (req,res) => {
    req.query.name;
})

module.exports = router;
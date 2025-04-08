import express from 'express'; //Esmodules

const router = express.Router() //creamos un router

router.get('/', (_req, res) =>{
    res.send('Fetching all entry diaries')
})

router.post('/',(_req, res) =>{
    res.send('Saving a diary')
})

export default router
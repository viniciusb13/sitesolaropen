const router = require('express').Router()
const Device = require('../models/Devices')

router.get('/', async (req, res)=>{
    try{
        const listaDevices = await Device.find()
        res.json({
            success: true,
            message: listaDevices
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível listar os devices."
        })
    }
})

router.get('/:email', async (req,res)=>{
    try{
        //findOne().sort({ field: -_id })
        const listaMedidas = await Device.find({email: req.params.email})
        res.json({
            success: true,
            message: listaMedidas
        })
    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }

})


router.get('/detalhes/:id', async (req,res)=>{
    try{
        const deviceId = await Device.findById({
            _id: req.params.id
        });
        res.json({
            success: true,
            message: deviceId
        })
    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

//Atualiza um único registro com base no id
router.patch('/:id', async (req,res)=>{
    try{
        const updateMedidasId = await Device.updateOne(
            {_id: req.params.id},
            {nome: req.body.nome,
            descricao: req.body.descricao,
            imagem: req.body.imagem}
        )
        res.json({
            success: true,
            updated: updateMedidasId.nModified
        })

    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

router.post('/send', (req, res)=>{
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem
    require('../nodemail')(nome, email, mensagem)
        .then(response => res.json(response))
        .catch(error => res.json(error))
})

router.post('/', async (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        email: req.body.email,
        descricao: req.body.descricao,
        imagem: req.body.imagem
        //medidas: req.body.medidas
        // kwh: req.body.kwh,
        // corrente: req.body.corrente,
        // voltagem: req.body.voltagem,
        // fp: req.body.fp
    })
    try{
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNovoDevice
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar o novo device."
        })
    }
})

/*
A rota put é utilizada para receber as atualizações do valor medido pelo device.
Neste caso o valor medido se refere ao kwh, voltagem, corrente e fp.
As demais rotas são utilizadas pelo código de administração do sistema.
const updatePerioId = await Perio.updateOne({_id: req.params.id},{$push: {medidas: req.body.medidas}}
*/ 
router.put('/:id', async (req,res)=>{
    try{
        const updateDeviceId = await Device.updateOne({_id: req.params.id},{$push: {medidas: req.body.medidas}}
        )
        res.json({
            success: true,
            updated: updateDeviceId.nModified
        })

    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

//Deleta um único registro com base no id
router.delete('/:id', async (req,res)=>{
    try{
        const deleteMedidasId = await Device.deleteOne({
            _id: req.params.id   
        });
        res.json({
            success: true,
            data: deleteMedidasId
        })
    }catch(err){
        res.json({
            success: false,
            data: err
        })
    }
})

module.exports = router

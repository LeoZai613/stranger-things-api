const express = require('express')
const app = express()
const PORT = 8000



const characters = {
    'mike': {
        'maxDamage': 1,
        'attack': 'Flashlight (stuns enemies)',
        'special': ' Bike (jump ramps, fast travel)',
        'characterUpgrade': ' CamoBackpack (each upgrade increases carry capacity by 25)',
    },
    'hopper': {
        'maxDamage': 2,
        'attack': 'Super Punch (deals extra knockback)',
        'special': 'Can charge at full health',
        'characterUpgrade': ' CanadianTuxedo (gives Hopper +1 Damage and 1+ Charge at full health)',
    },
    'lucas': {
        'maxDamage': 1,
        'attack': 'Wrist Rocked (ranged attack)',
        'special': 'Deals double damage at full health',
       'characterUpgrade': ' CamoBackpack (each upgrade increases carry capacity by 25)',
    },

    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const charactersName = request.params.name.toLowerCase()

    if(characters[charactersName] ){
        response.json(characters[charactersName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
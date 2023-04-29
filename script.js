

const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    

    // STARTING EXAMPLES //
    // const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    // const pkmnIds = pokémon.map(p => p.id);
    // console.log(bListPkmn)
    // console.log(pkmnIds)



    // RETURN OBJECTS WITH /3 IDs //  DONE!
    // const div3Id = pokémon.filter(pokémon => pokémon.id % 3 === 0)
    // console.log(div3Id)



    // RETURN OBJECTS WITH "FIRE" TYPE //  DONE!
    // const fireType = pokémon.filter(pokémon => pokémon.types.includes ('fire'))
    // console.log(fireType)



    // OBJECTS WITH MORE THAN ONE TYPE //  DONE!
    // const multipleTypes = pokémon.filter(pokémon => pokémon.types[1])
    // console.log(multipleTypes)



    // JUST THE POKEMON NAMES //  DONE!
    // const namesOnly = pokémon.map(pokémon => pokémon.name);
    // console.log(namesOnly)



    // JUST NAMES OF POKEMON WITH IDs GREATER THAN 99 //  DONE!
    // const biggerThan99 = pokémon.filter(pokémon => pokémon.id > 99)
    // console.log(biggerThan99)
    


    // JUST NAMES OF POKEMON WHOSE ONLY TYPE IS POISON //  DONE!
    // const onlyPoisonType = pokémon.filter(pokémon => pokémon.types == 'poison')
    // .map(pokémon => pokémon.name)
    // console.log(onlyPoisonType)



    // JUST THE FIRST TYPE OF ALL POKEMON WHOSE SECOND TYPE IS FLYING //  DONE!
    // const secondTypeFlying = pokémon.filter(pokémon => pokémon.types[1] == 'flying')
    // .map(pokémon => pokémon.types[0])
    // console.log(secondTypeFlying)



    // A COUNT OF THE "NORMAL" TYPE OF POKEMON  //  DONE!
    // const totalNormal = pokémon.filter(pokémon => pokémon.types.includes('normal'))
    // let count = `There are ${totalNormal.length} normal pokemon!`
    // console.log(count)



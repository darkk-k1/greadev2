// Visit the wiki for more info - https://kubejs.com/
console.info('Loading Custom Recipes')

ServerEvents.recipes(event => {
    event.shaped(Item.of('tfmg:hardened_planks', 4), 
        [
        '   ',
        ' AA',
        ' AA'
        ],
        { A: 'immersiveengineering:treated_wood_horizontal'}
    )
    event.shaped(Item.of('immersiveengineering:treated_wood_horizontal', 4), 
        [
        '   ',
        ' AA',
        ' AA'
        ],
        { A: 'tfmg:hardened_planks'}
    )
    event.shaped(Item.of('create_new_age:copper_wire', 4), 
        [
        '   ',
        '  A',
        '  A'
        ],
        { A: 'immersiveengineering:wire_copper' }
    )
    event.shaped(Item.of('immersiveengineering:wire_copper', 1), 
        [
        '   ',
        '  A',
        '  A'
        ],
        { A: 'create_new_age:copper_wire' }
    )




    console.log('Recipes Loaded')
})
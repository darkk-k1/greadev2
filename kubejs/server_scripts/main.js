// Visit the wiki for more info - https://kubejs.com/
console.info('Loading Custom Recipes')

ServerEvents.recipes(event => {
    event.shaped(Item.of('tfmg:hardened_planks', 4), ['   ',' AA',' AA'],{ A: 'immersiveengineering:treated_wood_horizontal'});
    event.shaped(Item.of('immersiveengineering:treated_wood_horizontal', 4), ['   ',' AA',' AA'],{ A: 'tfmg:hardened_planks'});
    event.shaped(Item.of('create_new_age:copper_wire', 4), ['   ','  A','  A'],{ A: 'immersiveengineering:wire_copper' });
    event.shaped(Item.of('immersiveengineering:wire_copper', 1), ['   ','  A','  A'],{ A: 'create_new_age:copper_wire' });
    event.shaped(Item.of('tfmg:steel_ingot', 4), ['   ',' AA',' AA'],{ A: 'immersiveengineering:ingot_steel'});
    event.shaped(Item.of('immersiveengineering:ingot_steel', 4), ['   ',' AA',' AA'],{ A: 'tfmg:steel_ingot'});
    event.shapeless(Item.of('tfmg:nickel_sheet', 1), [ 'immersiveengineering:plate_nickel' ] );
    event.shapeless(Item.of('immersiveengineering:plate_nickel', 1), [ 'tfmg:nickel_sheet' ] );
    event.shapeless(Item.of('tfmg:lead_sheet', 1), [ 'immersiveengineering:plate_lead' ] );
    event.shapeless(Item.of('immersiveengineering:plate_lead', 1), [ 'tfmg:lead_sheet' ] );
    event.shapeless(Item.of('create:iron_sheet', 1), [ 'immersiveengineering:plate_iron' ] );
    event.shapeless(Item.of('immersiveengineering:plate_iron', 1), [ 'create:iron_sheet' ] );
    event.shapeless(Item.of('create:golden_sheet', 1), [ 'immersiveengineering:plate_gold' ] );
    event.shapeless(Item.of('immersiveengineering:plate_gold', 1), [ 'create:golden_sheet' ] );

    console.log('Recipes Loaded');
})


ServerEvents.tags('item', event => {
  event.remove('c:tools/wrench', 'immersiveengineering:hammer')
})
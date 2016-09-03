var runeword = [{
  name: 'Steel',
  combinationOrder: 'Tir El',
  requiredLevel: 13,
  requiredItems: 'Swords, Axes & Maces',
  properties: ['+25% Increased Attack Speed', '+20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '+2 to Mana After Each Kill', '+1 to Light Radius']
}, {
  name: 'Nadir',
  combinationOrder: 'Nef Tir',
  requiredLevel: 13,
  requiredItems: 'Headgear (all types)',
  properties: ['+50% Enhanced Defense', '+10 Defense', '+30 Defense vs. Missile', '+5 to Strength', '+2 to Mana After Each Kill', '-33% Extra Gold from Monsters', '-3 to Light Radius', 'Level 13 Cloak of Shadows (9 charges)']
}, {
  name: 'Malice',
  combinationOrder: 'Ith El Eth',
  requiredLevel: 15,
  requiredItems: 'All Melee Weapons',
  properties: ['+33% Enhanced Damage', '+9 to Maximum Damage', '-25% Target Defense', '+50 to Attack Rating', '100% Chance of Open Wounds', 'Prevent Monster Heal', '-100 to Monster Defense Per Hit', 'Drain Life -5']
}, {
  name: 'Stealth',
  combinationOrder: 'Tal Eth',
  requiredLevel: 17,
  requiredItems: 'Armor',
  properties: ['+25% Faster Run/Walk', '+25% Faster Casting Rate', '25% Faster Hit Recovery', '+6 to Dexterity', 'Regenerate Mana 15%', '+15 Maximum Stamina', 'Poison Resist +30%', 'Magic Damage Reduced by 3']
}, {
  name: 'Leaf',
  combinationOrder: 'Tir Ral',
  requiredLevel: 19,
  requiredItems: 'Staves',
  properties: ['+3 to Fire Skills', 'Adds 5-30 Fire Damage', '+3 to Inferno (Sorceress Only)', '+3 to Warmth (Sorceress Only)', '+3 to Fire Bolt (Sorceress Only)', '+(2 * Character Level) Defense', 'Cold Resist +33%', '+2 to Mana After Each Kill']
}, {
  name: 'Zephyr',
  combinationOrder: 'Ort Eth',
  requiredLevel: 21,
  requiredItems: 'Missile Weapons',
  properties: ['7% Chance to Cast Level 1 Twister When Struck', '+25% Faster Run/Walk', '+25% Increased Attack Speed', '+33% Enhanced Damage', '-25% Target Defense', '+66 to Attack Rating', 'Adds 1-50 Lightning Damage', '+25 Defense']
}, {
  name: 'Ancients Pledge',
  combinationOrder: 'Ral Ort Tal',
  requiredLevel: 21,
  requiredItems: 'Shields',
  properties: ['+50% Enhanced Defense', 'Cold Resist +43%', 'Lightning Resist +48%', 'Fire Resist +48%', 'Poison Resist +48%', '10% Damage Taken Goes to Mana']
}, {
  name: 'Holy Thunder',
  combinationOrder: 'Eth Ral Ort Tal',
  requiredLevel: 23,
  requiredItems: 'Scepters',
  properties: ['+60% Enhanced Damage', '+10 to Maximum Damage', '-25% Target Defense', 'Adds 5-30 Fire Damage', 'Adds 21-110 Lightning Damage', '+75 Poison Damage Over 5 Seconds', '+3 to Holy Shock (Paladin Only)', '+5% to Maximum Lightning Resist', 'Lightning Resist +60%', 'Level 7 Chain Lightning (60 charges)']
}, {
  name: 'Strength',
  combinationOrder: 'Amn Tir',
  requiredLevel: 25,
  requiredItems: 'Melee Weapons',
  properties: ['+35% Enhanced Damage', '7% Life Stolen Per Hit', '25% Chance of Crushing Blow', '+20 to Strength', '+10 to Vitality', '+2 to Mana After Each Kill']
}, {
  name: 'Edge',
  combinationOrder: 'Tir Tal Amn',
  requiredLevel: 25,
  requiredItems: 'Missile Weapons',
  properties: ['Level 15 Thorns Aura When Equipped', '+35% Increased Attack Speed', '+320-380% Damage to Demons (varies)', '+280% Damage to Undead', '+75 Poison  Damage Over 5 Seconds', '7% Life Stolen Per Hit', 'Prevent Monster Heal', '+5-10 to All Attributes (varies)', '+2 to Mana After Each Kill', 'Reduces All Vendor Prices 15%']
}, {
  name: 'Kings Grace',
  combinationOrder: 'Amn Ral Thul',
  requiredLevel: 25,
  requiredItems: 'Swords & Scepters',
  properties: ['+100% Enhanced Damage', '+150 to Attack Rating', '+100% Damage to Demons', '+100 to Attack Rating Against Demons', '+50% Damage to Undead', '+100 to Attack Rating Against Undead', 'Adds 5-30 Fire Damage', 'Adds 3-14 Cold Damage', '7% Life Stole Per Hit']
}, {
  name: 'Spirit',
  combinationOrder: 'Tal Thul Ort Amn',
  requiredLevel: 25,
  requiredItems: 'Shields & Swords',
  properties: ['+2 to All Skills', '+25-35% Faster Cast Rate (varies)', '+55% Faster Hit Recovery', '+250 Defense vs. Missile', '+22 to Vitality', '+89-112 to Mana (varies)', '+3-8 Magic Absorb (varies)']
}, {
  name: 'Myth',
  combinationOrder: 'Hel Amn Nef',
  requiredLevel: 25,
  requiredItems: 'Armor',
  properties: ['3% Chance to Cast Level Howl When Struck', '10% Chance to Cast Level 1 Taunt on Striking', '+2 to Barbarian Skill Levels', '+30 Defense vs. Missile', 'Replenish Life +10', 'Attacker Takes Damage of 14', 'Requirements -15%']
}, {
  name: 'Radiance',
  combinationOrder: 'Nef Sol Ith',
  requiredLevel: 27,
  requiredItems: 'Headgear',
  properties: ['+75% Enhanced Defense', '+30 Defense vs. Missiles', '+10 to Vitality', '+10 to Energy', '+33 to Mana', 'Damage Reduced by 7', 'Magic Damage Reduced by 3', '15% Damage Taken Goes to Mana', '+5 to Light Radius']
}, {
  name: 'Insight',
  combinationOrder: 'Ral Tir Tal Sol',
  requiredLevel: 27,
  requiredItems: 'Polearms & Staves',
  properties: ['Level 12-17 Meditation Aura When Equipped (varies)', '+35% Faster Cast Rate', '+200-260% Enhanced Damage (varies)', '+9 to Minimum Damage', '180-250% Bonus to Attack Rating (varies)', 'Adds 5-30 Fire Damage', '+75 Poison Damage Over 5 Seconds', '+1-6 to Critical Strike (varies)', '+5 to All Attributes', '+2 to Mana After Each Kill', '23% Better Chance of Getting Magic Items']
}, {
  name: 'Lore',
  combinationOrder: 'Ort Sol',
  requiredLevel: 27,
  requiredItems: 'Headgear',
  properties: ['+1 to All Skills', '+10 to Energy', 'Lightning Resist +30%', 'Damage Reduced by 7', '+2 to Mana After Each Kill', '+2 to Light Radius']
}, {
  name: 'Honor',
  combinationOrder: 'Amn El Ith Tir Sol',
  requiredLevel: 27,
  requiredItems: 'All Melee Weapons',
  properties: ['+1 to All Skills', '+160% Enhanced Damage', '+9 to Minimum Damage', '+9 to Maximum Damage', '+250 Attack Rating', '7% Life Stolen per Hit', '25% Deadly Strike', '+10 to Strength Replenish Life', '+2 to Mana After Each Kill', '+1 to Light Radius']
}, {
  name: 'Rhyme',
  combinationOrder: 'Shael Eth',
  requiredLevel: 29,
  requiredItems: 'Shields',
  properties: ['+40% Faster Block Rate', '20% Increased Chance of Blocking', 'Regenerate Mana 15%', 'All Resistances +25', 'Cannot be Frozen', '50% Extra Gold from Monsters', '25% Better Chance of Getting Magic Items']
}, {
  name: 'Peace',
  combinationOrder: 'Shael Thul Amn',
  requiredLevel: 29,
  requiredItems: 'Armor',
  properties: ['4% Chance to Cast Level 5 Slow Missiles When Struck', '2% Chance to Cast Level 15 Valkyrie on Striking', '+2 to Amazon Skill Levels', '+20% Faster Hit Recovery', '+2 to Critical Strike', 'Cold Resist +30%', 'Attacker Takes Damage of 14']
}, {
  name: 'Black',
  combinationOrder: 'Thul Io Nef',
  requiredLevel: 35,
  requiredItems: 'Clubs, Hammers, Maces',
  properties: ['+15% Increased Attack Speed', '+120% Enhanced Damage', '+200 to Attack Rating', 'Adds 3-14 Cold Damage (3 sec)', '40% Chance of Crushing Blow', 'Knockback', '+10 to Vitality', 'Magic Damage Reduced by 2', 'Level 4 Corpse Explosion (12 Charges)']
}, {
  name: 'White',
  combinationOrder: 'Dol Io',
  requiredLevel: 35,
  requiredItems: 'Wands',
  properties: ['+3 to Poison and Bone Skills (Necromancer Only)', '+20% Faster Cast Rate', '+2 to Bone spear (Necromancer Only)', '+4 to Skeleton Mastery (Necromancer Only)', '+3 to Bone armor (Necromancer Only)', 'Hit Causes Monster to Flee 25%', '+10 to Vitality', '+13 to Mana', 'Magic Damage Reduced by 4']
}, {
  name: 'Smoke',
  combinationOrder: 'Nef Lum',
  requiredLevel: 37,
  requiredItems: 'Armor',
  properties: ['+20% Faster Hit Recovery', '+75% Enhanced Defense', '+280 Defense vs. Missiles', '+10 to Energy', 'All Resistances +50', '-1 to Light Radius', 'Level 6 Weaken (18 charges)']
}, {
  name: 'Splendor',
  combinationOrder: 'Eth Lum',
  requiredLevel: 37,
  requiredItems: 'Shields',
  properties: ['+1 to All Skills', '+10% Faster Cast Rate', '+20% Faster Block Rate', '+60-100% Enhanced Defense (varies)', '+10 to Energy', 'Regenerate Mana 15%', '50% Extra Gold from Monsters', '20% Better Chance of Getting Magic Items', '+3 to Light Radius']
}, {
  name: 'Memory',
  combinationOrder: 'Lum Io Sol Eth',
  requiredLevel: 37,
  requiredItems: 'Staves',
  properties: ['+3 to Sorceress Skill Levels', '+33% Faster Cast Rate', '+9 to Minimum Damage', '-25% Target Defense', '+3 to Energy Shield (Sorceress Only)', '+2 to Static Field (Sorceress Only)', '+50% Enhanced Defense', '+10 Vitality', '+10 Energy', 'Increase Maximum Mana 20%', 'Magic Damage Reduced by 7']
}, {
  name: 'Harmony',
  combinationOrder: 'Tir Ith Sol Ko',
  requiredLevel: 39,
  requiredItems: 'Missile Weapons',
  properties: ['Level 10 Vigor Aura When Equipped', '+200-275% Enhanced Damage (varies)', '+9 to Minimum Damage', '+9 to Maximum Damage', 'Adds 55-160 Fire Damage', 'Adds 55-160 Lightning Damage', 'Adds 55-160 Cold Damage', '+2-6 to Valkyrie (varies)', '+10 to Dexterity', 'Regenerate Mana 20%', '+2 to Mana After Each Kill', '+2 to Light Radius', 'Level 20 Revive (25 charges)']
}, {
  name: 'Melody',
  combinationOrder: 'Shael Ko Nef',
  requiredLevel: 39,
  requiredItems: 'Missile Weapons',
  properties: ['+3 to Bow and Crossbow Skills (Amazon Only)', '+20% Increased Attack Speed', '+50% Enhanced Damage', '+300% Damage to Undead', '+3 to Slow Missiles (Amazon Only)', '+3 to Dodge (Amazon Only)', '+3 to Critical Strike (Amazon Only)', '+10 to Dexterity']
}, {
  name: 'Lionheart',
  combinationOrder: 'Hel Lum Fal',
  requiredLevel: 41,
  requiredItems: 'Armor',
  properties: ['+20% Enhanced Damage','+25 to Strength','+15 to Dexterity','+20 to Vitality','+10 to Energy','+50 to Life','All Resistances +30','Requirements -15%']
}, {
  name: 'Obedience',
  combinationOrder: 'Hel Ko Thul Eth Fal',
  requiredLevel: 41,
  requiredItems: 'Polearms',
  properties: ['+30% Chance to Cast Level 21 Enchant When You Kill an Enemy','+40% Faster Hit Recovery','+370% Enhanced Damage','-25% Target Defense','Adds 3-14 Cold Damage (3 sec)','-25% to Enemy Fire Resistance','40% Chance of Crushing Blow','+200-300 Defense (varies)','+10 to Strength','+10 to Dexterity','All Resistances +20-30 (varies)','Requirements -20%']
}, {
  name: 'Treachery',
  combinationOrder: 'Shael Thul Lem',
  requiredLevel: 43,
  requiredItems: 'Mace & Swords',
  properties: ['+5% Chance to Cast Level 15 Fade When Struck','25% Chance to Cast Level 15 Venom On Striking','+2 to Assasin Skill','+45% Increased Attack Speed','+20% Faster Hit Recovery','Cold Resist +30%','50% Extra Gold from Monsters']
}, {
  name: 'Passion',
  combinationOrder: 'Dol Ort Eld Lem',
  requiredLevel: 43,
  requiredItems: 'All Weapons',
  properties: ['+25% Increased Attack Speed','+160-210% Enhanced Damage (varies)','50-80% Bonus to Attack Rating (varies)','+75% Damage to Undead','+50 to Attack Rating Against Undead','Adds 1-50 Lightning Damage','+1 to Berserk','+1 to Zeal','Hit Blinds Target +10','Hit Causes Monster to Flee 25%','75% Extra Gold from Monsters','Level 3 Heart of Wolverine (12 charges)']
}, {
  name: 'Voice of Reason',
  combinationOrder: 'Lem Ko El Eld',
  requiredLevel: 43,
  requiredItems: 'Maces & Swords',
  properties: ['+15% Chance to Cast Level 13 Frozen Orb on Striking','+18% Chance to Cast Level 20 Ice Blast on Striking','+50 to Attack Rating','+220-350% Damage to Demons (varies)','+355-375% Damage to Undead (varies)','+50 to Attack Rating Against Undead','Adds 100-220 Cold Damage','-24% to Enemy Cold Resistance','+10 to Dexterity','Cannot be Frozen','75% Extra Gold From Monsters','+1 to Light Radius']
}, {
  name: 'Wealth',
  combinationOrder: 'Lem Ko Tir',
  requiredLevel: 43,
  requiredItems: 'Armor',
  properties: ['+10 to Dexterity','+2 to Mana After Each Kill','300% Extra Gold from Monsters','100% Better Chance of Getting Magic Items']
}, {
  name: 'Lawbringer',
  combinationOrder: 'Amn Lem Ko',
  requiredLevel: 43,
  requiredItems: 'Hammer, Scepters & Swords',
  properties: ['20% Chance to cast Level 15 Decrepify on Striking','Level 16-18 Sanctuary Aura When Equipped (varies)','-50% Target Defense','Adds 150-210 Fire Damage','Adds 130-180 Cold Damage','7% Life Stolen Per Hit','Slain Monsters Rest in Peace','+200-250 Defense vs. Missile (varies)','+10 to Dexterity','75% Extra Gold from Monsters']
}, {
  name: 'Enlightenment',
  combinationOrder: 'Pul Ral Sol',
  requiredLevel: 45,
  requiredItems: 'Armor',
  properties: ['5% Chance to Cast Level 15 Blaze When Struck','5% Chance to Cast Level 15 Fire Ball on Striking','+2 to Sorceress Skill Levels','+1 to Warmth','+30%  Enhanced Defense','Fire Resist +30%','Damage reduced by 7']
}, {
  name: 'Crescent Moon',
  combinationOrder: 'Shael Um Tir',
  requiredLevel: 47,
  requiredItems: 'Axes, Polearms & Swords',
  properties: ['10% Chance to Cast Level 17 Chain Lightning on Striking','7% Chance to Cast Level 13 Static Field on Striking','+20% Increased Attack Speed','+180-220% Enhanced Damage (varies)','Ignore Targets Defense','-35% to Enemy Lightning Resistance','25% Chance of Open Wounds','+9-11 Magic Absorb (varies)','+2 to Mana After Each Kill','Level 18 Summon Spirit Wolf (30 charges)']
}, {
  //Seguir acá
  name: 'Duress',
  combinationOrder: 'Shael Um Tir',
  requiredLevel: 47,
  requiredItems: 'Axes, Polearms & Swords',
  properties: ['10% Chance to Cast Level 17 Chain Lightning on Striking','7% Chance to Cast Level 13 Static Field on Striking','+20% Increased Attack Speed','+180-220% Enhanced Damage (varies)','Ignore Targets Defense','-35% to Enemy Lightning Resistance','25% Chance of Open Wounds','+9-11 Magic Absorb (varies)','+2 to Mana After Each Kill','Level 18 Summon Spirit Wolf (30 charges)']
}]

var rune = [{
  name: 'El',
  image: 'img/stone.svg',
  requiredLevel: 11,
  properties: {
    weapon: '+50 To Attack Rating, +1 Light Radius',
    armorHelm: '+15 Defense, +1 To Light Radius',
    shield: '+15 Defense, +1 To Light Radius',
  }
}, {
  name: 'Eld',
  image: 'img/stone.svg',
  requiredLevel: 11,
  properties: {
    weapon: '+75% Damage To Undead, +50 Attack Rating Against Undead',
    armorHelm: '+15% Slower Stamina Drain',
    shield: '7% Increased Chance of Blocking',
  }
}, {
  name: 'Tir',
  image: 'img/stone.svg',
  requiredLevel: 13,
  properties: {
    weapon: '+2 To Mana After Each Kill',
    armorHelm: '+2 To Mana After Each Kill',
    shield: '+2 To Mana After Each Kill',
  }
}, {
  name: 'Nef',
  image: 'img/stone.svg',
  requiredLevel: 13,
  properties: {
    weapon: 'Knockback',
    armorHelm: '+30 Defense Vs. Missile',
    shield: '+30 Defense Vs. Missile',
  }
}, {
  name: 'Eth',
  image: 'img/stone.svg',
  requiredLevel: 15,
  properties: {
    weapon: '-25% To Target Defense',
    armorHelm: 'Regenerate Mana 15%',
    shield: 'Regenerate Mana 15%',
  }
}, {
  name: 'Ith',
  image: 'img/stone.svg',
  requiredLevel: 15,
  properties: {
    weapon: '+9 To Maximum Damage',
    armorHelm: '15% Damage Taken Goes To Mana',
    shield: '15% Damage Taken Goes To Mana',
  }
}, {
  name: 'Tal',
  image: 'img/stone.svg',
  requiredLevel: 17,
  properties: {
    weapon: '+75 Poison Damage Over 5 Seconds',
    armorHelm: 'Poison Resist 30%',
    shield: 'Poison Resist 35%',
  }
}, {
  name: 'Ral',
  image: 'img/stone.svg',
  requiredLevel: 19,
  properties: {
    weapon: 'Adds 5-30 Fire Damage',
    armorHelm: 'Fire Resist 30%',
    shield: 'Fire Resist 35%',
  }
}, {
  name: 'Ort',
  image: 'img/stone.svg',
  requiredLevel: 21,
  properties: {
    weapon: 'Adds 1-50 Lightning Damage',
    armorHelm: 'Lightning Resist 30%',
    shield: 'Lightning Resist 35%',
  }
}, {
  name: 'Thul',
  image: 'img/stone.svg',
  requiredLevel: 23,
  properties: {
    weapon: 'Adds 3-14 Cold Damage - 3 Second Duration',
    armorHelm: 'Cold Resist 30%',
    shield: 'Cold Resist 35%',
  }
}, {
  name: 'Amn',
  image: 'img/amn.svg',
  requiredLevel: 25,
  properties: {
    weapon: '7% Life Stolen Per Hit',
    armorHelm: 'Attacker Takes Damage of 14',
    shield: 'Attacker Takes Damage of 14',
  }
}, {
  name: 'Sol',
  image: 'img/stone.svg',
  requiredLevel: 27,
  properties: {
    weapon: '+9 To Minimum Damage',
    armorHelm: 'Damage Reduced by 7',
    shield: 'Damage Reduced by 7',
  }
}, {
  name: 'Shael',
  image: 'img/stone.svg',
  requiredLevel: 29,
  properties: {
    weapon: '20% Increased Attack Speed',
    armorHelm: '20% Faster Hit Recovery',
    shield: '20% Faster Block Rate',
  }
}, {
  name: 'Dol',
  image: 'img/stone.svg',
  requiredLevel: 31,
  properties: {
    weapon: 'Hit Causes Monster To Flee 25%',
    armorHelm: 'Replenish Life +7',
    shield: 'Replenish Life +7',
  }
}, {
  name: 'Hel',
  image: 'img/stone.svg',
  requiredLevel: 33,
  properties: {
    weapon: 'Requirements -20%',
    armorHelm: 'Requirements -15%',
    shield: 'Requirements -15%',
  }
}, {
  name: 'Io',
  image: 'img/stone.svg',
  requiredLevel: 35,
  properties: {
    weapon: '+10 To Vitality',
    armorHelm: '+10 To Vitality',
    shield: '+10 To Vitality',
  }
}, {
  name: 'Lum',
  image: 'img/stone.svg',
  requiredLevel: 37,
  properties: {
    weapon: '+10 To Energy',
    armorHelm: '+10 To Energy',
    shield: '+10 To Energy',
  }
}, {
  name: 'Ko',
  image: 'img/stone.svg',
  requiredLevel: 39,
  properties: {
    weapon: '+10 To Dexterity',
    armorHelm: '+10 To Dexterity',
    shield: '+10 To Dexterity',
  }
}, {
  name: 'Fal',
  image: 'img/stone.svg',
  requiredLevel: 41,
  properties: {
    weapon: '+10 To Strength',
    armorHelm: '+10 To Strength',
    shield: '+10 To Strength',
  }
}, {
  name: 'Lem',
  image: 'img/stone.svg',
  requiredLevel: 43,
  properties: {
    weapon: '75% Extra Gold From Monsters',
    armorHelm: '50% Extra Gold From Monsters',
    shield: '50% Extra Gold From Monsters',
  }
}, {
  name: 'Pul',
  image: 'img/stone.svg',
  requiredLevel: 45,
  properties: {
    weapon: '+75% Damage to Demons, +100 Attack Rating Against Demons',
    armorHelm: '+30% Enhanced Defense',
    shield: '+30% Enhanced Defense',
  }
}, {
  name: 'Um',
  image: 'img/stone.svg',
  requiredLevel: 47,
  properties: {
    weapon: '25% Chance of Open Wounds',
    armorHelm: 'All Resistances +15',
    shield: 'All Resistances +22',
  }
}, {
  name: 'Mal',
  image: 'img/stone.svg',
  requiredLevel: 49,
  properties: {
    weapon: 'Prevent Monster Heal',
    armorHelm: 'Magic Damage Reduced By 7',
    shield: 'Magic Damage Reduced By 7',
  }
}, {
  name: 'Ist',
  image: 'img/stone.svg',
  requiredLevel: 51,
  properties: {
    weapon: '30% Better Chance of Getting Magic Items',
    armorHelm: '25% Better Chance of Getting Magic Items',
    shield: '25% Better Chance of Getting Magic Items',
  }
}, {
  name: 'Gul',
  image: 'img/stone.svg',
  requiredLevel: 53,
  properties: {
    weapon: '20% Bonus To Attack Rating',
    armorHelm: '5% To Maximum Poison Resist',
    shield: '5% To Maximum Poison Resist',
  }
}, {
  name: 'Vex',
  image: 'img/stone.svg',
  requiredLevel: 55,
  properties: {
    weapon: '7% Mana Stolen Per Hit',
    armorHelm: '5% To Maximum Fire Resist',
    shield: '5% To Maximum Fire Resist',
  }
}, {
  name: 'Ohm',
  image: 'img/stone.svg',
  requiredLevel: 57,
  properties: {
    weapon: '+50% Enhanced Damage',
    armorHelm: '+5% To Maximum Cold Resist',
    shield: '+5% To Maximum Cold Resist',
  }
}, {
  name: 'Lo',
  image: 'img/stone.svg',
  requiredLevel: 59,
  properties: {
    weapon: '20% Deadly Strike',
    armorHelm: '5% To Maximum Lightning Resist',
    shield: '5% To Maximum Lightning Resist',
  }
}, {
  name: 'Sur',
  image: 'img/stone.svg',
  requiredLevel: 61,
  properties: {
    weapon: 'Hit Blinds Target',
    armorHelm: 'Maximum Mana 5%',
    shield: '+50 To Mana',
  }
}, {
  name: 'Ber',
  image: 'img/stone.svg',
  requiredLevel: 63,
  properties: {
    weapon: '20% Chance of Crushing Blow',
    armorHelm: 'Damage Reduced by 8%',
    shield: 'Damage Reduced by 8%',
  }
}, {
  name: 'Jah',
  image: 'img/stone.svg',
  requiredLevel: 65,
  properties: {
    weapon: 'Ignore Targets Defense',
    armorHelm: 'Increase Maximum Life 5%',
    shield: '+50 Life',
  }
}, {
  name: 'Cham',
  image: 'img/stone.svg',
  requiredLevel: 67,
  properties: {
    weapon: 'Freeze Target +3',
    armorHelm: 'Cannot Be Frozen',
    shield: 'Cannot Be Frozen',
  }
}, {
  name: 'Zod',
  image: 'img/stone.svg',
  requiredLevel: 69,
  properties: {
    weapon: 'Indestructible',
    armorHelm: 'Indestructible',
    shield: 'Indestructible',
  }
}]

new Vue({
  el: '#app',

  data: {
    search: '',
    runes: rune,
    runewords: runeword
  },

  methods: {

  }
})

// var audio = new Audio('../mp3/greetings.mp3');
// audio.play();
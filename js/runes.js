var runesSVG = require('./runeSVG')

module.exports = [{
  name: 'El',
  image: runesSVG.el(),
  requiredLevel: 11,
  properties: {
    weapon: '+50 To Attack Rating, +1 Light Radius',
    armorHelm: '+15 Defense, +1 To Light Radius',
    shield: '+15 Defense, +1 To Light Radius'
  }
}, {
  name: 'Eld',
  image: runesSVG.eld(),
  requiredLevel: 11,
  properties: {
    weapon: '+75% Damage To Undead, +50 Attack Rating Against Undead',
    armorHelm: '+15% Slower Stamina Drain',
    shield: '7% Increased Chance of Blocking'
  },
  combination: (runesSVG.elHc() + runesSVG.elHc() + runesSVG.elHc())
}, {
  name: 'Tir',
  image: runesSVG.tir(),
  requiredLevel: 13,
  properties: {
    weapon: '+2 To Mana After Each Kill',
    armorHelm: '+2 To Mana After Each Kill',
    shield: '+2 To Mana After Each Kill'
  },
  combination: (runesSVG.eldHc() + runesSVG.eldHc() + runesSVG.eldHc())
}, {
  name: 'Nef',
  image: runesSVG.nef(),
  requiredLevel: 13,
  properties: {
    weapon: 'Knockback',
    armorHelm: '+30 Defense Vs. Missile',
    shield: '+30 Defense Vs. Missile'
  },
  combination: (runesSVG.tirHc() + runesSVG.tirHc() + runesSVG.tirHc())
}, {
  name: 'Eth',
  image: runesSVG.eth(),
  requiredLevel: 15,
  properties: {
    weapon: '-25% To Target Defense',
    armorHelm: 'Regenerate Mana 15%',
    shield: 'Regenerate Mana 15%'
  },
  combination: (runesSVG.nefHc() + runesSVG.nefHc() + runesSVG.nefHc())
}, {
  name: 'Ith',
  image: runesSVG.ith(),
  requiredLevel: 15,
  properties: {
    weapon: '+9 To Maximum Damage',
    armorHelm: '15% Damage Taken Goes To Mana',
    shield: '15% Damage Taken Goes To Mana'
  },
  combination: (runesSVG.ethHc() + runesSVG.ethHc() + runesSVG.ethHc())
}, {
  name: 'Tal',
  image: runesSVG.tal(),
  requiredLevel: 17,
  properties: {
    weapon: '+75 Poison Damage Over 5 Seconds',
    armorHelm: 'Poison Resist 30%',
    shield: 'Poison Resist 35%'
  },
  combination: (runesSVG.ithHc() + runesSVG.ithHc() + runesSVG.ithHc())
}, {
  name: 'Ral',
  image: runesSVG.ral(),
  requiredLevel: 19,
  properties: {
    weapon: 'Adds 5-30 Fire Damage',
    armorHelm: 'Fire Resist 30%',
    shield: 'Fire Resist 35%'
  },
  combination: (runesSVG.talHc() + runesSVG.talHc() + runesSVG.talHc())
}, {
  name: 'Ort',
  image: runesSVG.ort(),
  requiredLevel: 21,
  properties: {
    weapon: 'Adds 1-50 Lightning Damage',
    armorHelm: 'Lightning Resist 30%',
    shield: 'Lightning Resist 35%'
  },
  combination: (runesSVG.ralHc() + runesSVG.ralHc() + runesSVG.ralHc())
}, {
  name: 'Thul',
  image: runesSVG.thul(),
  requiredLevel: 23,
  properties: {
    weapon: 'Adds 3-14 Cold Damage - 3 Second Duration',
    armorHelm: 'Cold Resist 30%',
    shield: 'Cold Resist 35%'
  },
  combination: (runesSVG.ortHc() + runesSVG.ortHc() + runesSVG.ortHc())
}, {
  name: 'Amn',
  image: runesSVG.amn(),
  requiredLevel: 25,
  properties: {
    weapon: '7% Life Stolen Per Hit',
    armorHelm: 'Attacker Takes Damage of 14',
    shield: 'Attacker Takes Damage of 14'
  },
  combination: (runesSVG.thulHc() + runesSVG.thulHc() + runesSVG.thulHc())
}, {
  name: 'Sol',
  image: runesSVG.sol(),
  requiredLevel: 27,
  properties: {
    weapon: '+9 To Minimum Damage',
    armorHelm: 'Damage Reduced by 7',
    shield: 'Damage Reduced by 7'
  },
  combination: (runesSVG.amnHc() + runesSVG.amnHc() + runesSVG.amnHc())
}, {
  name: 'Shael',
  image: runesSVG.shael(),
  requiredLevel: 29,
  properties: {
    weapon: '20% Increased Attack Speed',
    armorHelm: '20% Faster Hit Recovery',
    shield: '20% Faster Block Rate'
  },
  combination: (runesSVG.solHc() + runesSVG.solHc() + runesSVG.solHc())
}, {
  name: 'Dol',
  image: runesSVG.dol(),
  requiredLevel: 31,
  properties: {
    weapon: 'Hit Causes Monster To Flee 25%',
    armorHelm: 'Replenish Life +7',
    shield: 'Replenish Life +7'
  },
  combination: (runesSVG.shaelHc() + runesSVG.shaelHc() + runesSVG.shaelHc())
}, {
  name: 'Hel',
  image: runesSVG.hel(),
  requiredLevel: 33,
  properties: {
    weapon: 'Requirements -20%',
    armorHelm: 'Requirements -15%',
    shield: 'Requirements -15%'
  },
  combination: (runesSVG.dolHc() + runesSVG.dolHc() + runesSVG.dolHc())
}, {
  name: 'Io',
  image: runesSVG.io(),
  requiredLevel: 35,
  properties: {
    weapon: '+10 To Vitality',
    armorHelm: '+10 To Vitality',
    shield: '+10 To Vitality'
  },
  combination: (runesSVG.helHc() + runesSVG.helHc() + runesSVG.helHc())
}, {
  name: 'Lum',
  image: runesSVG.lum(),
  requiredLevel: 37,
  properties: {
    weapon: '+10 To Energy',
    armorHelm: '+10 To Energy',
    shield: '+10 To Energy'
  },
  combination: (runesSVG.ioHc() + runesSVG.ioHc() + runesSVG.ioHc())
}, {
  name: 'Ko',
  image: runesSVG.ko(),
  requiredLevel: 39,
  properties: {
    weapon: '+10 To Dexterity',
    armorHelm: '+10 To Dexterity',
    shield: '+10 To Dexterity'
  },
  combination: (runesSVG.lumHc() + runesSVG.lumHc() + runesSVG.lumHc())
}, {
  name: 'Fal',
  image: runesSVG.fal(),
  requiredLevel: 41,
  properties: {
    weapon: '+10 To Strength',
    armorHelm: '+10 To Strength',
    shield: '+10 To Strength'
  },
  combination: (runesSVG.koHc() + runesSVG.koHc() + runesSVG.koHc())
}, {
  name: 'Lem',
  image: runesSVG.lem(),
  requiredLevel: 43,
  properties: {
    weapon: '75% Extra Gold From Monsters',
    armorHelm: '50% Extra Gold From Monsters',
    shield: '50% Extra Gold From Monsters'
  },
  combination: (runesSVG.falHc() + runesSVG.falHc() + runesSVG.falHc())
}, {
  name: 'Pul',
  image: runesSVG.pul(),
  requiredLevel: 45,
  properties: {
    weapon: '+75% Damage to Demons, +100 Attack Rating Against Demons',
    armorHelm: '+30% Enhanced Defense',
    shield: '+30% Enhanced Defense'
  },
  combination: (runesSVG.lemHc() + runesSVG.lemHc() + runesSVG.lemHc())
}, {
  name: 'Um',
  image: runesSVG.um(),
  requiredLevel: 47,
  properties: {
    weapon: '25% Chance of Open Wounds',
    armorHelm: 'All Resistances +15',
    shield: 'All Resistances +22'
  },
  combination: (runesSVG.pulHc() + runesSVG.pulHc())
}, {
  name: 'Mal',
  image: runesSVG.mal(),
  requiredLevel: 49,
  properties: {
    weapon: 'Prevent Monster Heal',
    armorHelm: 'Magic Damage Reduced By 7',
    shield: 'Magic Damage Reduced By 7'
  },
  combination: (runesSVG.umHc() + runesSVG.umHc())
}, {
  name: 'Ist',
  image: runesSVG.ist(),
  requiredLevel: 51,
  properties: {
    weapon: '30% Better Chance of Getting Magic Items',
    armorHelm: '25% Better Chance of Getting Magic Items',
    shield: '25% Better Chance of Getting Magic Items'
  },
  combination: (runesSVG.malHc() + runesSVG.malHc())
}, {
  name: 'Gul',
  image: runesSVG.gul(),
  requiredLevel: 53,
  properties: {
    weapon: '20% Bonus To Attack Rating',
    armorHelm: '5% To Maximum Poison Resist',
    shield: '5% To Maximum Poison Resist'
  },
  combination: (runesSVG.istHc() + runesSVG.istHc())
}, {
  name: 'Vex',
  image: runesSVG.vex(),
  requiredLevel: 55,
  properties: {
    weapon: '7% Mana Stolen Per Hit',
    armorHelm: '5% To Maximum Fire Resist',
    shield: '5% To Maximum Fire Resist'
  },
  combination: (runesSVG.gulHc() + runesSVG.gulHc())
}, {
  name: 'Ohm',
  image: runesSVG.ohm(),
  requiredLevel: 57,
  properties: {
    weapon: '+50% Enhanced Damage',
    armorHelm: '+5% To Maximum Cold Resist',
    shield: '+5% To Maximum Cold Resist'
  },
  combination: (runesSVG.vexHc() + runesSVG.vexHc())
}, {
  name: 'Lo',
  image: runesSVG.lo(),
  requiredLevel: 59,
  properties: {
    weapon: '20% Deadly Strike',
    armorHelm: '5% To Maximum Lightning Resist',
    shield: '5% To Maximum Lightning Resist'
  },
  combination: (runesSVG.ohmHc() + runesSVG.ohmHc())
}, {
  name: 'Sur',
  image: runesSVG.sur(),
  requiredLevel: 61,
  properties: {
    weapon: 'Hit Blinds Target',
    armorHelm: 'Maximum Mana 5%',
    shield: '+50 To Mana'
  },
  combination: (runesSVG.loHc() + runesSVG.loHc())
}, {
  name: 'Ber',
  image: runesSVG.ber(),
  requiredLevel: 63,
  properties: {
    weapon: '20% Chance of Crushing Blow',
    armorHelm: 'Damage Reduced by 8%',
    shield: 'Damage Reduced by 8%'
  },
  combination: (runesSVG.surHc() + runesSVG.surHc())
}, {
  name: 'Jah',
  image: runesSVG.jah(),
  requiredLevel: 65,
  properties: {
    weapon: 'Ignore Targets Defense',
    armorHelm: 'Increase Maximum Life 5%',
    shield: '+50 Life'
  },
  combination: (runesSVG.berHc() + runesSVG.berHc())
}, {
  name: 'Cham',
  image: runesSVG.cham(),
  requiredLevel: 67,
  properties: {
    weapon: 'Freeze Target +3',
    armorHelm: 'Cannot Be Frozen',
    shield: 'Cannot Be Frozen'
  },
  combination: (runesSVG.jahHc() + runesSVG.jahHc())
}, {
  name: 'Zod',
  image: runesSVG.zod(),
  requiredLevel: 69,
  properties: {
    weapon: 'Indestructible',
    armorHelm: 'Indestructible',
    shield: 'Indestructible'
  },
  combination: (runesSVG.chamHc() + runesSVG.chamHc())
}]
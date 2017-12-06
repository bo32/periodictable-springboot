insert into tablegroup values (1, 'alkali metals', 'lithium family');
insert into tablegroup values (2, 'alkaline earth metals', 'beryllium family');
insert into tablegroup values (3, '', 'scandium family');
insert into tablegroup values (4, '', 'titanium family');
insert into tablegroup values (5, '', 'vanadium family');
insert into tablegroup values (6, '', 'chromium family');
insert into tablegroup values (7, '', 'manganese family');
insert into tablegroup values (8, '', 'iron family');
insert into tablegroup values (9, '', 'cobalt family');
insert into tablegroup values (10, '', 'nickel family');
insert into tablegroup values (11, 'coinage metals', 'copper family');
insert into tablegroup values (12, 'volatile metals', 'zinc family');
insert into tablegroup values (13, 'triels, icosagens', 'boron family');
insert into tablegroup values (14, 'tetrels, crystallogens', 'carbon family');
insert into tablegroup values (15, 'pentels, pnictogens', 'nitrogen family');
insert into tablegroup values (16, 'chalcogens', 'oxygen family');
insert into tablegroup values (17, 'halogens', 'fluorine family');
insert into tablegroup values (18, 'noble gases, aerogens', 'helium family or neon family');

insert into state values (1, 'solid');
insert into state values (2, 'gas');
insert into state values (3, 'synthetic');
insert into state values (4, 'liquid');

insert into metal values (1, 'Basic metal');
insert into metal values (2, 'Alkali metal');
insert into metal values (3, 'Alkaline earth metal');
insert into metal values (4, 'Transition metal');
insert into metal values (5, 'Lanthanide');
insert into metal values (6, 'Actinide');
insert into metal values (7, 'Semimetal');
insert into metal values (8, 'Non-metal');
insert into metal values (9, 'Chalcogens element');
insert into metal values (10, 'Halogens element');
insert into metal values (11, 'Noble gas');

insert into period values (1, 'Period 1');
insert into period values (2, 'Period 2');
insert into period values (3, 'Period 3');
insert into period values (4, 'Period 4');
insert into period values (5, 'Period 5');
insert into period values (6, 'Period 6');
insert into period values (7, 'Period 7');
insert into period values (8, 'Period 8');


insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 1, 'Hydrogen', 'H', 1, 1, 2, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 2, 'Helium', 'He', 18, 1, 2, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 3, 'Lithium', 'Li', 1, 2, 1, 2, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 4, 'Beryllium', 'Be', 2, 2, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 5, 'Boron', 'B', 13, 2, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 6, 'Carbon', 'C', 14, 2, 1, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 7, 'Nytrogen', 'N', 15, 2, 2, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 8, 'Oxygen', 'O', 16, 2, 2, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 9, 'Fluorine', 'F', 17, 2, 2, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 10, 'Neon', 'Ne', 18, 2, 2, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 11, 'Sodium', 'Na', 1, 3, 1, 2, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 12, 'Magnesium', 'Mg', 2, 3, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 13, 'Aluminium', 'Al', 13, 3, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 14, 'Silicon', 'Si', 14, 3, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 15, 'Phosphorus', 'P', 15, 3, 1, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 16, 'Sulfur', 'S', 16, 3, 1, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 17, 'Chlorine', 'Cl', 17, 3, 2, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 18, 'Argon', 'Ar', 18, 3, 2, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 19, 'Potassium', 'K', 1, 4, 1, 2, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 20, 'Calcium', 'Ca', 2, 4, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 21, 'Scandium', 'Sc', 3, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 22, 'Titanium', 'Ti', 4, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 23, 'Vanadium', 'V', 5, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 24, 'Chromium', 'Cr', 6, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 25, 'Manganese', 'Mn', 7, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 26, 'Iron', 'Fe', 8, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 27, 'Cobalt', 'Co', 9, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 28, 'Nickel', 'Ni', 10, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 29, 'Copper', 'Cu', 11, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 30, 'Zinc', 'Zn', 12, 4, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 31, 'Gallium', 'Ga', 13, 4, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 32, 'Germanium', 'Ge', 14, 4, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 33, 'Arsenic', 'As', 15, 4, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 34, 'Selenium', 'Se', 16, 4, 1, 8, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 35, 'Bromine', 'Br', 17, 4, 4, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 36, 'Krypton', 'Kr', 18, 4, 2, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 37, 'Rubidium', 'Rb', 1, 5, 1, 2, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 38, 'Strontium', 'Sr', 2, 5, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 39, 'Yttrium', 'Y', 3, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 40, 'Zirconium', 'Zr', 4, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 41, 'Niobium', 'Nb', 5, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 42, 'Molybdenum', 'Mo', 6, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 43, 'Technetium', 'Tc', 7, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 44, 'Ruthenium', 'Ru', 8, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 45, 'Rhodium', 'Rh', 9, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 46, 'Palladium', 'Pd', 10, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 47, 'Silver', 'Ag', 11, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 48, 'Cadmium', 'Cd', 12, 5, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 49, 'Indium', 'In', 13, 5, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 50, 'Tin', 'Sn', 14, 5, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 51, 'Antimony', 'Sb', 15, 5, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 52, 'Tellurium', 'Te', 16, 5, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 53, 'Iodine', 'I', 17, 5, 1, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 54, 'Xenon', 'Xe', 18, 5, 1, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 55, 'Cesium', 'Cs', 1, 6, 1, 2, 132.90543);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 56, 'Barium', 'Ba', 2, 6, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, NULL, 'Lantanide', 'La-Lu', 3, 6, 1, 5, 1.111);

-- extra period

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 57, 'Lanthanum', 'La', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 58, 'Cerium', 'Ce', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 59, 'Praseodymium', 'Pr', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 60, 'Neodymium', 'Nd', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 61, 'Promethium', 'Pm', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 62, 'Samarium', 'Sm', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 63, 'Europium', 'Eu', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 64, 'Gadolinium', 'Gd', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 65, 'Terbium', 'Tb', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 66, 'Dysprosium', 'Dy', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 67, 'Holmium', 'Ho', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 68, 'Erbium', 'Er', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 69, 'Thulium', 'Tm', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 70, 'Ytterbium', 'Yb', null, 6, 1, 5, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 71, 'Lutetium', 'Lu', null, 6, 1, 5, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 72, 'Hafnium', 'Hf', 4, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 73, 'Tantalum', 'Ta', 5, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 74, 'Tungsten', 'W', 6, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 75, 'Rhenium', 'Re', 7, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 76, 'Osmium', 'Os', 8, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 77, 'Iridium', 'Ir', 9, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 78, 'Platinium', 'Pt', 10, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 79, 'Gold', 'Au', 11, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 80, 'Mercury', 'Hg', 12, 6, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 81, 'Thallium', 'Tl', 13, 6, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 82, 'Lead', 'Pb', 14, 6, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 83, 'Bismuth', 'Bi', 15, 6, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 84, 'Polonium', 'Po', 16, 6, 1, 7, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 85, 'Astatine', 'At', 17, 6, 1, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 86, 'Radon', 'Rn', 18, 6, 1, 11, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 87, 'Francium', 'Fr', 1, 7, 1, 2, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 88, 'Radium', 'Ra', 2, 7, 1, 3, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, NULL, 'Actinide', 'Ac-Lr', 3, 7, 1, 6, 1.111);

-- extra period
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 89, 'Actinum', 'Ac', null, 7, 1, 6, 227.0278);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 90, 'Thorium', 'Th', null, 7, 1, 6, 232.0381);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 91, 'Protactinium', 'Pa', null, 7, 1, 6, 231.03588);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 92, 'Uranium', 'U', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 93, 'Neptunium', 'Np', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 94, 'Plutonium', 'Pu', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 95, 'Americium', 'Am', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 96, 'Curium', 'Cm', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 97, 'Berkelium', 'Bk', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 98, 'Californium', 'Cf', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 99, 'Einsteinium', 'Es', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 100, 'Fermium', 'Fm', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 101, 'Mendeleviuù', 'Md', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 102, 'Nobelium', 'No', null, 7, 1, 6, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 103, 'Lawrenciuù', 'Lr', null, 7, 1, 6, 1.111);

insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 104, 'Rutherfordium', 'Rf', 4, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 105, 'Dubnium', 'Db', 5, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 106, 'Seaborgium', 'Sg', 6, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 107, 'Bohrium', 'Bh', 7, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 108, 'Hassium', 'Hs', 8, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 109, 'Meitnerium', 'Mt', 9, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 110, 'Darmstadtium', 'Ds', 10, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 111, 'Roentgenium', 'Rg', 11, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 112, 'Copernicium', 'Cn', 12, 7, 1, 4, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 113, 'Ununtrium', 'Uut', 13, 7, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 114, 'Ununquadium', 'Uuq', 14, 7, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 115, 'Ununpentium', 'Uup', 15, 7, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 116, 'Ununhexium', 'Uuh', 16, 7, 1, 1, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 117, 'Ununseptium', 'Uus', 17, 7, 1, 10, 1.111);
insert into element (id, atomic_number, name, symbol, groupid, periodid, state_id, metal_id, atomicMass) values (NULL, 118, 'Ununoctium', 'Uuo', 18, 7, 1, 11, 1.111);
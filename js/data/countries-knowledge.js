// Country Knowledge Quiz Data - BAC Geography
// 19 countries that appear at BAC exam

const COUNTRIES_KNOWLEDGE = {
    "Austria": {
        vecini: ["Germania", "Cehia", "Slovacia", "Ungaria", "Slovenia", "Italia", "Elveția", "Liechtenstein"],
        relief: ["Alpii Austrieci", "Câmpia Dunării", "Valea Dunării", "Podișul Bohemiei (margine)", "Alpii Tirolezi"],
        ape: ["Dunărea", "Inn", "Mur", "Drau", "Salzach", "Enns"],
        orase: ["Viena", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt"]
    },
    "Bulgaria": {
        vecini: ["România", "Serbia", "Macedonia de Nord", "Grecia", "Turcia"],
        relief: ["Câmpia Dunării", "Munții Balcani (Stara Planina)", "Masivul Rodopi", "Câmpia Traciei", "Munții Rila", "Munții Pirin"],
        ape: ["Dunărea", "Marița", "Iskăr", "Struma", "Tundzha", "Iantra"],
        orase: ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse", "Pleven"]
    },
    "Elveția": {
        vecini: ["Germania", "Franța", "Italia", "Austria", "Liechtenstein"],
        relief: ["Alpii Elvețieni", "Podișul Elvețian (Mittelland)", "Munții Jura", "Mont Blanc (zonă)", "Engadin"],
        ape: ["Rin", "Ron", "Aar", "Reuss", "Lacul Geneva", "Lacul Zurich"],
        orase: ["Berna", "Zürich", "Geneva", "Basel", "Lausanne", "Lucerna"]
    },
    "Finlanda": {
        vecini: ["Suedia", "Norvegia", "Rusia"],
        relief: ["Câmpia Finlandei", "Podișul Lacurilor", "Laponia", "Platforma Baltică", "Regiunea Lacurilor"],
        ape: ["Kemijoki", "Oulujoki", "Lacul Saimaa", "Lacul Inari", "Lacul Päijänne", "Tornionjoki"],
        orase: ["Helsinki", "Espoo", "Tampere", "Turku", "Oulu", "Vantaa"]
    },
    "Franța": {
        vecini: ["Belgia", "Luxemburg", "Germania", "Elveția", "Italia", "Spania", "Andorra", "Monaco"],
        relief: ["Alpii", "Pirineii", "Masivul Central", "Câmpia Parisului", "Câmpia Aquitaniei", "Munții Vosgi"],
        ape: ["Sena", "Loara", "Garona", "Ron", "Rin", "Moselle"],
        orase: ["Paris", "Marseille", "Lyon", "Toulouse", "Nisa", "Strasbourg"]
    },
    "Germania": {
        vecini: ["Danemarca", "Polonia", "Cehia", "Austria", "Elveția", "Franța", "Luxemburg", "Belgia", "Olanda"],
        relief: ["Câmpia Germaniei de Nord", "Munții Harz", "Pădurea Neagră", "Alpii Bavarezi", "Podișul Suabiei", "Masivul Șist Renan"],
        ape: ["Rin", "Elba", "Dunărea", "Oder", "Weser", "Main"],
        orase: ["Berlin", "München", "Hamburg", "Frankfurt", "Köln", "Stuttgart"]
    },
    "Grecia": {
        vecini: ["Albania", "Macedonia de Nord", "Bulgaria", "Turcia"],
        relief: ["Munții Pindului", "Muntele Olimp", "Peninsula Peloponez", "Câmpia Tesaliei", "Insulele Ciclade", "Creta"],
        ape: ["Axios (Vardar)", "Aliakmonas", "Pinios", "Evros (Marița)", "Acheloos", "Arachthos"],
        orase: ["Atena", "Salonic", "Patras", "Heraklion", "Larisa", "Volos"]
    },
    "Italia": {
        vecini: ["Franța", "Elveția", "Austria", "Slovenia", "San Marino", "Vatican"],
        relief: ["Alpii", "Munții Apenini", "Câmpia Padului", "Sicilia", "Sardinia", "Vulcanul Etna"],
        ape: ["Pad (Po)", "Tibru", "Arno", "Adige", "Piave", "Lacul Garda"],
        orase: ["Roma", "Milano", "Napoli", "Torino", "Florența", "Veneția"]
    },
    "Olanda": {
        vecini: ["Germania", "Belgia"],
        relief: ["Câmpia Olandeză (sub nivelul mării)", "Poldere", "Delta Rinului", "Dune de nisip", "Regiunea Limburg (dealuri)"],
        ape: ["Rin", "Maas (Meuse)", "Schelde", "IJssel", "Waal", "Lacul IJsselmeer"],
        orase: ["Amsterdam", "Rotterdam", "Haga", "Utrecht", "Eindhoven", "Tilburg"]
    },
    "Polonia": {
        vecini: ["Germania", "Cehia", "Slovacia", "Ucraina", "Belarus", "Lituania", "Rusia (Kaliningrad)"],
        relief: ["Câmpia Polonă", "Munții Carpați (Tatra)", "Podișul Silezia", "Regiunea Masuria (lacuri)", "Munții Sudeți"],
        ape: ["Vistula", "Oder", "Warta", "Bug", "San", "Narew"],
        orase: ["Varșovia", "Cracovia", "Łódź", "Wrocław", "Poznań", "Gdańsk"]
    },
    "Portugalia": {
        vecini: ["Spania"],
        relief: ["Câmpia Litorală", "Podișul Mezeta (margine)", "Serra da Estrela", "Valea Tejo", "Algarve"],
        ape: ["Tejo (Tajo)", "Douro (Duero)", "Guadiana", "Mondego", "Sado", "Minho"],
        orase: ["Lisabona", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Coimbra"]
    },
    "Regatul Unit": {
        vecini: ["Irlanda (frontieră terestră)", "Franța (tunel)"],
        relief: ["Câmpia Angliei de Sud-Est", "Munții Pennini", "Highlands (Scoția)", "Munții Cambrian (Țara Galilor)", "Lacul District"],
        ape: ["Tamisa", "Severn", "Trent", "Mersey", "Clyde", "Avon"],
        orase: ["Londra", "Birmingham", "Manchester", "Edinburgh", "Glasgow", "Liverpool"]
    },
    "Republica Moldova": {
        vecini: ["România", "Ucraina"],
        relief: ["Podișul Moldovei", "Câmpia Nistrului", "Colinele Codrilor", "Podișul Ciulucurilor", "Câmpia Bălțului"],
        ape: ["Nistru", "Prut", "Răut", "Bâc", "Botna", "Cogâlnic"],
        orase: ["Chișinău", "Tiraspol", "Bălți", "Bender (Tighina)", "Cahul", "Comrat"]
    },
    "Rusia": {
        vecini: ["Norvegia", "Finlanda", "Estonia", "Letonia", "Lituania (Kaliningrad)", "Polonia (Kaliningrad)", "Belarus", "Ucraina", "Georgia", "Azerbaidjan"],
        relief: ["Câmpia Europei de Est", "Munții Ural", "Câmpia Siberiei de Vest", "Podișul Siberiei Centrale", "Caucaz"],
        ape: ["Volga", "Don", "Nipru", "Ural", "Pecera", "Dvina de Nord"],
        orase: ["Moscova", "Sankt Petersburg", "Novosibirsk", "Ekaterinburg", "Nijni Novgorod", "Kazan"]
    },
    "Serbia": {
        vecini: ["România", "Ungaria", "Croația", "Bosnia și Herțegovina", "Muntenegru", "Kosovo", "Macedonia de Nord", "Bulgaria"],
        relief: ["Câmpia Panonică", "Munții Dinarici", "Podișul Serbiei", "Valea Moravei", "Munții Balcani (Stara Planina)"],
        ape: ["Dunărea", "Sava", "Tisa", "Morava", "Drina", "Timok"],
        orase: ["Belgrad", "Novi Sad", "Niš", "Kragujevac", "Subotica", "Pančevo"]
    },
    "Spania": {
        vecini: ["Franța", "Portugalia", "Andorra", "Gibraltar (Regatul Unit)", "Maroc (Ceuta, Melilla)"],
        relief: ["Meseta Centrală", "Pirineii", "Munții Cantabrici", "Sierra Nevada", "Sierra Morena", "Câmpia Andaluziei"],
        ape: ["Ebro", "Tajo", "Guadalquivir", "Duero", "Guadiana", "Júcar"],
        orase: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Zaragoza"]
    },
    "Suedia": {
        vecini: ["Norvegia", "Finlanda"],
        relief: ["Munții Scandinaviei", "Câmpia Suedeză de Sud", "Podișul Norrland", "Depresiunea Lacurilor", "Scania"],
        ape: ["Göta älv", "Dalälven", "Klarälven", "Lacul Vänern", "Lacul Vättern", "Torneälven"],
        orase: ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Linköping", "Örebro"]
    },
    "Ucraina": {
        vecini: ["România", "Moldova", "Rusia", "Belarus", "Polonia", "Slovacia", "Ungaria"],
        relief: ["Câmpia Europei de Est", "Munții Carpați", "Podișul Podoliei", "Câmpia Mării Negre", "Munții Crimeei"],
        ape: ["Nipru", "Nistru", "Bug de Sud", "Donețk", "Tisa", "Prut"],
        orase: ["Kiev", "Harkiv", "Odesa", "Dnipro", "Donețk", "Lviv"]
    },
    "Ungaria": {
        vecini: ["România", "Ucraina", "Slovacia", "Austria", "Slovenia", "Croația", "Serbia"],
        relief: ["Câmpia Panonică", "Munții Bakony", "Munții Mecsek", "Transdanubia", "Câmpia Tisei"],
        ape: ["Dunărea", "Tisa", "Drava", "Balaton (lac)", "Rába", "Körös"],
        orase: ["Budapesta", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr"]
    }
};

// Get a random country for the quiz
const VECINI_ROMANIEI = ["Bulgaria", "Serbia", "Ungaria", "Ucraina", "Republica Moldova"];
const TARI_IMPORTANTE = ["Austria", "Elveția", "Finlanda", "Franța", "Germania", "Grecia", "Italia", "Olanda", "Polonia", "Portugalia", "Regatul Unit", "Rusia", "Spania", "Suedia"];

function getRandomCountry(categories) {
    let pool = [];
    if (categories.vecini) pool = pool.concat(VECINI_ROMANIEI);
    if (categories.importante) pool = pool.concat(TARI_IMPORTANTE);
    if (pool.length === 0) pool = Object.keys(COUNTRIES_KNOWLEDGE);
    
    const randomKey = pool[Math.floor(Math.random() * pool.length)];
    return { name: randomKey, data: COUNTRIES_KNOWLEDGE[randomKey] };
}

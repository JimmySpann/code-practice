import HTML from "./class.js"

const data = [ 
    {
        "id": 128765120,
        "firstname": "Letizia",
        "lastname": "Alva",
        "city": "Oranjestad",
        "email": "Letizia.Alva@gmail.com",
        "subordinates": [
            {
                "id": 9479659711,
                "firstname": "Jaclyn",
                "lastname": "Thar",
                "city": "Iloilo City",
                "email": "Jaclyn.Thar@gmail.com",
                "subordinates": []
            },
            {
                "id": 7124552279,
                "firstname": "Agathe",
                "lastname": "Erskine",
                "city": "Jakarta",
                "email": "Agathe.Erskine@gmail.com",
                "subordinates": []
            }
        ]
    },
    {
        "id": 2597431915,
        "firstname": "Cristabel",
        "lastname": "Suanne",
        "city": "Guadalajara",
        "email": "Cristabel.Suanne@gmail.com",
        "subordinates": [
            {
                "id": 9386277520,
                "firstname": "Almeta",
                "lastname": "Arne",
                "city": "Abuja",
                "email": "Almeta.Arne@gmail.com",
                "subordinates": []
            },
            {
                "id": 3054745669,
                "firstname": "Aryn",
                "lastname": "Moseley",
                "city": "Antwerp",
                "email": "Aryn.Moseley@gmail.com",
                "subordinates": [{
                    "id": 8576311021,
                    "firstname": "Justinn",
                    "lastname": "Corabella",
                    "city": "Auckland",
                    "email": "Justinn.Corabella@gmail.com",
                    "subordinates": [
                        {
                            "id": 1296560725,
                            "firstname": "Lexine",
                            "lastname": "Junie",
                            "city": "Johor Bahru",
                            "email": "Lexine.Junie@gmail.com",
                            "subordinates": []
                        },
                    ]
                },]
            },
        ]
    },
    {
        "id": 2120484163,
        "firstname": "Cassandra",
        "lastname": "Burch",
        "city": "Cologne",
        "email": "Cassandra.Burch@gmail.com",
        "subordinates": []
    },
    {
        "id": 9780067885,
        "firstname": "Gale",
        "lastname": "Corrine",
        "city": "Macapá",
        "email": "Gale.Corrine@gmail.com",
        "subordinates": [
            {
            "id": 8770061600,
            "firstname": "Nanete",
            "lastname": "Dituri",
            "city": "Abidjan",
            "email": "Nanete.Dituri@gmail.com",
            "subordinates": [
                {
                    "id": 9884622740,
                    "firstname": "Jaclyn",
                    "lastname": "Lesley",
                    "city": "Philadelphia",
                    "email": "Jaclyn.Lesley@gmail.com",
                    "subordinates": []
                },
            ]
        },
    ]
    },
    {
        "id": 8381981929,
        "firstname": "Steffane",
        "lastname": "Salvidor",
        "city": "Fort-de-France",
        "email": "Steffane.Salvidor@gmail.com",
        "subordinates": [
            {
                "id": 2914280722,
                "firstname": "Willetta",
                "lastname": "Yate",
                "city": "Nicosia",
                "email": "Willetta.Yate@gmail.com",
                "subordinates": [
                    {
                        "id": 98046676,
                        "firstname": "Jeanna",
                        "lastname": "Gaynor",
                        "city": "Valparaíso",
                        "email": "Jeanna.Gaynor@gmail.com",
                        "subordinates": [
                            {
                                "id": 7316686264,
                                "firstname": "Korrie",
                                "lastname": "Han",
                                "city": "Banda Aceh",
                                "email": "Korrie.Han@gmail.com",
                                "subordinates": [
                                    {
                                        "id": 9333308746,
                                        "firstname": "Vere",
                                        "lastname": "Lewes",
                                        "city": "Dubai",
                                        "email": "Vere.Lewes@gmail.com",
                                        "subordinates": []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }, 
    {
        "id": 2391022385,
        "firstname": "Keelia",
        "lastname": "Crudden",
        "city": "Vienna",
        "email": "Keelia.Crudden@gmail.com",
        "subordinates": [
            {
                "id": 4140525236,
                "firstname": "Deedee",
                "lastname": "Narton",
                "city": "Madrid",
                "email": "Deedee.Narton@gmail.com",
                "subordinates": []
            },
            {
                "id": 350903143,
                "firstname": "Elvira",
                "lastname": "Raffo",
                "city": "Chiang Mai",
                "email": "Elvira.Raffo@gmail.com",
                "subordinates": []
            },
            {
                "id": 3952412370,
                "firstname": "Aili",
                "lastname": "Kenwood",
                "city": "Srinagar",
                "email": "Aili.Kenwood@gmail.com",
                "subordinates": []
            },
            {
                "id": 3654858687,
                "firstname": "Flory",
                "lastname": "Burnside",
                "city": "Graz",
                "email": "Flory.Burnside@gmail.com",
                "subordinates": []
            },
        ]
    },
    {
        "id": 5417356844,
        "firstname": "Chandra",
        "lastname": "Gaynor",
        "city": "Bucharest",
        "email": "Chandra.Gaynor@gmail.com",
        "subordinates": [
            {
                "id": 3472358293,
                "firstname": "Jessamyn",
                "lastname": "Uird",
                "city": "Gaza",
                "email": "Jessamyn.Uird@gmail.com",
                "subordinates": [
                    {
                        "id": 6165251503,
                        "firstname": "Leanna",
                        "lastname": "Douglass",
                        "city": "Kraków",
                        "email": "Leanna.Douglass@gmail.com",
                        "subordinates": []
                    },
                ]
            },
            {
                "id": 1909859396,
                "firstname": "Anica",
                "lastname": "Weinreb",
                "city": "Denpasar",
                "email": "Anica.Weinreb@gmail.com",
                "subordinates": []
            },
        ]
    },    
    {
        "id": 5819233310,
        "firstname": "Nelle",
        "lastname": "Erminia",
        "city": "Saipan",
        "email": "Nelle.Erminia@gmail.com",
        "subordinates": [
            {
                "id": 4711591350,
                "firstname": "Judy",
                "lastname": "Janene",
                "city": "Tashkent",
                "email": "Judy.Janene@gmail.com",
                "subordinates": []
            },
            {
                "id": 6439533613,
                "firstname": "Damaris",
                "lastname": "Lewes",
                "city": "Samara",
                "email": "Damaris.Lewes@gmail.com",
                "subordinates": []
            },
        ]
    }, 
    {
        "id": 4273599996,
        "firstname": "Nonnah",
        "lastname": "Sidonius",
        "city": "Tashkent",
        "email": "Nonnah.Sidonius@gmail.com",
        "subordinates": []
    }
];

/**
 * Used to convert an object tree into a standard object using a recursive algorithm
 *
 * @param {Array<Object>}   data Must be an array of objects.
 *
 * @return {Object} Returns nested object of each array item with the id as its key.
 */
function formatData(data)
{
    const formattedData = {}
    function RecursiveAdd2Obj(array, formattedObject) {
        array.map( item => {
            if(item.subordinates) RecursiveAdd2Obj(item.subordinates, formattedObject)
             formattedObject[item.id] = { ...item, subordinates: [] }; //Replaces subordinates ref with fresh array
            // Following code used to change children from objects to ids
            if(item.subordinates)
            {
                item.subordinates.map( subordinate => {
                    formattedObject[item.id].subordinates.push(subordinate.id)
                })
            }
        })
    }
    RecursiveAdd2Obj(data, formattedData)
    return formattedData;
}

/**
 * Used to convert an object or array into a viewable HTML form
 *
 * @param {Object}   data Must an object containing nested objects.
 *
 * @return {String} Returns a string fit for innerHTML
 */
function formatToHTML(data)
{
    function addTabs(amount)
    {
        let str = ""
        for(let i = 0; i < amount; i++)
        {
            str += "&emsp; "
        }
        return str
    }
    function checkFor(strChck, conditionsArr) {
        for(let condition of conditionsArr)
        {
            if(strChck === condition) return true
        }
        return false
    }
    let dataAsStr = JSON.stringify(data);
    let newStr = "";
    let tabCount = 0;
    for(let i = 0; i < dataAsStr.length; i++) // for loop needed to loop through string
    {
        newStr += dataAsStr[i]

        if(dataAsStr[i] === "{" || dataAsStr[i] === "[") tabCount++;
        if(dataAsStr[i] === "}" || dataAsStr[i] === "]") tabCount--;

        if(dataAsStr[i] === "," && dataAsStr[i-1] === "}") {
            newStr += "<br>"
        }

        if(checkFor(dataAsStr[i], [ "{", ",", "[" ])) {
            newStr += "<br>" + addTabs(tabCount);
        }

        if(checkFor(dataAsStr[i+1], [ "}" , "]" ])) {
            newStr += "<br>" + addTabs(tabCount - 1);
        }
    }
    return newStr;
}

const newData = formatData(data);

document.getElementById("starting-data").textContent = JSON.stringify(data, undefined, 4);
document.getElementById("converted-data").textContent = JSON.stringify(newData, undefined, 4);

console.log("Starting Data", data);
console.log("Converted Data", newData);
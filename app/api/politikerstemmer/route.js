import { NextResponse } from "next/server";


export async function GET(request) {

    const data = [
       
        {
            id: 1,
            navn: "Yurdal Cicek",
            img: "1.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Jeg er for EU og interesser mig i at EU`s rolle i verden herunder arbejde for at bekæmpelse af global ulighed, EU som arbejder for fred og en retfærdig og bæredygtig fremtid.",
            votes: [0,1,0.5,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1]
        },
        {
            id: 2,
            navn: "Lars Fogh Mortensen",
            img: "2.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Stem på mig hvis du vil have EU politik baseret på 20 års erfaring og viden fra EU systemet på miljøområdet og hvis du synes at 1) grøn omstilling og beskyttelse af klimaet er de vigtigste sammen med 2) beskyttelsen af EU mod Rusland og andre trusler 3) vi skal have en vision om en EU wellbeing economy / trivselsøkonomi, hvor især de unges trivsel, miljø og klima er mindst ligeså vigtigt som økonomisk vækst.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1]
        },
        {
            id: 3,
            navn: "Valentina Crast",
            img: "3.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Gennem et liv som politisk aktivist for naturen og dyrene med særlig erfaring fra den internationale NGO scene, så har jeg udviklet en stærk kærlighed for europæisk politik. Og løsningerne på de store udfordringer tværs over landegrænserne er dér, jeg har noget at byde ind med. Nye tanker om et velfungerende Europa i sammenspil med resten af verden, med fokus på at være i balance med klodens bæreevne.",
            votes: [1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1]
        },
        {
            id: 4,
            navn: "Philip Tarning-Andersen",
            img: "4.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Er du træt af CO2? Så stem på en meteorolog. Jeg arbejder inden for energisketoren og ved således en del om både den videnskabelige baggrund for klimaforandringer og hvordan det europæiske elnet fungerer og ikke fungerer i praksis. Den viden vil jeg gerne bruge til at arbejde for gode løsninger inden for klima og energi i Europa-Parlamentet.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0]
        },
        {
            id: 5,
            navn: "Maria Radoor",
            img: "5.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Du skal stemme på mig, hvis du gerne vil have en kandidat der kæmper for at menneskerettighederne bliver overholdt og styrket inden for EU\'s grænser og globalt. Jeg vil i EU arbejde for at vi prioriterer udvikling og demokratiet i nærområderne, således at migration mod EU ikke længere er nødvendig. Jeg vil kæmpe for at miljø og biodiversitet kommer højest på dagsordnen I EU, så vi kan sikre mere vild natur og redde livet i vores havmiljø og åer.",
            votes: [1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1]
        },
        {
            id: 6,
            navn: "Jan Werner Mathiasen",
            img: "6.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Vi lever i sikkerhedspolitikkens tidsalder. Kina træder frem, USA træder tilbage, og Rusland træder på os alle. Som officer og militæranalytiker vil jeg arbejde for, at EU træder i karakter. Vi skal sikre os selv, vores industrier og vores værdier gennem fælleseuropæiske, langsigtede og bæredygtige løsninger på de store udfordringer. ",
            votes: [1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0.5,0,1,1,0,1]
        },
        {
            id: 7,
            navn: "Anne Sophie Callesen",
            img: "7.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg er en stemme for et bedre Europa! Det kræver et styrket EU med fokus på klimahandling og biodiversitet, grundlæggende rettigheder og fælles sikkerhed.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0]
        },
        {
            id: 8,
            navn: "Anders Vistisen",
            img: "8.jpg",
            parti: "DF",
            spidskandidat: 1,
            comment: "Jeg er Danmarks eneste EU-skeptiske kandidat til Europa-Parlamentet, der ønsker, at EU skal fylde mindre, og at vi selv skal bestemme mere. Hvis du også ønsker, at vi i højere grad bevarer retten til selvbestemmelse, og at Danmark fortsat skal have en EU-kritisk vagthund i EU, så stem på Dansk Folkeparti!",
            votes: [0.5,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1]
        },
        {
            id: 9,
            navn: "Christian Schmidt Jacobsen",
            img: "9.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "EU skal sætte fart på klimareduktionerne og beskytte natur og biodiversitet bedre bl.a. ved omlægning af landbrugsstøtten, statsstøtte til grønne industrier, øget naturbeskyttelse, strammere fiskerikvoter, og stærkere togforbindelser. Hvis jeg bliver valgt, vil jeg kæmpe for et grønnere EU.",
            votes: [1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0]
        },
        {
            id: 10,
            navn: "Julie Jacobsen",
            img: "10.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Der skal i højere grad lyttes til danskernes ønsker og behov. Danmarks selvstændighed skal der værnes om, ligesom de rettigheder som der ved en selvstændig nation, skal beskyttes. Hvert land har sine særegne og forcer, samarbejde og forskellighed nationer imellem er positivt, det skal ikke ødelægges af en udemokratisk stormagt.",
            votes: [1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1]
        },
    ];



    return NextResponse.json({ data }, { status: 200 });
}
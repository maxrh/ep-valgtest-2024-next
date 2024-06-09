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
        {
            id: 11,
            navn: "Niels Plum",
            img: "11.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Du skal stemme på mig, hvis du vil have person med en del politisk erfaring, og som vil kæmpe for en ren Østersø, samt gøre det lettere at være Europærer.",
            votes: [1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1]
        },
        {
            id: 12,
            navn: "Majbritt Birkholm",
            img: "12.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg vil arbejde kritisk men konstruktivt i parlamentet. Beslutningerne skal gavne Danmark og danskerne og øge tryghed og sikkerheden. Samarbejdet i EU skal være baseret på nationalstaten og ikke på tanken om Europas forenede stater. Jeg vil have mere Danmark mindre EU.",
            votes: [0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1]
        },
        {
            id: 13,
            navn: "Rune Bønnelykke",
            img: "13.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Som borgerlig og EU-skeptiker repræsenterer jeg værdier og holdninger, der fokuserer på at sikre vores nations suverænitet, kulturelle identitet og økonomiske selvstændighed. Jeg tror på styrken i vores nationale fællesskab og vægter beskyttelsen af vores nationale interesser højt. Stem på mig som din EU-skeptiker, hvis du ønsker en stemme i Europa-Parlamentet, der vil kæmpe for Danmarks suverænitet, nationale interesser og bevarelse af vores nationale identitet og kultur. Jeg vil være en stemme for dig og for Danmark i EU.",
            votes: [0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0]
        },
        {
            id: 14,
            navn: "Petar Socevic",
            img: "14.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Vær med til at skrive Danmarkshistorie: Stem den første minoritetsdansker nogensinde i Europa-Parlamentet. Jeg hedder Petar Socevic, er uddannet jurist ved Københavns Universitet med speciale i menneskerettigheder og stiller op for Alternativet. Jeg er valgbar i hele Danmark, og er din stemme for mangfoldighed til EU-valget 2024.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0]
        },
        {
            id: 15,
            navn: "Inger-Marie Tryde",
            img: "15.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg er inkarneret fortaler for samarbejde ml. europæiske selvstændige nationer og stor modstander af en europæisk union der agerer som var den én stat.",
            votes: [1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0]
        },
        {
            id: 16,
            navn: "Julius Schubring",
            img: "16.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Et aktivt lokalsamfund i en stærk EU, som handler progressiv og langsigtet. Digital trivsel med en EU, som giver os ejerskab over vores digitale data og rettigheder. En ny EU-landbrugsstøtte, som fremmer gode fødevarer og miljøet. Det vil jeg kæmpe for.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1]
        },
        {
            id: 17,
            navn: "Sune Nørgaard Jakobsen",
            img: "17.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg vil arbejde for at styrke dansk suverænitet, sikre bedre vilkår for danske virksomheder og beskytte danske værdier. ",
            votes: [0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0]
        },
        {
            id: 18,
            navn: "Andi Helbo Sejersen",
            img: "18.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "I en krisetid hvor krig, klimaforandringer og flygtninge fylder debatten, må vi ikke glemme den daglige politiske dagsorden. Jeg kæmper for også at holde social- og arbejdsmarkedspolitik på dagsordenen. For socialt ansvar, retfærdighed og tryghed.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0]
        },
        {
            id: 19,
            navn: "Charlotte Amdi Burgess",
            img: "19.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg har en lang erfaring med europæisk samarbejde inden for det liberal-demokratiske parti ALDE og har derfor et stort netværk som jeg kan bruge til at give Radikale Venstre en stærk position i det nye parlament",
            votes: [1,0.5,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0]
        },
        {
            id: 20,
            navn: "Marianne Vind",
            img: "20.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Jeg stiller op, fordi der er brug for en rød, grøn og dansk arbejderstemme i EU. Der er brug for en politiker, som er klar til at kæmpe med næb og klør for at forsvare den danske arbejdsmarkedsmodel. Og der er brug for en politiker, som ikke er bange for at tage kampen op mod de virksomheder, som udnytter og ødelægger både mennesker og natur.",
            votes: [1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1]
        },
        {
            id: 21,
            navn: "Finn Hartvig Nielsen",
            img: "21.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Europa skal gå foran i den grønne omstilling og vores energi skal fremover komme fra sol, vind og vand. Vi skal løse klimakrisen, sikre biodiversiteten og samtidig gøre os uafhængige af Putins Rusland. Ukraines frihedskamp er vores frihedskamp og vi skal fortsat styrke menneskerettigheder i hele EU. Det vil jeg kæmpe for.",
            votes: [0.5,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1]
        },
        {
            id: 22,
            navn: "Sissel van Run-Kvist",
            img: "22.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg er din stemme for et grønt, stærkt og frit Europa, der sætter fart på den grønne omstilling og som kæmper mod ekstremisterne på yderfløjene der vil tilbagerulle LGBT-rettigheder, går Putins ærinde og ikke tror på vores fælles samarbejde i EU. Jeg har arbejdet professionelt med EU-lovgivning i flere år og bor til dagligt i Bruxelles med min hollandske mand og vores lille søn.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0.5,1,0,0]
        },
        {
            id: 23,
            navn: "Anne-Sofie Sadolin Henningsen",
            img: "23.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Du skal stemme på mig til Europaparlamentsvalget 2024, hvis du vil sikre en kandidat, der kæmper for at en grøn fremtid bliver en realitet i Europa.Jeg har den holdning, at hvis man står overfor et problem, så må man tage ansvar. Vi har et fælles problem i klima- og biodiversitetskriserne, og jeg vil gerne være med til at tage ansvar på vegne af danskerne og finde de løsninger, som skal sikre os en grøn og bæredygtig fremtid.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1]
        },
        {
            id: 24,
            navn: "Frederik Lau Petersen",
            img: "24.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Jeg kæmper for et trygt og sikkert Europa for unge, fordi tryghed og sikkerhed er afgørende for vores trivsel og frihed. Vi skal gøre det til kernebegreber i EU\'s fremtidige politik for at sikre en endnu bedre fremtid for os, der lever ind i den.",
            votes: [1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1]
        },
        {
            id: 25,
            navn: "Søren Hansen",
            img: "25.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Der er behov for at den helt almindelig dansker er med i kernen og ikke blot højt uddannet som ikke kender til at være på gulvet.",
            votes: [1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1]
        },
        {
            id: 26,
            navn: "Magnus Flensborg",
            img: "26.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Vil du have en grøn omstilling hvor det er de rigeste og største udledere der betaler, et parlament der forbyder privatfly og investerer en masse i et grønt, billigt og godt europæisk tognet, og en solidarisk flygtningepolitik? Så stem på mig, og jeg vil gøre mit absolut bedste for at skabe rød, grøn og ung forandring i Europa.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 27,
            navn: "Martin Sibast Laugesen",
            img: "27.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "",
            votes: [1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0]
        },
        {
            id: 28,
            navn: "Asser Mortensen",
            img: "28.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Mit navn er Asser Mortensen, jeg er bosat i Aalborg med min kone og vores to børn. Som din kandidat til Europa-Parlamentet brænder jeg for at gøre Europa tryggere og mere sikkert for os alle. Jeg vil arbejde for et stærkere europæisk fællesskab, grundfæstet i de dyrebare værdier af demokrati, menneskerettigheder og retsstatsprincipper. Jeg drømmer om et Europa, hvor hver enkelt af os, kan føle os sikre på vores job og stole på, at vores velfærdssystem står klar til at støtte de mest sårbare iblandt os. Lad os sammen sikre et Europa, hvor tryghed, sikkerhed og fællesskab ikke bare er løfter, men realiteter for hver og en af os.",
            votes: [1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0.5]
        },
        {
            id: 29,
            navn: "Niels Christian Dahl",
            img: "29.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Jeg vil et EU som kan samle hele verden. Som kan vise vejen ud af klimakrisen, og at vores værdier: frihed, retfærdig og fred er et stærkt alternativ til totalitarisme og undertrykkelse. Vi skal have gensidig velstand i verden gennem værdibaseret, og ikke profitbaseret handel.",
            votes: [0.5,1,0.5,1,1,1,1,0,1,1,0,1,1,0.5,1,1,1,1,0,0,1]
        },
        {
            id: 30,
            navn: "Allan Søgaard-Andersen",
            img: "30.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "En stemme på mig, er en stemme på kampen for demokrati. Skal vi lykkedes med de store dagsordenener indenfor klima, indenfor fred i Europa og verdenen og indenfor social og økonomisk ulighed, er samarbejde og demokrati afgørende.",
            votes: [1,1,0,1,1,1,1,0.5,0.5,0,0,1,0,1,0,1,0,0,0,0,1]
        },
        {
            id: 31,
            navn: "Rikke Lauritsen",
            img: "31.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg vil kæmpe for en retfærdig, grøn omstilling i et stærkt europæisk fællesskab. Kun sammen kan vi klare de store udfordringer, vi står overfor. Til dagligt arbejder jeg som rådgiver i Europa-Parlamentet, så jeg kender til lovgivningsarbejdet - og er stolt af at være en del af Den grønne gruppe.",
            votes: [1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0]
        },
        {
            id: 32,
            navn: "Emil Njor",
            img: "32.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Man skal stemme på mig til det kommende EP valg hvis man går op i at forlænge levetiden af produkter og i at fremme reparation fremfor nykøb. Derudover bør man stemme på mig hvis man gerne vil have en ekspert i kunstig intelligens med til bordet når der skal forhandles om regulering af dette.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0]
        },
        {
            id: 33,
            navn: "Niels Fuglsang",
            img: "33.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Jeg mener, at vi har brug for en fair og grøn EU-politik, der gør os uafhængige af fremmede magter, som fremmer den grønne omstilling, og som sikrer, at de som har mest også bidrager til de nødvendige investeringer i vores fælles fremtid. Er du enig? Så overvej at give mig din stemme den 9. juni.",
            votes: [1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0]
        },
        {
            id: 34,
            navn: "Magnus Barsøe",
            img: "34.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Du skal stemme på mig, fordi jeg i over 10 år som journalist og civiløkonom har kæmpet mod banker, spekulanter, grådighed, kapitalfonde, miljøsvineri, et ulige boligmarked, landbrugets udledning af drivhusgasser og fossil lobbyisme. Og fordi jeg i 10 år har kæmpet for helt almindelige danske lønmodtageres ret til et ordentlig job, et trygt og solidarisk velfærdssamfund, der tager sig af de svageste, og en hverdag uden pesticider i grundvandet, døde fisk i deres fjorde og PFAS i deres børns flyverdragter. Den kamp har jeg tænkt mig at forsætte ufortrødent i Bruxelles. Vi har krav på et grønnere, renere, rigere og mere retfærdigt Europa med fuld beskæftigelse. Et Europa hvor finansiel spekulation og klimaskadelig produktion fylder mindre. Og hvor vi i stedet investerer mere i forskning, uddannelse og arbejde til helt almindelige danske familier.",
            votes: [1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0]
        },
        {
            id: 35,
            navn: "Thorbjørn Jacobsen",
            img: "35.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Til EU-parlamentets største opgaver har jeg unikt indblik og interesse, som kan være til gavn for os alle. Mine nøgleord til arbejdet i EU handler om Fornuft, Frihed og Fremtid. Med liberal politik kan vi gå en lysere fremtid i møde. Læs mere på https://tjliberal.dk/",
            votes: [1,0,1,0,0,0,1,1,0,0,0,1,1,0.5,1,1,1,0,0,0,0]
        },
        {
            id: 36,
            navn: "Danny Malkowski",
            img: "36.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "",
            votes: [1,0,1,0,0,0,1,1,0,0,0,1,1,0.5,1,1,1,0.5,0,0,0]
        },
        {
            id: 37,
            navn: "Louise Siv Ebbesen",
            img: "37.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Jeg vil kæmpe for, at EU koncentrerer sig om det vigtigste. Det er i min verden militær oprustning, så Europas borgere kan leve i sikkerhed fra et aggressivt Rusland. Derudover skal vi have stærkere ydre grænser, så vi kan forhindre fremtidige flygtningestrømme og uhensigtsmæssig immigration fra særligt Mellemøsten. Jeg vil også kæmpe for, at EU koncentrerer sig om at styrke handlen mellem medlemslandene, og stopper med at blande sig i nationale anliggender som fx barselsfordelingen log kvoter i bestyrelser.",
            votes: [1,0,1,0,0,0,1,1,1,0,0,1,1,0.5,1,1,1,1,0,0,0]
        },
        {
            id: 38,
            navn: "Chelle Lilly",
            img: "38.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Når vi gerne vil skabe et EU der skal fungere for alle, har vi brug for at alle deltager i samtalen. Det har altid været en drivkraft for mig, at prøve at skabe et bedre i morgen med innovative tanker, nye ideer og perspektiver.",
            votes: [1,0,1,0,0,0,1,1,0,0,0,1,1,0.5,1,1,1,0.5,0,0,0]
        },
        {
            id: 39,
            navn: "Nikolaj Steffenauer",
            img: "39.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "EU skal koncentrere sig om de opgaver, hvor vi medlemslande sammen er stærkere. EU skal derimod ikke blande sig i områder såsom barsels- og ferielovgivning, som medlemslandene sagtens kan finde ud af at varetage selv.",
            votes: [1,0,1,0,0,0,1,1,0,0,0,1,1,0.5,1,1,1,0.5,0,0,0]
        },
        {
            id: 40,
            navn: "Carsten Normann",
            img: "40.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Jeg er en international dansk statsborger der både har arbejdet og boet i flere medlemslande, bl.a. Polen og Spanien. Jeg kender til fordelene og udfordringerne med et EU der ofte vil for meget på de forkerte områder. Jeg har med min baggrund som topleder over 20 år evnerne til at danne de netværk og kontakter i et internationalt miljø som EU parlamentet så jeg kan påvirke min kommende kollegaer til at lytte til Danmark.",
            votes: [1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0.5,0,0]
        },
        {
            id: 41,
            navn: "Johannes Slyngborg",
            img: "41.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "En stemme på mig, er en stemme på en progressiv, ambitiøs og ung person som stræber efter at verden bliver et bedre sted at være. Her tales der om en bæredygtig verden for alle, da der altid skal være plads til alle, uanset hvor man kommer fra.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1]
        },
        {
            id: 42,
            navn: "Taner Genc",
            img: "42.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg stiller op til EU-valg, fordi jeg drømmer om et EU og en verden uden krig og fattigdom, hvor klimakrisen er højt prioriteret. Jeg mener, at EU har brug for et nyt, ambitiøst flertal, der kæmper for en grøn fremtid, demokrati, frihed, solidaritet og internationalt samarbejde. Jeg vil kæmpe for et grønt og socialt Europa, der sætter mennesker før markedet og passer på vores planet.",
            votes: [1,1,1,1,1,1,1,0,1,1,0.5,1,1,1,1,1,0,0.5,0.5,1,0]
        },
        {
            id: 43,
            navn: "Andreas Grosbøll",
            img: "43.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "",
            votes: [1,0,1,0,0,0,1,1,0,0,0,1,1,0.5,1,1,1,0.5,0,0,0]
        },
        {
            id: 44,
            navn: "Thue Grum-Schwensen",
            img: "44.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Valget skal være et klimavalg, men det også vigtigt at sikre et socialt fair Europa. Uligheden er vokset kolossalt i Danmark og i store dele af EU. De rigeste skal være med til at betale for den grønne omstilling, og lønmodtagernes rettigheder skal sikres. Jeg har arbejdet som covid-tester, taxa-chauffør med mere - og kender også de dele af arbejdsmarkedet. Stem en fra virkeligheden i Europa-parlamentet.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,0.5,1,0.5,0,0.5,0,0,0]
        },
        {
            id: 45,
            navn: "Kristine Amalie Rostgård",
            img: "45.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Med en fortid i #HvorErDerEnVoksen er jeg motiveret af at passe på Europas børn. Vi skal fokusere på klima, sikkerhedspolitik og sikre rettigheder. Jeg er specialist i russisk herskerkultur, og mener at vi bør sanktionere klogere overfor Rusland. Derudover skal vi sikre børn og unges rettigheder bedre, og ikke mindst forbyde vold mod børn i hele EU.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,1,0.5,1,0.5,0,0,0,0,0]
        },
        {
            id: 46,
            navn: "Kim Elmose",
            img: "46.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg kæmper for sociale rettigheder i et EU, hvor borgernes sociale og arbejdsmæssige rettigheder er sikrede, så ingen er økonomisk udsatte, når vi skal gennemføre den nødvendige grønne transformation af samfundet.",
            votes: [1,1,0,1,1,1,1,0,1,1,0.5,1,0.5,1,1,1,1,1,1,0,0]
        },
        {
            id: 47,
            navn: "Pia Lieberknecht",
            img: "47.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg vil arbejde for, at vi gennem EU skaber en bæredygtig verden med væredygtige hverdage.",
            votes: [1,1,0,1,1,1,1,0,1,1,1,1,0,0.5,1,0.5,0,0.5,0,0,0]
        },
        {
            id: 48,
            navn: "Karin Liltorp",
            img: "48.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Der er et stort uudnyttet potentiale i EU, og vi kan få meget mere glæde af hinanden end i dag. Bl.a. på sundhedsområdet kan vi lære meget af hinanden, hvis vi får skabt de rigtige systemer. Jeg er dybt optaget af vidensdeling, og netop dette område vil jeg arbejde for at få optimeret - vi er bare klogere sammen.",
            votes: [1,0.5,1,1,0.5,0.5,1,0,0.5,0,0,0.5,1,1,1,1,0.5,0,0,0,1]
        },
        {
            id: 49,
            navn: "Karoline Lindgaard",
            img: "49.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Man skal stemme på mig, fordi jeg kæmper for ambitiøs klimahandling, et Europa uden giftige kemikalier og et Europa uden diskrimination på baggrund af køn, seksualitet eller etnicitet. Derudover har vi brug for flere unge stemmer i Europa-Parlamentet - jeg vil være en ung, grøn og progressiv stemme i Europa.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,0.5,1,1,1,1,1,1,0,1]
        },
        {
            id: 50,
            navn: "Villy søvndal",
            img: "50.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg stiller op fordi jeg anser EU som den vigtigste forandringskraft i forhold tilmed store spørgsmål: klima, miljø og natur,  udenrigspolitik og sikkerhedspolitik samt social sikkerhed og håndtering af immigrationspres. Jeg har meget politisk erfaring og et meget bredt netværk, som jeg tror er både nyttigt og vigtigt. Endelig har jeg lysten og kræfterne til at tage fat på opgaverne. Vh Villy Søvndal",
            votes: [1,1,0,1,1,1,1,0,1,1,0.5,1,0.5,1,1,1,0,0.5,0.5,0,0]
        },
        {
            id: 51,
            navn: "Lars Høyer Holmqvist",
            img: "51.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Nærhedsprincippet skal være et bærende element i EU. Alle beslutninger skal træffes så tæt på borgerne som muligt.",
            votes: [1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0.5,1,1]
        },
        {
            id: 52,
            navn: "Kim Pagels",
            img: "52.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Har erfaring med EU-samarbejdet via tidligere ansættelse i EU, brænder for the europæiske samarbejde - vi kan utroligt meget når vi står sammen i Europa, og vi kan være det internationale kraftcenter som driver de nødvendige forbedringer indenfor bl.a. klima/natur, sikkerhed og immigration.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1]
        },
        {
            id: 53,
            navn: "Tobias Weische",
            img: "53.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Du skal stemme på mig til Europa-Parlamentsvalget hvis du ønsker færre migranter til Danmark, mindre magt til politikerne i Bruxelles og mere magt til nationalstaterne. Stem nej til EU, Danmark kan godt selv.",
            votes: [0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1]
        },
        {
            id: 54,
            navn: "Carsten Sørensen",
            img: "54.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "En stemme på mig er en stemme på mere national bestemmelse og mindre magt til EU. Vi skal sætte danskerne først - også i EU.",
            votes: [0,0,1,0,0.5,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1]
        },
        {
            id: 55,
            navn: "Elias Julius Binggeli",
            img: "55.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Vi har brug for flere unge europa-parlamentarikere. Og når EU står på tærsklen af klimakatastrofer, krig og et kollaps af havmiljøet, nytter det ikke at det er folk der ikke skal leve i den verden, der laver lovgivning til den.",
            votes: [1,1,0.5,1,1,1,1,0,1,1,0.5,1,0,0.5,1,0.5,0,0,0,0,0]
        },
        {
            id: 56,
            navn: "Martin Schepelern",
            img: "56.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg tror på, at et stærkere EU er svaret for Danmark og Europa på de alvorlige udfordringer som vi står overfor. Klima, sikkerhed og migration hænger sammen og kræver fælles løsninger og ansvar.",
            votes: [1,0.5,1,1,1,1,1,0,1,0.5,0,1,1,1,1,1,1,1,0,1,1]
        },
        {
            id: 57,
            navn: "Kira Marie Peter-Hansen",
            img: "57.jpg",
            parti: "SF",
            spidskandidat: 1,
            comment: "SF er garanten for et grønnere og mere retfærdigt Europa, og har været det i årtier. Vi har presset på for den klimalov, vi nu har fået, og det er os, der presser på for at videreudvikle den grønne omstilling, frem for at bremse den, som dele af højrefløjen ønsker. Vi kæmper dagligt for at sikre bedre arbejds- og levevilkår, og for et demokratisk og solidarisk Europa.",
            votes: [1,1,1,1,1,1,1,0,1,1,0.5,1,1,1,1,1,0,0,0,0,1]
        },
        {
            id: 58,
            navn: "Mads Hvid",
            img: "58.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg vil kæmpe for et Europa som sætter borgernes trivsel og muligheder, kampen for klimahandling og demokrati i centrum for den førte politik. Jeg vil arbejde for at den grønne omstilling kommer flertallet af europæere til gavn ved at skave gode jobs, bedre og billigere boliger og sikre den natur vil lever i og af.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0.5,1]
        },
        {
            id: 59,
            navn: "Reinout Bosch",
            img: "59.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Man skal stemme på Enhedslisten for at sende arbejdende stemmer til Bruxelles. Kun en stærk venstrefløj kan tage kampen op med de 45.000 lobbyister som arbejdsgiverne har udstationeret dernede.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,0.5,0.5,0.5,0,0,1,1,1]
        },
        {
            id: 60,
            navn: "Mikael Hertig",
            img: "60.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Jeg har blik for at kunne se, hvilke aktører der tidligt påvirker initiativer, der bliver til dansk lov.",
            votes: [1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1]
        },
        {
            id: 61,
            navn: "Ibrahim Benli",
            img: "61.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "En stærkere venstrefløj i EU-parlamentet er afgørende for et grønt og solidarisk europæisk samarbejde, der prioriterer natur, klima, velfærd og menneskerettigheder over markedet og kapital. Jeg vil være med til at styrke venstrefløjens kamp i EU-parlamentet.",
            votes: [1,1,0,1,1,1,1,1,1,1,0,0,0.5,1,1,1,0,0,0,1,1]
        },
        {
            id: 62,
            navn: "John Brandt",
            img: "62.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg ønsker et Europa der fokuserer på Klima, miljø sikkerhed og menneskerettigheder. Vi har ikke arvet planeten fra vores forældre, men lånt den af vires børn. Det samme gælder for de rettigheder vi har. Vi skal værne om begge ting og aflever det i ordentlig stand til næste generation.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0]
        },
        {
            id: 63,
            navn: "Nikolai Tange",
            img: "63.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg er en ung, socialliberal kandidat. Til dagligt studerer jeg på CBS, og så stiller jeg op for Radikale Venstre til EP-valget. Man skal stemme på mig, fordi jeg vil gøre alt jeg kan, for at være de unges socialliberale, fornuftige stemme i Europa-Parlamentet.",
            votes: [1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1]
        },
        {
            id: 64,
            navn: "Mads Strange",
            img: "64.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "Som Liberal Alliances unge kandidat kæmper jeg for, at EU kan stå stærkere sikkerhedspolitisk, at vi får sat skub i den grønne omstilling og at vi skaber bedre vilkår for, at der også i fremtiden vil være vækst og velstand på det europæiske kontinent.",
            votes: [1,0,1,1,0,0,1,0.5,0,0,0,1,1,1,1,1,0,0.5,0,0,0]
        },
        {
            id: 65,
            navn: "Mathias Niebuhr",
            img: "65.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Fordi der er brug for at blive gennemført en enorm grøn omstilling af hele Europa - men gjort på en måde hvor man også passer på og hjælper de svageste og mest udsatte i vores samfund. Vi skal være grønne mens vi er socialt ansvarlige. Og så er der brug for flere unge medlemmer af parlamentet.",
            votes: [1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1]
        },
        {
            id: 66,
            navn: "Ludvig Goldschmidt",
            img: "66.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "En stærk venstrefløj kan sikre en solidarisk, grøn og retfærdig fremtid. Sammen kan vi bygge et Europa på flertallets betingelser.",
            votes: [1,1,1,1,1,1,1,0.5,1,1,0,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 67,
            navn: "Jan Kristoffersen",
            img: "67.jpg",
            parti: "ALT",
            spidskandidat: 1,
            comment: "Jeg fastholder fokus på, at verden skal producere indenfor de grænser som kloden sætter. Derfor skal der være et globalt sæt spilleregler for produktion. Fremtidens handelsaftaler skal indeholde det regelsæt.",
            votes: [1,1,1,1,0.5,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1]
        },
        {
            id: 68,
            navn: "Jens Frost",
            img: "68.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Bedre interrail skal binde Europa sammen. Det vil give særligt de unge oplevelser for livet af det europæiske fællesskab og dets mange rare mennesker. Det er nu, der skal handles for at sikre klimaet og reducere de alvorlige konsekvenser vi kun har set starten på. Jeg vil med stærke værdier finde alliancerne, forhandle løsningerne og give et bedre Europa videre.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0]
        },
        {
            id: 69,
            navn: "Sofie Groth",
            img: "69.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Mine mærkesager til EP-valget er: 1.	En human flygtninge politik - EU skal garantere minoriteters rettigheder. EU er nødt til at være garanten for, at vi løser flygtningeproblematikken ved at bekæmpe de grundlæggende årsager til flugt og migration. Antallet af tabte menneskeliv på Middelhavet er ifølge tal fra FN’s Migrationsorganisation stigende, selvom det fylder mindre og mindre i mediebilledet. Det er en virkelighed, som EU er nødt til at forholde sig til og tage et fælles ansvar for. 2.	Omlæg landbrugsstøtten til at fremme plantebaseret, økologisk og regenerativt landbrug. Den nuværende landbrugsstøtte bør omstruktureres for at støtte mere bæredygtige og miljøvenlige landbrugspraksisser. 3.	Bevar mindst 30% vild natur i hele Europa og opnå tilsvarende målsætning i Danmark. EU har brug for klimahåndværkere – ikke klimahyklere. Og det er en EU-opgave at beskytte naturen og biodiversiteten i Europa. EU skal sikre beskyttede naturområder svarende til mindst 30 procent af EU’s land- og havområder, og plante flere træer – blandt andet ved at omlægge landbrugsarealer til skov. Erfaring: Til dagligt arbejder jeg som klinisk børnepsykolog i Røde Kors, hvor jeg behandler uledsagede og ledsagede børn og unge med traumer samt er politisk rådgiver for Alternativet.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,1,0.5,1,1,0,1,1,1]
        },
        {
            id: 70,
            navn: "Nicklas Verne",
            img: "70.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Kære vælger. Du skal stemme på mig, hvis du ønsker et mere sikkert Europa, et mere velhavende Europa og et mere grønt Europa. Jeg er forhenværende Vice-generalsekretær for European Democrat Students (EDS), og har haft EU politik meget tæt på mit daglige liv. Jeg vil kæmpe for dig og dine visioner i Europa-parlamentet.",
            votes: [1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0.5,0,0,0,0,1]
        },
        {
            id: 71,
            navn: "Michael egelund Andersen",
            img: "71.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Folkesundhed i EU, Vi skal satse på mennesker! Vi skal sørge for, at alle europæere har adgang til sundhed. Bekæmpelsen af antimikrobiel resistens, indsats mod kræft og ansvarlig fødevaremærkning. Derfor skal du stemme på mig, for at sikrer en sundere EU, Fyn i EU.",
            votes: [1,1,1,1,1,1,1,0,1,0.5,0.5,1,1,1,1,1,0,0,0.5,0,0.5]
        },
        {
            id: 72,
            navn: "Jørn Grønkjær",
            img: "72.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Mange års erfaring med nordisk og europæisk samarbejde indenfor turisme, kultur, miljø og e-mobilitet. Desuden er jeg en af de 3 stiftere af miljøkonceptet Den grønne Nøgle, som nu er udviklet til det globale GREEN KEY. Er også debattør.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1]
        },
        {
            id: 73,
            navn: "Flemming Agerskov",
            img: "73.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "For en stærk kommunikator på de store EU sprog, med fokus på det der giver resultater. Klima er meget vigtigt - EU kan gøre en forskel uden at vi taber økonomisk eller sikkerhedsmæssigt på den globale scene. Sikkerhedspolitisk indsigt og forståelse over en bred kam, forsyningssikkerhed, egenproduktion er også forsvarsevne.",
            votes: [1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1]
        },
        {
            id: 74,
            navn: "Marianne Lynghøj",
            img: "74.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Et sikkert EU er et bæredygtigt EU. Derfor vil jeg bruge min erfaring fra dansk erhvervsliv til at gøre EU\'s klimamål til konkret klimahandling. Vi skal skabe et klimaneutralt EU gennem erhvervslivets innovative, grønne løsninger, hvor bæredygtighed skaber velstand og frihed.",
            votes: [1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0.5,0.5]
        },
        {
            id: 75,
            navn: "Sigrid Friis",
            img: "75.jpg",
            parti: "RV",
            spidskandidat: 1,
            comment: "Jeg ønsker at give et grønnere Europa videre til den næste generation. Derfor skal vi stoppe med at importere sort gas fra Putins Rusland, vi skal i stedet have meget mere grøn energi i unionen. Vi skal knokle for at nå klimamålene og bremse temperaturstigningerne - og så skal vi passe bedre på naturen, både til lands og til vands.",
            votes: [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0]
        },
        {
            id: 76,
            navn: "Erik Poulsen",
            img: "76.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Livslang erfaring og sunde synspunkter. Grøn omstilling under udvikling af vores erhverv. EU skal have en højere selvforsyning, kritiske produkter fra bla Kina skal produceres i medlemslandene.  Migrant strømmen skal stoppes og hjælpes mere lokalt, EU skal åben for det arbejdskraft medlemslandene skal bruge.",
            votes: [1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1]
        },
        {
            id: 77,
            navn: "Per Clausen",
            img: "77.jpg",
            parti: "EL",
            spidskandidat: 1,
            comment: "Jeg vl fokusere på en effektiv og retfærdig løsning af klima- og miljøudfordringerne, som skaber flere gode arbejdspladser. Regningen skal sendes til de rigeste og de største forurenere. Økonomisk dårligt stillede skal holdes økonomisk skadesløse.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 78,
            navn: "Helle Laursen Petersen",
            img: "78.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg tænker at det er en god ide at der kommer politikere ind med reel erhvervserfaring og jeg kan bidrage med stor viden på det digitale område som halter i mange europæiske lande. Samtidigt har jeg et stort hjerte for sundhedspolitikken og hvorfor skal vi i DK vente 6-7 år på virksomt medicin som allerede er godkendt i andre europæiske lande? Lad os få en fælles europæisk organisation til fx godkendelse af medicin og fastlæggelse af prisstruktur på samme.",
            votes: [0.5,0.5,1,1,0.5,0,1,0.5,0,0,0,1,1,0,1,0.5,0,1,0,0,1]
        },
        {
            id: 79,
            navn: "Mette Sode Hansen",
            img: "79.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg går ind for, mere Danmark mindre EU. Forstået på den måde, at danskerne skal selv bestemme over eget land og ikke dikteres udefra. Der skal ikke ske flertalsafgørelser, hvor det risikeres at mindre lande får meget lidt af sige. Jeg ønsker ikke, at vi bliver en del af et Europas forenede stater, hvor vi ikke længere vil have selvbestemmelse. Jeg ønsker ikke at sende danske soldater på EU mission under andre landes kommando. I det hele taget synes jeg at EU allerede er blevet så stort og uoverskueligt, at de danske medier ikke engang dækker de mest horrible beslutninger der træffes i EU parlamentet.",
            votes: [0,0,1,0,0.5,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1]
        },
        {
            id: 80,
            navn: "Carsten Kissmeyer",
            img: "80.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Jeg har en meget bred politisk erfaring fra kommunalpolitik (borgmester i 16 år), regionsråd og Folketing - jeg har en solid politisk erfaring også fra en lang række bestyrelser.",
            votes: [0.5,0.5,1,0.5,1,0.5,1,0,1,0,0,1,1,1,1,1,0.5,1,0,0,1]
        },
        {
            id: 81,
            navn: "Helle Jensen",
            img: "81.jpg",
            parti: "LA",
            spidskandidat: 0,
            comment: "EU skal koncentrere sig om, at finde fælles løsninger på de fælles udfordringer vi har. Sikkerhed, klima, migration, styrkelse af det indre marked og mindre bureaukrati. Samtidig skal EU respektere nærhedsprincippet, barsel, kønskvoter og arbejdstidsregistrering er eksempler på, hvad EU ikke skal blande sig i.",
            votes: [1,0,1,0,0,0,1,0.5,0,0,0,1,1,0,1,1,1,1,0,0,0]
        },
        {
            id: 82,
            navn: "Manuel Vigilius",
            img: "82.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg vil arbejde for at sikre vores forsvar og EUs grænser, bekæmpe radikalisering og terror, og for at EU bliver en stærkere stemme for alle slags truede mindretal verden over, herunder jøder og forfulgte kristne, som er næsten usynlige i offentligheden.",
            votes: [1,0.5,1,1,0.5,0,1,1,0,0,0,1,1,1,1,0.5,0,0,0,0,0.5]
        },
        {
            id: 83,
            navn: "Jacob Rosenberg",
            img: "83.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg har god indsigt i sundhedsområdet og kan her bidrage væsentligt udover de mere traditionelle EU-fokusåmråder som forsvar/sikkerhed, migration oh klima.",
            votes: [1,1,1,1,0,0,1,0.5,0,1,0,1,1,0.5,1,0.5,0.5,1,0,0,1]
        },
        {
            id: 84,
            navn: "Stine Bosse",
            img: "84.jpg",
            parti: "M",
            spidskandidat: 1,
            comment: "Mit hjerte banker for Danmark óg Europa. Europa står overfor udfordringer, der kan synes uoverskuelige. Krigen i Ukraine, det endnu uløste migrationsproblem, og voldsomme og altødelæggende klimaforandringer, er noget af det, vi skal løse sammen i vores europæiske fællesskab. For vi kan ikke løse udfordringerne alene. Jeg vil kæmpe for et handlekraftigt, grønt og sikkert Europa.",
            votes: [1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1]
        },
        {
            id: 85,
            navn: "Vladimir Stanic",
            img: "85.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Som borgerlig går jeg op i personlig frihed og vil arbejde for at vi bevarer vores ret til selvbestemmelse, men kan samtidig også se fordelen i det vi kan udrette i fællesskab med EU.",
            votes: [1,0.5,1,1,0,1,0,0.5,0,0,0,0.5,1,0.5,0.5,1,0,1,0,0.5,0.5]
        },
        {
            id: 86,
            navn: "Barikan Solecki",
            img: "86.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Jeg vil betale tilbage til Danmark ved værne om vores demokratiske værdier i Europa. Jeg er en midtersøgende politiker, der fagligt, erhvervsmæssigt og med stærke personlige erfaringer vil bidrage til et tryggere Danmark og et stærkere EU gennem en fælles forsvarspolitik og en reguleret, balanceret migrationspolitik. Jeg sigter efter en tilgang, hvor kontrol og sikkerhed går hånd i hånd med humanitet og solidaritet. Derfor er mit fokus at fremme vækst og velfærd ved at sikre kvalificeret arbejdskraft til danske virksomheder.",
            votes: [1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1]
        },
        {
            id: 87,
            navn: "Irina Bjørnø",
            img: "87.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "I dag står jeg her som en stolt borger, der engang kom fra Rusland og nu kalder Europa mit hjem. For nogle år siden tog jeg den afgørende beslutning om at flytte til Europa. Jeg søgte efter muligheder, kulturel mangfoldighed og en dybere forståelse af verden omkring mig. Jeg fandt alt dette og mere i Europa. Min rejse har lært mig, hvor vigtigt det er at værdsætte de værdier, der er grundlaget for Europa. Her handler det ikke kun om at dele et kontinent, men også om at dele værdier som frihed, demokrati og respekt for menneskerettigheder. Jeg vil gerne opfordre jer alle til at deltage i dagens valg. Europa har åbnet sine døre for mig, og jeg er stolt over at kunne udtrykke min mening og forme fremtiden sammen med jer alle. Europa er mere end blot en geografisk placering; det er en følelse af fællesskab og samhørighed. Lad os fortsætte med at bygge et Europa, der er åbent, mangfoldigt og inkluderende. Lad os værne om de værdier, der gør dette kontinent til et hjem for os alle. Gå ud og stem, og lad os sammen forme vores fælles fremtid. Tak for jeres støtte og for at give mig muligheden for at kalde Europa mit hjem.",
            votes: [1,1,1,1,0.5,0.5,0,0.5,0,1,0,1,0,0.5,1,1,0,0,1,0.5,1]
        },
        {
            id: 88,
            navn: "Abdinoor Adam Hassan",
            img: "88.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Derfor skal du stemme personligt på mig. Jeg ved i kraft af min ikke ubetydelige erfaring, at vi mennesker, i overvejende grad, ligner hinanden mere, end vi måske går og tror. Derfor kan jeg se fornuften i Moderaternes projekt om at samle danskerne om dét vi deler, fremfor dét der adskiller os. Det samme gør sig gældende i Europa. Sammen er vi stærkest.",
            votes: [1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1]
        },
        {
            id: 89,
            navn: "Rasmus Nordqvist",
            img: "90.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Igen ved dette valg står vi over for et vigtigt spørgsmål - skal vi handle på klima- og biodiversitetskrisen og sikre social balance i Europa, eller skal ‘business as usual’ forsvares? Jeg vil kæmpe hver dag for, at den grønne omstilling bliver overskrift på dagsorden i Europa. Vi kan forhandle med hinanden - ikke med kloden.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0.5,1,1,1,0,1,1,0,0.5]
        },
        {
            id: 90,
            navn: "Tobias William Marney",
            img: "90.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Mit efternavn Marney stammer fra Sydafrika, hvor min fars familie var en del af det farvede mindretal. Jeg har en dyb tro på demokrati og frihed. Som Moderat mener jeg, at politik handler om resultater. Så stem på sikkerhed, klimahandling og styr på sociale medier.",
            votes: [1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0]
        },
        {
            id: 91,
            navn: "Selma Bolø",
            img: "91.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Jeg kæmper et bedre EU, der går forrest og viser hvordan ambitiøs klimahandling, der skaber grønne jobs og gode arbejdsvilkår, ser ud. EU skal passe bedre på naturen og lave omfattende naturgenopretning, så vores skove og have igen kan trække vejret. Og så skal vi sikre at mennesker på flugt får en ordentlig behandling, når de kommer til vores kontinent - ingen flygter for sjov. Stem på mig for en ung, grøn og solidarisk stemme i Europa-Parlamentet.",
            votes: [1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 92,
            navn: "Frederikke Hellemann",
            img: "92.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Med buldrende klimaforandringer og en natur på tilbagegang er der ingen tvivl om, at vejen til et trygt Europa går gennem et grønt Europa. Skal vi lykkes med den store opgave skal vi have alle med. Derfor vil jeg sætte turbo under den grønne omstilling og sende regningen til forureneren.",
            votes: [1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 93,
            navn: "Jakob Dyrman",
            img: "93.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Jeg er dybt optaget af af de muligheder Danmark har gennem EU. Sammen står vi stærkere mod de udfordringer der allerede er og som kommer. Det gælder både indenfor Klimasituationen og sikkerhedspolitikken. Følg mig på min hjemmeside https://jakobdyrman.dk",
            votes: [1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1]
        },
        {
            id: 94,
            navn: "Asta Kofod",
            img: "94.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Hvis man ønsker en ung stemme i EU, der vil skabe en sikrere og bedre fremtid for de kommende generationer. Både når det handler om Klima, rettigheder, demokrati og velfærd - alle sammen essentielle ting for en god fremtid!",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0]
        },
        {
            id: 95,
            navn: "Clara Turms",
            img: "95.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "EU skal sætte menneskerettigheder, ligestilling og klimahandling før kortsigtet profit. Jeg kæmper for en solidarisk flygtningepolitik, ambitiøs klimahandling og et feministisk EU.",
            votes: [1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0]
        },
        {
            id: 96,
            navn: "Melina Andersen",
            img: "96.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Uligheden stiger, fordi de rige stikker af fra resten af os. Men vi kan bruge EU til at indføre en fælles formueskat, så de rige faktisk betaler deres andel. Uligheden bliver mindre, sammenhængskraften større og vi holder hånden under velfærden i Europa. Det er mit vigtigste fokus.",
            votes: [1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0]
        },
        {
            id: 97,
            navn: "Ulla Tørnæs",
            parti: "V",
            spidskandidat: 0,
            comment: "Jeg vil kæmpe for et trygt og sikkert Europa med fred og frihed. At klimaudfordringerne og den grønne omstilling løses i fællesskab, kun derved når vi klimamålene. Jeg vil sætte en stopper for den illegale invandring til Europa.",
            votes: [1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0],
            img: "97.jpg"
        },
        {
            id: 98,
            navn: "Nilas Baya-Foged",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Jeg vil arbejde for EU går forrest i den grønne omstilling, at vi styrker det indre marked til at være fair og bæredygtigt, og at der gives støtte til medlemslandendes grønne omstilling ift. landbrug, produktion og forbrug. For 10 år siden lancerede vi Alternativet, for dansk politik manglede grønne visioner og større inddragelse af borgere. Nu er turen kommet til EU!",
            votes: [1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0],
            img: "98.jpg"
        },
        {
            id: 99,
            navn: "Vivi Altenburg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Jeg synes du skal stemme på mig, da jeg kommer med en profil som folk er flest. Sund fornuft og masser af erhvervserfaring og en balanceret tilgang til livet og politikken, ikke en kandidat der skal leve af EU. Jeg vil gerne gøre EU slankere.",
            votes: [0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
            img: "99.jpg"
        },
        {
            id: 100,
            navn: "Alexandra Sasha",
            parti: "V",
            spidskandidat: 0,
            comment: "Som iværksætter, der står for handling frem for ord, har jeg personlig erfaring med, hvordan EU-politik påvirker virksomheder. Jeg vil arbejde for at forbedre rammerne for europæiske virksomheder og sikre, at vi står stærkt i den globale konkurrence. Jeg kæmper for en fair og ambitiøs klimapolitik, der både tager højde for de store udfordringer og styrker energiinfrastrukturen og sikkerheden. Mit mål er at fremme markedsbaseret bæredygtighed, beskytte miljøet og skabe nye arbejdspladser. Med mit slogan, 'Folk taler, jeg gør noget ved det,' er jeg engageret i at sikre konkrete resultater, der gør EU stærkt og fremtidssikret.",
            votes: [1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0],
            img: "100.jpg"
        },
        {
            id: 101,
            navn: "Niels Flemming Hansen",
            parti: "KF",
            spidskandidat: 1,
            comment: "Jeg stiller op, fordi jeg ønsker at være en afgørende stemme. Det Konservative Folkeparti sidder i parlamentets største gruppe, EPP, og det er vigtigt for Danmark at der sidder danskere i den gruppe. Jeg er en grøn, borgerlig stemme der arbejder.",
            votes: [1.0, 0.5, 1.0, 1.0, 1.0, 0.0, 1.0, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 0.5, 1.0, 0.5, 0.5, 0.0, 0.0, 0.0, 0.0],
            img: "101.jpg"
        },
        {
            id: 102,
            navn: "Morten Løkkegaard",
            parti: "V",
            spidskandidat: 1,
            comment: "Jeg vil gøre en forskel for Danmark. Vi skal have et stærkt Danmark i et sikkert Europa. Samtidig er det min mission at være med til at styrke kendskabet til vores europæiske fællesskab ved at fortælle om vores arbejde i Europa-Parlamentet. Vi skal skabe tryghed i Europa. Krigen i Ukraine, presserende klimaforandringer og kampen for at sikre vores fremtidige velstand og vækst i EU er alle udfordringer, vi skal løse for at skabe tryghed for danskere og vores virksomheder. Dét handler valget om.",
            votes: [1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 0.0, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 0.0],
            img: "102.jpg"
        },
        {
            id: 103,
            navn: "Joan Kragh",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg brænder for klima og den sociale dagsorden. Det er grænseoverskridende udfordringer. Jeg kæmper for et EU, hvor grøn energi, biodiversitet, grønt landbrug og rent vandmiljø går hånd i hånd med en intensiv kamp for sundhed, velfærd og ordentlige arbejdsforhold.",
            votes: [1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 0.5, 0.0, 1.0, 1.0],
            img: "103.jpg"
        },
        {
            id: 104,
            navn: "Kathrine Olldag",
            img: "104.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Jeg har altid villet det europæiske fællesskab. Fordi jeg føler, jeg er lige så meget europæer, som jeg er dansker. Fordi jeg er barn af den kolde krig og murens fald. Fordi Danmark er en del af det europæiske værdi-, kultur- og skæbnefællesskab, som vi stadig har til gode at stemple fuld og helt ind i. Fordi alle veje fører gennem Europa, hvis vi skal komme helskindede gennem klima-, migrations-, biodiversitets- og forsyningskrisen sammen.",
            votes: [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1]
        },
        {
            id: 105,
            navn: "Bergur Løkke Rasmussen",
            img: "105.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Jeg genopstiller til Europa-Parlamentet, fordi jeg mener, at vi står overfor en række grænseoverskridende og alvorlige udfordringer. Det er kun igennem fælles løsninger i EU vi kan adressere klimaet, migrationen, vores sikkerhed og meget andet. Det vil jeg gerne være med til at arbejde for vi gør på en balanceret og realistisk måde, hvor vi får befolkningerne med.",
            votes: [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1]
        },
        {
            id: 106,
            navn: "Anette Jensen Smith",
            img: "106.jpg",
            parti: "ALT",
            spidskandidat: 0,
            comment: "Jeg vil prioritere klima og miljø, ikke mindst vores havmiljø. Havet er grundlag for alt liv på kloden, men vi er godt i gang med at dræbe alt liv i det, fordi vi stadig i 2024 bruger havet som skraldespand for alle de stoffer, som vi ikke ved hvad vi ellers skal gøre ved. og hvorfor? For at redde arbejdspladser, som kunne reddes på SÅ mange andre og langt bedre måder i den grønne omstilling. Der er brug for globale aftaler, for at vi får stoppet spredningen af gift til havet og til vores grundvand. Det samt et generelt globalt producentansvar på alle typer af produkter, vil jeg arbejde utrætteligt for. I Alternativet bygger vi vores politik på de tre bundlinjer: Miljø (inkl. klima og biodiversitet), Socialt ansvar og økonomi. Og de bør alle tre vægte lige højt, når der træffes politiske beslutninger.",
            votes: [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1]
        },
        {
            id: 107,
            navn: "Torsten Laksafoss Holbek",
            img: "107.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Jeg kæmper for et stærkt, grønt og sikkert Europa. Det kræver, at vi styrker Danmarks og Europas forsvar og våbenindustri massivt, så vi kan støtte Ukraine og samtidig tage vare på vores egen sikkerhed. Danmark og Europa har løsningerne og virksomhederne til at løse klimakrisen. Nu skal vi sikre, at der er nok medarbejdere til virksomhederne. Og vi skal fjerne bureaukrati og regler, som sætter en stopper for den grønne virkelyst. Bureaukrati må heller ikke gå ud over det lokale foreningsliv. Derfor vil jeg arbejde for at der indføres bagatelgrænser for databeskyttelsesregler, så de ikke rammer den lokale boldklub, skakforening eller tømreren i landsbyen. Jeg tror på Europa som det bedste, frieste og rigeste kontinent at leve på. Nu er det vores opgave at arbejde for et sikkert og grønt Europa for kommende generationer.",
            votes: [0, 0.5, 1, 1, 1, 1, 1, 0, 0.5, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0]
        },
        {
            id: 108,
            navn: "Lars Barfoed",
            img: "108.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Fordi jeg er moderat og ønsker at gennemføre politik fra midten. Desuden fordi jeg har stor både politisk og erhvervsmæssig erfaring både som folketingsmedlem og minister.",
            votes: [1, 1, 1, 1, 0, 0, 1, 0, 0.5, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0.5]
        },
        {
            id: 109,
            navn: "Martin Vendel Nielsen",
            img: "109.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg stiller op til EP-valget for at skabe en grøn og sikker fremtid for Danmark og EU. Ukraines frihed er også Danmarks frihed. Vi må ikke glemme klimaet og miljøet, selvom sikkerhedspolitikken desværre fortsat vil fylde meget på dagsordenen de kommende år.",
            votes: [1, 0.5, 1, 1, 0.5, 0, 0.5, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0]
        },
        {
            id: 110,
            navn: "Egil Hulgaard",
            img: "110.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Vi er i Danmark politisk ret enige om retningen EU skal i, så længe vi er enige om at EU skal koncentrere sig om at løse det store problemer. Det handler om at vores parlamentarikere kan finde de rigtige løsninger. Med erfaring fra livet, erhvervslivet og politik vil jeg kunne det.",
            votes: [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1]
        },
        {
            id: 111,
            navn: "Torsten Ringgaard",
            img: "111.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Jeg er arbejder, tillidsmand og ønsker at få EU på rette spor. Sortliste firmaer der benytter social dumping, sortliste firmaer i skattely og udbygge jernbanen så vi kan rejse klimavenligt på tværs af landene i Europa. ",
            votes: [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0.5, 1, 1]
        },
        {
            id: 112,
            navn: "Anders Bøge",
            img: "112.jpg",
            parti: "SF",
            spidskandidat: 0,
            comment: "Jeg arbejder for at SF får et godt valg.",
            votes: [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1]
        },
        {
            id: 113,
            navn: "Hans Blaaberg",
            img: "113.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg kæmper for at bevare Danmark som en selvstændig nation, hvor dansk lov står over EU-domstolen. Samt at bevare vores retsforbehold. ",
            votes: [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1]
        },
        {
            id: 114,
            navn: "Finn Rudaizky",
            img: "114.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Som kandidat for Dansk Folkeparti går jeg til valg på et slankere EU, der i langt højere grad fokusere på handel landene imellem, som vi kender det fra tidligere. Det bliver et kæmpe nej til at EU skal fokuserer på alle mulige ting. EU er i forvejen en sløv mastodont og den skal være mindre. Ikke større.",
            votes: [1, 0, 1, 0, 0, 0, 0.5, 1, 0, 0, 1, 0, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 115,
            navn: "Asmus Vilster",
            img: "115.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Stem på mig, hvis du tror på, at vi skal løse tidens store problemer i EU. Hvis du mener, at klimakrisen er for vigtig til at overlade til enkeltlande. Hvis du støtter en human og solidarisk fordeling af flygtninge. Og hvis du ved, at Putin kun forstår krudt og kugler.",
            votes: [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
        },
        {
            id: 116,
            navn: "Henrik Dahl",
            img: "116.jpg",
            parti: "LA",
            spidskandidat: 1,
            comment: "Er du woke? Så stem på en anden. Spøg til side. Stem på mig - hvis du ønsker et Europa med tydelige hegnspæle mellem nationalstaten og EU. EU skal håndtere klima, migrantpresset og at vi forbedre EU's konkurrenceevne. Mens nationalstaten skal fastholde alt andet. ",
            votes: [1, 0, 1, 0.5, 0, 0, 1, 0.5, 0, 0, 0, 0, 1, 0.5, 1, 1, 1, 1, 0, 0, 0]
        },
        {
            id: 117,
            navn: "Ivar Nørlund",
            img: "117.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Klimadagsordnen har aldrig været vigtigere. Det er en politisk kampplads med et hav af dagsordner, som ikke alle står på naturens og planetens side. En stemme på mig er en stemme på en ambitiøs klimapolitiker – men også en landmand. Jeg er ikke fantast, men ambitiøs, målrettet og pragmatisk. Det er derfor, jeg stiller op for Moderaterne.",
            votes: [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0]
        },
        {
            id: 118,
            navn: "Tayo Lill Andreasen",
            img: "118.jpg",
            parti: "S",
            spidskandidat: 0,
            comment: "Jeg er tilhænger af EU, fordi der ikke er noget politisk alternativ til EU. EU bygger på fred og sameksistens. Og principper om demokrati, frihed, retsstat og ligestilling. Indflydelse fås gennem politiske processer og deltagelse og tage ansvar  -ikke ved at stå udenfor og pege fingre.  ",
            votes: [0, 0, 0, 1, 1, 1, 1, 0, 1, 0.5, 0, 0, 1, 0.5, 1, 1, 0.5, 0, 0.5, 0, 1]
        },
        {
            id: 119,
            navn: "Thorbern Alexander Klingert",
            img: "119.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Som liberal, er jeg overbevist om at vi bedst varetager Danmarks interesser i et trygt, grønt og stærkt Europa.  Min vision for EU er et friere og rigere fælleskab, der kan mere selv. Hvis man deler disse holdninger, kunne man overveje at stemme på mig :)",
            votes: [1, 0.5, 1, 1, 1, 0.5, 1, 0, 0.5, 0, 0, 1, 1, 0.5, 1, 0, 0.5, 1, 0.5, 0, 0]
        },
        {
            id: 120,
            navn: "João Møller",
            img: "120.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: "Det er på grund af EU at jeg har det liv jeg har i dag. Det er jeg meget taknemmelig for, og derfor vil jeg arbejde hårdt for alle borger kan mærke hvor fantastisk den samarbejde mellem lande i Europa er.",
            votes: [1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1]
        },
        {
            id: 121,
            navn: "Bent Juul Sørensen",
            img: "121.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Jeg er en kandidat, der ønsker samarbejde på tværs af partier og grupper i EU. Jeg tror fuldt og fast på politiske forlig, der får alle med",
            votes: [1, 0.5, 0.5, 0.5, 1, 0.5, 1, 0, 0, 0.5, 0.5, 1, 1, 0.5, 0.5, 0.5, 1, 0, 0.5, 0, 1]
        },
        {
            id: 122,
            navn: "Magnus Bigum",
            img: "122.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Udover at være den uge kandidat fra Danmarksdemokraterne så er jeg er uddannet rustfri klejnsmed. EU er blevet en virkelighedsfjern institution, som bruger sin energi på opgaver, medlemslandene selv kan løse. Det skal der simpelthen laves om på, ellers mister vi befolkningen på perronen, fordi man ikke kan se sig selv i det længere. EU skal fokusere sine enorme ressourcer på de kerneopgaver, som gjorde at Danmark meldte sig ind under EU´s fane for 50 år siden. Jeg vil kæmpe for at der kommer mere fornuft tilbage til EU.",
            votes: [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]
        },
        {
            id: 123,
            navn: "Morten Vehl Revsbeck",
            img: "123.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Jeg ønsker et EU, der tager sig af de store linjer, og til gengæld lader være med at regulere småting, der bør behandles internt i medlemslandene. EU skal dermed sikre økonomisk velstand, sikkerhed og klima. Så skal vi nok sørge for gode arbejdsforhold i DK",
            votes: [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0]
        },
        {
            id: 124,
            navn: "Lars Bregnbak",
            img: "124.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "Fordi vi skal bevare vores vetoret i Eu. Fordi EU SKAL HAVE MINDRE INDFLYDELSE PÅ DANSKERNES HVERDAG",
            votes: [1, 0, 1, 1, 1, 0.5, 1, 1, 0, 1, 0.5, 1, 1, 0.5, 1, 0, 0.5, 0, 0, 0, 1]
        },
        {
            id: 125,
            navn: "Asger Christensen",
            img: "125.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Med over 40 års erfaring som landmand og de seneste 5 år i Europa-Parlamentet for Venstre, står jeg for en solid forbindelse mellem den jyske muld og EU’s politiske maskinrum. Som virksomhedsejer mærker jeg hver dag, hvordan lovgivningen påvirker det virkelige liv.",
            votes: [1, 0, 1, 0.5, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0.5, 1, 0, 0, 0]
        },
        {
            id: 126,
            navn: "Bob Richard Nielsen",
            img: "126.jpg",
            parti: "DD",
            spidskandidat: 0,
            comment: "EU skal blande sig uden om danskernes dagligdag. Det gælder vores hverdag som vores arbejdsliv.",
            votes: [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1]
        },
        {
            id: 127,
            navn: "Victoria Velasquez",
            img: "127.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Det vigtigste er, at du stemmer på Enhedslisten! Men jeg ville da blive rigtig glad for din stemme :-)",
            votes: [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0]
        },
        {
            id: 128,
            navn: "Barbara Engelstoft",
            img: "128.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Grøn vækst i Afrika EU’s udviklingsbistand skal omlægges, således at vi gennem bæredygtig vækst imødegår klimakrisen. Vi skal fokusere på at skabe økonomiske forandringer i Afrika. Sammen skal dansk og afrikansk erhvervsliv styrke klimaindsatser og gensidig eksport. Mere støtte til kvinder i det globale syd. Udviklingsbistand målrettet kvinder har meget stor effekt, fordi kvinder formår at løfte hele deres husstand - på økonomi, uddannelse og sundhed. Familien kan således selv forbedre sine levevilkår. Effektiv og godt fordelt udviklingsbistand er yderst vigtig, da vi derigennem sikrer et stabilt Afrika.",
            votes: [1, 0.5, 1, 1, 1, 0, 1, 0, 0.5, 0, 0, 0.5, 1, 1, 1, 0.5, 0.5, 1, 0, 0, 1]
        },
        {
            id: 129,
            navn: "Michael Nedersøe",
            img: "129.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Jeg stiller op til EP-valget, for hvad borgernes vagthund mod det morads der foregår i Bruxelles og Strasbourg. EU har ikke formået at løse det store emner som migration, social dumping og klima.",
            votes: [1, 0, 1, 0.5, 1, 1, 0, 1, 0, 0, 1, 0.5, 1, 0, 0.5, 0, 0, 0, 0, 0, 1]
        },
        {
            id: 130,
            navn: "Stine Steffensen",
            img: "130.jpg",
            parti: "DF",
            spidskandidat: 0,
            comment: "Klima, økonomi, demokrati og retsstat.",
            votes: [0.5, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1]
        },
        {
            id: 131,
            navn: "Klavs A. Holm",
            img: "131.jpg",
            parti: "M",
            spidskandidat: 0,
            comment: "Jeg er tidligere diplomat og ambassadør for Danmark, og jeg har forhandlet rigtig meget i EU. Jeg kender spillet og ved, hvordan man får indflydelse. Jeg vil arbejde for brede løsninger i Europa-Parlamentet - ligesom Moderaterne arbejder for løsninger og kompromiser fra midten i Danmark.",
            votes: [1, 0.5, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0.5, 1, 1, 0, 0, 0, 0, 1]
        },
        {
            id: 132,
            navn: "Stine Ry Andersen",
            img: "132.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Man skal stemme på mig, hvis man vil være med til at prioritere klima og miljø, arbejdstager rettigheder, og de demokratiske grundprincipper i EU. ",
            votes: [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0.5, 0, 0, 0, 1, 0]
        },
        {
            id: 133,
            navn: "Jacob Stryhn",
            img: "133.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg går ind for den grønne omstilling og har af samme årsag ingen valgplakater fordi jeg mener at det er modstridende med at sige man vil det grønne og så gøre det stik modsatte. Det er meget som jeg er - nemlig at gøre mit ypperste på at leve op til de forventninger som man giver folk. Foruden det, så vil jeg arbejde for fred i Europa og for at den fri bevægelighed kan blive mere agilt, såvel arbejdsmæssigt som uddannelsesmæssigt - og dette til glæde for kulturforståelse og deraf færre konflikter samt at få skabt en større vækst i Europa, hvilket vi har brug for i forhold til de væksttal som Asien og USA har pt. En stemme på mig, er en arbejdende stemme for dig.",
            votes: [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1]
        },
        {
            id: 134,
            navn: "Birgitte Bergman",
            img: "134.jpg",
            parti: "KF",
            spidskandidat: 0,
            comment: "Jeg vil være den afgørende grønne borgerlige stemme. Danmark har brug for et stærkt Europa. Og vi har brug for et stærk Danmark i Europa. EU og Europa står overfor nogle store udfordringer, som vi kun kan løse i fællesskab. Vi skal sikre fred og stabilitet i Europa, løse de store klimaudfordringer og styrke vores ydre grænser. Vi skal sikre fair konkurrencevilkår for virksomhederne. Konkurrencekraften i Danmark og Europa skal op. En stemme på mig, er en afgørende stemme i EPP, den største og mest magtfulde gruppe i Europa Parlamentet. Jeg vil være den afgørende grønne borgerlige stemme.",
            votes: [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0]
        },
        {
            id: 135,
            navn: "Julie Hassing",
            img: "135.jpg",
            parti: "V",
            spidskandidat: 0,
            comment: "Europas fremtid formes disse år. Og jeg vil rigtigt gerne præge den i en liberal, demokratisk og åben retning. Det kommende Europa-Parlamentsvalg er det vigtigste i lang tid. Her er det væsentligt, at pro-europæiske liberale kræfter vinder stærk repræsentation, så vi kan sikre et fremtidigt stærkt Europa. Det vil jeg gerne kæmpe for.",
            votes: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0]
        },
        {
            id: 136,
            navn: "Nana Højlund",
            img: "136.jpg",
            parti: "EL",
            spidskandidat: 0,
            comment: "Jeg kan med min solide erfaring i fagbevægelsen styrke netop arbejdstager rettighed i EU, jeg tror på grøn omstilling og at den skal foregå socialt retfærdigt, vi skal gøre mere for, at vores samlede arbejdsstyrke er klar til den omstilling som vi skal og må lave og det er et stort EU anliggende i den kommende periode.",
            votes: [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0]
        },
        {
            id: 137,
            navn: "Lartey Lawson",
            img: "137.jpg",
            parti: "RV",
            spidskandidat: 0,
            comment: " Klimavenlig bæredygtighed. En balanceret immigrationspolitik der beskytter menesker. Økonomisk vækst via digital innovation.",
            votes: [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]
        },
        {
            id: 138,
            navn: "Christel Schaldemose",
            img: "138.jpg",
            parti: "S",
            spidskandidat: 1,
            comment: " Jeg genopstiller til Europa-Parlamentet for at fortsætte mit arbejde med at gøre EU tryggere, grønnere og mere retfærdigt. Det er det behov for i denne tid, hvor krigen i Ukraine har forandret vores tilværelse og vist os at fred ikke er noget vi kan tage for givet. Der er brug for, at nogen skaber tryghed i en usikker tid. Det er Socialdemokratiets ønske. En stemme på mig, er en stemme på kampen for et tryggere EU.",
            votes: [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1]
        }, 
    ];



    return NextResponse.json({ data }, { status: 200 });
}
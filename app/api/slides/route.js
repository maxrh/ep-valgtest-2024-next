import { NextResponse } from "next/server";


export async function GET(request) {

    const data = [
       
        { 
            id: 1, 
            img: "1.jpg", 
            text: "Biodiversitet og natur skal prioriteres på højde med klima og andre politikområder.",
            for: 'Biodiversitetens krise er uløselig fra klimakrisen – vi kan ikke løse den ene uden at løse den anden. Vi er nødt til at passe på vores økosystemer og fødekæder, som vi er afhængige af.' ,
            imod: 'Indsatser, der tilgodeser biodiversiteten, f.eks. uberørt skov, har ikke nødvendigvis tilstrækkelig klimaeffekt og går derudover hårdt ud over store sektorer som land- og skovbrug.'
        },
        { 
            id: 2, 
            img: "2.jpg", 
            text: "Klimaindsatsen er vigtigere end økonomisk vækst.",
            for: 'Klima er vor tids mest presserende dagsorden. Hvis ikke vi får bremset den kritiske udvikling, kan alt andet være ligegyldigt.',
            imod: 'Økonomisk vækst er nødvendig for at sikre velfærden for EUs borgere. Hvis vi ikke prioriterer økonomisk vækst, kan det føre til øget fattigdom, arbejdsløshed og social ulighed. Tingene skal finansieres – også grøn omstilling.'
        },
        { 
            id: 3, 
            img: "3.jpg", 
            text: "Atomkraft bør indtænkes som en løsning på klimakrisen.",
            for: 'Atomkraft er en stabil og pålidelig energikilde, der ikke udleder drivhusgasser. Atomkraftværker kan producere elektricitet døgnet rundt uanset vejret og udleder ikke forurenende stoffer i modsætning kul, olie og gas.',
            imod: 'Atomkraftværker er dyre og tidskrævende at anlægge. Der er risiko for atomulykker, og affaldet er et problem, der skal håndteres. '
        },
        { 
            id: 4, 
            img: "4.jpg", 
            text: "Landbrugsstøtten skal i højere grad anvendes til at sikre grøn omstilling af landbruget.",
            for: 'Landbruget er i den absolutte top på verdensplan, når det gælder CO2-udledning og forurening. Landbrugsstøtten bør derfor anvendes til at støtte landmændene i at reducere deres miljø- og klimapåvirkning og omstille til en grønnere produktion.',
            imod: 'Det er dyrt og tidskrævende, hvis en stor del af erhvervet skal omlægges. Det skyldes bl.a. behov for investeringer i ny teknologi, rådgivning af landmænd og lavere udbytte af fødevarer. Samtidig vil det bare øge lækagen af CO2-udledninger til udlandet. '
        },
        { 
            id: 5, 
            img: "5.jpg", 
            text: "EU skal stramme reguleringen af Big Tech og kunstig intelligens.",
            for: 'Det er nødvendigt for at beskytte borgernes rettigheder og sikkerhed, da Big Tech-virksomheder har stor magt over borgeres data og privatliv, og kunstig intelligens kan misbruges til at fremme f.eks. diskrimination, propaganda og misinformation.',
            imod: 'Regulering kan hæmme innovation og vækst. Big Tech-virksomheder er vigtige for EUs økonomi, mens kunstig intelligens har potentiale til at løse mange samfundsmæssige problemer.'
        },
        { 
            id: 6, 
            img: "6.jpg", 
            text: "Virksomheder med stor indtjening i Europa skal beskattes hårdere, bl.a. gennem en mindstesats for selskabsskat i EU.",
            for: 'EU’s lande skal ikke kunne underbyde hinanden på selskabsskatten for at tiltrække investeringer og virksomheder. Derudover er det kun retfærdigt, at virksomheder betaler skat af deres indtjening i det land, de har tjent den i. ',
            imod: 'De enkelte medlemslande skal selv beslutte skattesatserne, ikke EU. Det kan være fordelagtigt for mindre lande, at de kan konkurrere på selskabsskatten.'
        },
        { 
            id: 7, 
            img: "7.jpg", 
            text: "Medlemslandene skal i højere grad forpligtes på at overholde de af EU vedtagne initiativer og principper, bl.a. gennem tilbageholdelse af midler eller tildeling af store bøder.", 
            for: 'Det vil styrke EU’s indre marked gennem lige konkurrencevilkår for virksomheder i hele EU og beskyttelse af EU-borgernes rettigheder. Samtidig må EU være på linje med egen moral og etik for at bevare legitimitet og integritet. ',
            imod: 'Det underminerer medlemslandenes suverænitet, hvis ikke de selv kan bestemme, hvilke regler de vil følge og kan skabe intern splittelse mellem landene.  '
        },
        { 
            id: 8, 
            img: "8.jpg", 
            text: "Medlemslandene skal bidrage med færre penge til EU\'s budget.",
            for: 'Det øger medlemslandenes økonomiske frihed og giver råderum til at bruge deres egne penge på de områder, de selv finder vigtigst.',
            imod: 'Det vil svække EU. EU-budgettet finansierer fælles projekter og initiativer som forskning, udvikling, infrastruktur, sikkerhed og klima – afgørende aspekter, hvis EU skal stå stærkere geopolitisk.'
        },
        { 
            id: 9, 
            img: "9.jpg", 
            text: "EU\'s direktiv om øremærket barsel til mænd er en god idé.",
            for: 'Øremærket barsel er et skridt på vejen mod ligestilling på arbejdsmarkedet og i hjemmet. Det er med til at sikre ligeløn samt godt for familien og fædres tilknytning til deres børn. ',
            imod: 'Øremærket barsel er et stort indgreb i familiens frihed til selv at vælge. Barselsuger risikerer at gå tabt, hvis ikke faren har mulighed for at afholde sin øremærkede del.'
        },
        { 
            id: 10, 
            img: "10.jpg", 
            text: "EU bør give økonomisk støtte til medlemslande med høj gæld.",
            for: '10. Økonomisk støtte til lande med høj gæld hjælper til at forbedre landenes økonomiske situation, hvilket bidrager til en mere stabil europæisk økonomi. Dertil kan man undgå sociale og politiske uroligheder i de gældsprægede lande.',
            imod: '10. Det er ikke retfærdigt, at medlemslande, der har forvaltet deres økonomier dårligt, skal modtage økonomisk støtte fra de andre. Der er risiko for, at støtten ikke anvendes på de nødvendige langsigtede reformer.'
        },
        { 
            id: 11, 
            img: "11.jpg", 
            text: "Arbejdskraftens fri bevægelighed indenfor EU bør begrænses.",
            for: 'Danske arbejdsvilkår kan blive presset, hvis andre EU-borgere kommer til Danmark og accepterer ringere vilkår. Det kan desuden føre til brain drain i mindre privilegerede medlemslande.',
            imod: 'Det indre marked og arbejdskraftens frie bevægelighed sikrer økonomisk vækst såvel som individuel frihed. '
        },
        { 
            id: 12, 
            img: "12.jpg", 
            text: "EU skal forebygge migration ved at øge den økonomiske støtte til de klassiske flygtningelande.",
            for: 'EU har en forpligtelse til at yde en indsats for at forbedre vilkårene ude i verden. Det er samtidig i EU’s egen interesse at forebygge migrationen.  ',
            imod: 'EU skal bruge pengene på sig selv i stedet. Desuden er det vanskeligt at vurdere effekten af den økonomiske indsats. '
        },
        { 
            id: 13, 
            img: "13.jpg", 
            text: "EU bør styrke kontrollen ved de ydre grænser.",
            for: 'Det vil bidrage til at sikre EUs sikkerhed og stabilitet, da man i højere grad vil forhindre ulovlig migration, menneskesmugling, terrorisme og andre former for kriminalitet. Skal der være åbne indre grænser i Europa, må der være stærk kontrol med de ydre.',
            imod: 'Styrket kontrol kræver mange ressourcer. De enkelte medlemslande må sikre egne grænser. Det kan ligeledes være svært at implementere effektiv kontrol, der ikke krænker menneskerettighederne.'
        },
        { 
            id: 14, 
            img: "14.jpg", 
            text: "Ukraine skal optages i EU hurtigst muligt.",
            for: 'Et EU-medlemskab vil sende et stærkt signal til Rusland om, at EU er villig til at forsvare sine værdier og interesser. Ukraines økonomi og sikkerhed vil blive styrket.',
            imod: 'Ukraine er et af Europas fattigste lande. Kombineret med stor korruption og krigstilstand er det svært at se, at de kan styrke EU. Ukraine lever i det hele taget ikke op til de såkaldte københavnerkriterier (forudsætninger for optagelse i EU). Ved at indlemme Ukraine i EU, vil man samtidig ophæve bufferzonen mellem EU og Rusland, hvilket kan provokere Putin yderligere.'
        },
        { 
            id: 15, 
            img: "15.jpg", 
            text: "EU skal donere de nødvendige våben og artilleri til Ukraine.",
            for: 'EU bør hjælpe Ukraine i landets retsmæssige kamp for at forsvare eget land og egen suverænitet. For EU er det nødvendigt at forsvare de vestlige værdier mod Putins imperialistiske projekt. Lader man Rusland indtage Ukraine, vil Putin komme faretruende tæt på og formodentlig fortsætte sit ekspansive projekt.',
            imod: 'Donationer kan føre til en eskalering af konflikten og en øget risiko for verdenskrig. Det er derudover en kostelig affære for EU, der har rigeligt med andre problemer at bruge penge på.' 
        },
        { 
            id: 16, 
            img: "16.jpg", 
            text: "En kommende udvidelse, så EU indbefatter over 30 medlemslande, er en god idé.",
            for: 'Et større og mere repræsentativt EU vil give en større og mere samlet økonomi. EU vil være i stand til at stå stærkere over for globale udfordringer såsom klimaforandringer og geopolitiske spændinger. Udsigten til medlemskab er en drivkraft for demokratiske og økonomiske reformer i lande, der ønsker optagelse.',
            imod: 'EU vil blive en mere bureaukratisk og ineffektiv union, og en udvidelse kan føre til øget ulighed og spændinger mellem EUs medlemslande. Samtidig vil beslutningsapparatet undergå grundlæggende forandringer, f.eks. fra enstemmighed til flertalsbeslutninger i udenrigspolitiske anliggender.'
        },
        { 
            id: 17, 
            img: "17.jpg", 
            text: "EU skal udvikle sig til en militær union med egen våbenindustri.",
            for: 'EU vil blive en mere effektiv aktør internationalt, som vil kunne handle hurtigere og mere effektivt i tilfælde af krise, samt blive mere uafhængig af leverancer og støtte udenfor EU. Med stadig større geopolitiske spændinger, bliver Europa nødt til at kunne forsvare sig selv.',
            imod: 'Et mere militaristisk EU bliver dyrt og ressourcekrævende og kan føre til øgede spændinger mellem EU og andre stormagter, såsom USA og Kina. En militaristisk udvikling er samtidig i strid med EU’s oprindelige grundlag som fredsprojekt.'
        },
        { 
            id: 18, 
            img: "18.jpg", 
            text: "EU skal i stigende grad positionere sig som en selvstændig stormagt.",
            for: 'De seneste års kriser har vist, at det er et problem for EU at være så afhængige af USA, Kina og Rusland, som Unionen historisk har været. Skal EU stå stærkt i fremtiden, må Unionen vende sig indad og hive produktion og forsyningskæder hjem.',
            imod: 'Det kan føre til øgede spændinger mellem EU og andre stormagter. Det vil være en dyr og ressourcekrævende udvikling, ikke alle medlemslande nødvendigvis er villige til at investere i. Samtidig hænger øget autonomi sammen med militarisering og større engagement ude i verden i kampen om f.eks. råstoffer, hvilket kan komme på kant med EU’s moralske og etiske kompas.'
        },
        { 
            id: 19, 
            img: "19.jpg", 
            text: "EU-Parlamentsvalget bør i fremtiden bestå af tværnationale partier og stemmelister.",
            for: 'Det vil styrke det europæiske demokrati, at EU-borgerne får mulighed for at stemme på partier, der repræsenterer deres politiske overbevisninger uanset, hvilket land de bor i.',
            imod: 'EU vil blive mere centraliseret og bureaukratisk og trække magt ud af nationernes respektive regeringer.' 
        },
        { 
            id: 20, 
            img: "20.jpg", 
            text: "EU\'s borgere skal kunne stemme direkte på lovforslag.",
            for: 'EUs borgere får større politisk indflydelse, hvilket styrker demokratiet i EU.',
            imod: 'Det kan føre til mere ustabil og kortsigtet politik, hvor det bliver svært at træffe de nødvendige beslutninger om komplekse spørgsmål.'
        },
        { 
            id: 21, 
            img: "21.jpg", 
            text: "EU skal arbejde for en fredsaftale mellem Ukraine og Rusland.",
            for: 'En fredsaftale vil ende krigen og de lidelser, den medfører. Heriblandt tabet af tusindvis af menneskeliv og store ødelæggelser i dele af Ukraine, som kan blive hurtigere genopbygget.',
            imod: 'En fredsaftale kan medføre en russisk sejr, hvor Rusland overtager dele af ukrainsk territorium, eller får opfyldt kravet om, at Ukraine ikke bliver en del af Nato. En sådan aftale vil tjene som en accept af Putins gerninger.'
        },
        
        
    ];



    return NextResponse.json({ data }, { status: 200 });
}
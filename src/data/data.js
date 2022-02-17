import { v4 as uuidv4 } from 'uuid';
export const services = [
    {
        id: uuidv4(),
        name: "Saks over Kam",
        price: "299kr.*",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        features: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet, consectetur"]
    },
    {
        id: uuidv4(),
        name: "Trimming af skæg / Barbering",
        price: "199kr.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        features: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur"]
    },
    {
        id: uuidv4(),
        name: "Maskine",
        price: "99kr.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet, consectetur"]
    },
]
export const testimonials = [
    {
        id: uuidv4(),
        author: "Anders Højsted",
        from: "Google Review",
        content: "Hyggeligt - en dygtig & omhyggelig frisør."
    },
    {
        id: uuidv4(),
        author: "Wadim Baslow",
        from: "Google Review",
        content: "Det kan godt være, at Codrut giver den bedste værdi for prisen for herreklipning i København. Han skynder sig ikke og giver en fremragende service fra omfattende hårvask (en meget velkommen hovedmassage), en ikke-prætentiøs, imødekommende og hyggelig atmosfære, til klipningen med saksen. Han er meget opmærksom på detaljerne, og ud over den professionelle pleje kunne jeg mærke, at han virkelig ønsker, at du forlader hans sted og ser skarp ud."
    },
]
import { useEffect } from 'react';
// Fragments
import Banner from "./fragments/Banner"
import Counter from "./fragments/Counter"
import Gift from "./fragments/Gift"
import Invite from "./fragments/Invite"
import Location from "./fragments/Location"
import Outfit from "./fragments/Outfit"
import Parents from "./fragments/Parents"
import Phrase from "./fragments/Phrase"
import Reception from "./fragments/Reception"
import Sentence from "./fragments/Sentence"
// Aos Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Banner />
            <Phrase />
            <Counter />
            <Invite />
            <Location />
            <Reception />
            <Parents />
            <Gift />
            <Outfit />
            <Sentence />
        </>
    )
}

export default App

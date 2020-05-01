import React from 'react';

function KonamiCodeActivation(keyPress) {
    const [konamiCode, setIsKonami] = useState(false);
    const refIndex = useRef(0);
    const onKeyUpCallback = useCallback(e => {
        const codes = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a"
        ];
        const onKeyUp = ({ key }) => {
            if (refIndex.current === codes.length - 1) {
                setIsKonami(true);
            }
            if (
                key != null &&
                codes[refIndex.current] != null &&
                key.toLowerCase() === codes[refIndex.current].toLowerCase()
            ) {
                refIndex.current++;
            } else {
                refIndex.current = 0;
                setIsKonami(false);
            }
        };
        onKeyUp(e);
    }, []);

    // Add event listeners
    useEffect(() => {
        window.addEventListener("keyup", onKeyUpCallback);
        return () => {
            window.removeEventListener("keyup", onKeyUpCallback);
        };
    }, [onKeyUpCallback]);

    return [konamiCode, setIsKonami];
}

// export default KonamiCodeActivation


// import useKonamiCode from "./is-konami-code";

// function App() {
//     const [konamiCode, setIsKonami] = useKonamiCode();

//     return (
//         <div>

//             {konamiCode && (
//                 <div className="wrapper">
//                     <span role="img" aria-label="fox">
//                         🦊
//           </span>
//           YOU DID IT!!
//                     <button
//                         onClick={() => {
//                             setIsKonami(false);
//                         }}
//                     >
//                         Close
//           </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

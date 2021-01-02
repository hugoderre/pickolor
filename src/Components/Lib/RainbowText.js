export default function RainbowText(props) {

    let arrayText = [];
    for(let i = 0; i < props.text.length; i++) {
        arrayText.push(props.text[i]);
    }
    
    let rainbowText = arrayText.map((element, index) => {
        return <span style={{fontSize: 30 + index * 6, color: `rgb(${mathRound()},${mathRound()},${mathRound()})`}} key={index}>{element}</span>
    })

    return (
        <div>
            {rainbowText}
        </div>
    )
}

function mathRound() {
    return Math.round(Math.random() * 255)
}

import React, {useState} from 'react'

const CarSelector = () => {
    const [car, setCar] = useState("");
    const [color, setColor] = useState("");
    const [selectedCar, setSelectedCar] = useState("Volvo");
    const [selectedColor, setSelectedColor] = useState("Black");
    return (<div>
        <h1>select your car</h1>
        <p>Select a car: </p>
        <select
            onChange={e => {
                setSelectedCar(e.target.value);
            }}
        >
            <option value="Volvo">Volvo</option>
            <option value="Kia">Kia</option>
            <option value="Honda Civic">Honda Civic</option>
            <option value="SUV">SUV</option>
        </select>
        <p>Select a color: </p>
        <select
            onChange={e => {
                setSelectedColor(e.target.value);
            }}
        >
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Golden">Golden</option>
            <option value="Blue">Blue</option>
        </select>
        <h2>Your selected: {selectedCar} {selectedColor} </h2>

    </div>)
}
export default CarSelector

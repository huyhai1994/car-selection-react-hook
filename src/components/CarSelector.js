import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';


const CarSelector = () => {
    const [selectedCar, setSelectedCar] = useState("Volvo");
    const [selectedColor, setSelectedColor] = useState("Black");
    return (<div className='container border rounded-3 shadow bg-light p-3'>
        <h1 className='text-center'>select your car</h1>
        <div className="row my-3">
            <div className="col-sm-12
             col-md-5">
                <p>Select a car: </p>
            </div>
            <div className="col-sm-12">
                <Form.Select
                    onChange={e => {
                        setSelectedCar(e.target.value);
                    }}
                >
                    <option value="Volvo">Volvo</option>
                    <option value="Kia">Kia</option>
                    <option value="Honda Civic">Honda Civic</option>
                    <option value="SUV">SUV</option>
                </Form.Select>
            </div>
        </div>
        <div className="row">
            <div className=" col-sm-12">
                <p>Select a color: </p>
            </div>
            <div className="col-sm-12">
                <Form.Select
                    onChange={e => {
                        setSelectedColor(e.target.value);
                    }}
                >
                    <option value="Red">Red</option>
                    <option value="Black">Black</option>
                    <option value="Golden">Golden</option>
                    <option value="Blue">Blue</option>
                </Form.Select>
            </div>
        </div>

        <p className="mt-5 h4">Your selected: {selectedCar} {selectedColor} </p>

    </div>)
}
export default CarSelector

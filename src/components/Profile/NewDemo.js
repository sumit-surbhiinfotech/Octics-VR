import { useState } from 'react';

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input style={{ backgroundColor: "lightblue", padding: "12px 15px", borderRedius: "10px" }} type="submit" />
        </form>
    )
}

export default MyForm;
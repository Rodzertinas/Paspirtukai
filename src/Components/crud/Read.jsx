import Animal from "./Animal";

function Read({zoo, deleteA, show}) {

    return (
        <div className="read">
            <div className="header">
                <h2>List of Scooter</h2>
            </div>
            <ul>
                {
                    zoo.map(z => <Animal key={z.id} animal={z} deleteA={deleteA} show={show}></Animal>)
                }
            </ul>
        </div>
    )
}

export default Read;
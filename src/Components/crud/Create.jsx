import { useState } from "react";



// 

function Create({create}) {

    const [type, setType] = useState('');
    const [color, setColor] = useState('Bussy');
    const [isalive, setIsalive] = useState(1);

    const handleCreate = () => {
        const data = {
            type: type,
            color: color,
            isalive: isalive
        }
        create(data);
        setType('');
 // .........................................................................................
        setColor('');
        setColor();
     
    }
    const [registracijosCodas, setRegistracijosCodas] = useState('') ;
// .........................................................................................
    const handleInput = (e, d) => {
        switch(d) {
            case 'type':
                setType(e.target.value);
                break;
            case 'color':
                setColor(e.target.value);
                break;
            case 'isalive':
                setIsalive(i => i === 0 ? 1 : 0);
                break;
            default:
        }
    }


    return (
        <div className="create">
            <div className="header">
            <h2></h2>
            </div>
            
            <div className="form">

                <div className="input">
                <label>Type:</label>
                <input type="text" placeholder="Create New or Edit"  value={type} onChange={(e) => handleInput(e, 'type')}></input>
                </div>
                

                <div className="input">
                <label>Registration Code:</label>
                
                <select  value={color}  onChange={(e) => handleInput(e, 'color')}>
                    <option value="Inokim">Inokim</option>
                    <option value="Xiomi">Xiomi</option>
                    <option value="F10">F10</option>
                    <option value="Beaster">Beaster</option>
                    <option value="Fastest X">Fastest X</option>
                   
                </select>
                </div>
              
                <div className="input">
  
                <label>Bussy:</label>
                <h4 className="lock">If it’s free</h4>
                <input type="checkbox" checked={isalive} onChange={(e) => handleInput(e, 'isalive')}></input>
                
                </div>
               
                <div className="input btn">
                    
                <button className="add" onClick={handleCreate}>create</button>
                
                </div>
            
            </div>
        </div>
    )
}

export default Create;
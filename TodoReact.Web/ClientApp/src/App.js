import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Results from './components/Results';


const App = () => {

    const [todo, setTodo] = useState([]);

    const runGetAll = async () => {
        const res = await axios.get('api/todo/GetTodoList');        
        setTodo(res.data);
    }

    useEffect(() => {
        runGetAll();
    }, []);


    return (
        <div className="container">
            <Form />
            <Results data={todo} />
        </div>
    );
}


export default App;
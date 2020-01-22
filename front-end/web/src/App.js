import React, {useState, useEffect} from 'react';
import api from './service/api'
import './global.css'
import './App.css';
import './Sidebar.css'
import './Main.css'
import './components/DevItem'
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
//Componente
//Propriedade
//Estado -> informacoes mantidas pelo componente (imutabilidade {useState})

//Toda funcao de um componente , e criada dentro do propio componente


function App() {

    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs')
            setDevs(response.data);
        }

        loadDevs();
    }, []);


    async function handleAddDev(data) {
        const response = await api.post('/devs',data);

        setDevs([...devs, response.data])
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev}/>
            </aside>
            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem dev={dev} key={dev._id} />
                    ))}

                </ul>
            </main>
        </div>
    );
}

export default App;

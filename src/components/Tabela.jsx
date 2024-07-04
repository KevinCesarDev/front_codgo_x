import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Tabela = () => {
    const today = new Date();
    const day = today.getDate();

    const [ocorrencias, setOcorrencias] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [transportador, setTransportador] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/dados/ocorrencias')
            .then(response => {
                setOcorrencias(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/dados/tipo')
            .then(response => {
                setTipo(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/dados/transportador')
            .then(response => {
                setTransportador(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            });
    }, []);

    return (
        <div><table>
            <thead>
                <tr>
                    <th>Ocorrência</th>
                    <th>Tipo de Ocorrência</th>
                    <th>Ocorreu em/Agendado para</th>
                    <th>Transportador</th>
                    <th>Transportador CNPJ/CPF</th>
                    <th>Solução</th>
                    <th>Já Solucionada</th>
                    <th>Dias em Aberto</th>
                </tr>
            </thead>
            <tbody>
                {ocorrencias.map((ocorrencia) => (
                    <tr key={ocorrencia.ID}>
                        <td>{ocorrencia.ID}</td>
                        <td>{ocorrencia.ID_TIPO}</td>
                        <td>{ocorrencia.OCORREU_EM}</td>
                        <td>{ocorrencia.ID_TRANSPORTADOR}</td>
                        <td>{ocorrencia.ID_TRANSPORTADOR}</td>
                        <td>{ocorrencia.SOLUCAO_EM}</td>
                        <td>{ocorrencia.SOLUCAO_EM !== null ? "true" : "false"}</td>
                        <td>{ocorrencia.SOLUCAO_EM === null && day > ocorrencia.SOLUCAO_EM ? day - ocorrencia.SOLUCAO_EM : 0}</td>
                    </tr>
                ))}
            </tbody>
        </table></div>
    );
}

export default Tabela
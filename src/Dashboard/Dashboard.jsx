import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const Dashboard = () => {
    const [projects, setProjects] = useState();


    function fetchData() {
        fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log(err));
    }











    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ProjectName</th>
                    <th>Details</th>
                    <th>Department</th>
                    <th>startDate</th>
                    <th>EndDate</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {projects.length > 0 ? (proj.map(prod.index)) : ( <tr key={index}>
                    <td>{index+1}</td>
                    <td>{proj.ProjectName}</td>
                    <td>{proj.Details}</td>
                    <td>{proj.Department}</td>
                    <td>{proj.startDate}</td>
                    <td>{proj.EndDate}</td>
                    <td>{proj.status}</td>
                </tr>
           )}
            </tbody>
                
        </Table>

    )
}

export default Dashboard
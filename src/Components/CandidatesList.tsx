import { Table, TableBody, TableCell, TableHead } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { Student } from '../Types/Type';


const Candidates = () => {
  const [resData, setResData] = useState<Student[]>();
	const getCandidate = async () => {
    const response = await axios.get("http://localhost:8080/Candidats")
		.then(
			response => {
				setResData(response.data)
			}
		)
		.catch(
			error => {
				console.error(error);
			}
		)
  }

  getCandidate();
    return(
        <>
          <Table>
            <TableHead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Series</TableCell>
                <TableCell>Birthday</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Establishment</TableCell>
                <TableCell>Examination center</TableCell>
                <TableCell>Year</TableCell>       
            </TableHead>
              {resData?.map(data =>(
                <TableBody>
                  <TableCell>{data.idStudent}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.serie.serieName}</TableCell>
                  <TableCell>{data.birthday}</TableCell>
                  <TableCell>{data.gender}</TableCell>
                  <TableCell>{data.establishment.establishment}</TableCell>
                  <TableCell>{data.examinationCenter.venue}</TableCell>
                  <TableCell>{data.year}</TableCell>
                </TableBody>
              ))}
            
          </Table>
        </>
    );
}

export default Candidates;

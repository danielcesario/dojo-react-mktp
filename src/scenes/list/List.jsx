import React, { Component } from 'react'

import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@material-ui/core';
import Loading from '../../components/loading/Loading'

import { getPeople, deletePerson } from '../../services/FirebaseService';

class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    this.loadPeople()
  }

  loadPeople(){
    this.setState({
      isLoading: true
    }, () => {
      getPeople().then(queryResult => {
        const people = queryResult.docs.map(doc => {
          let person = doc.data()
          person.id = doc.id
          return person
        });
  
        this.setState({
          data: people,
          isLoading: false
        })
      })
    })
  }

  onDelete(id) {
    deletePerson(id).then(() => {
      this.loadPeople()
    })
  }

  render() {

    const { isLoading, data } = this.state

    return (
      <React.Fragment>

        <Typography variant="h4" component="h2">List</Typography>

        {isLoading ?
          <Loading /> :
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map((person, index) =>
                  <TableRow key={index}>
                    <TableCell>{person.document}</TableCell>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.city}</TableCell>
                    <TableCell>{person.age}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary" onClick={() => this.onDelete(person.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>}


      </React.Fragment >
    )

  }
}

export default List
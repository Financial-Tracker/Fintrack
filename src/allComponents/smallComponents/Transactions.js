import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

// import TransactionTable from '../Component/BankInfo/TransactionTable'

export default class Transactions extends Component {
  render() {
    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Position',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Office',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'asc',
          width: 100
        }
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320'
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170'
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: '66',
          date: '2009/01/12',
          salary: '$86'
        },
        {
          name: 'Cedric Kelly',
          position: 'Senior Javascript Developer',
          office: 'Edinburgh',
          age: '22',
          date: '2012/03/29',
          salary: '$433'
        }
      ]
    };
  
    return (

      <MDBDataTable
      maxHeight="200px"
      responsive
      striped
      bordered
      hover
      data={data}
    />
    )
  }
}

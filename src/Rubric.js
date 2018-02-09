import React, { Component } from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'

import { Table } from 'reactstrap';



const Container = styled.div`
    width:100%;
    min-height:100px;
    border:2px solid black;
    ${ clearFix() }
`

const StyledTable = styled(Table)`
  margin-bottom:0 !important;
`



const TableRow = styled.tr`
    cursor: pointer;
    ${props => props.id === props.selected_grade ? `
        background-color:#0697E8 !important;
        color:white;
    `:`
        color:black;
    `};

`




export default class Rubric extends Component{

    constructor(props){
        super(props)


        this.handleTableRowClick = this.handleTableRowClick.bind(this)
    }

    handleTableRowClick(rubricID){

        this.props.updateState({"selected_grade":rubricID});

    }


    render(){
        return(<Container>
            <StyledTable bordered responsive striped hover>
                <thead>
                <tr>
                    <th>Criteria</th>
                    <th>Paragraph Quality</th>
                </tr>
                </thead>
                <tbody>
                <TableRow onClick={()=>this.handleTableRowClick("fail")} id="fail" selected_grade={this.props.selected_grade}>
                    
                    <th scope="row">Fail</th>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit ut nulla sollicitudin pretium. Maecenas faucibus mauris a massa finibus, a finibus massa scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet libero. Nulla dapibus lobortis porta. Duis id mi tincidunt, viverra neque vel, mollis purus.</td>
                    
                </TableRow>
                <TableRow onClick={()=>this.handleTableRowClick("pass")} id="pass" selected_grade={this.props.selected_grade}>
                    <th scope="row">Pass</th>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit ut nulla sollicitudin pretium. Maecenas faucibus mauris a massa finibus, a finibus massa scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet libero. Nulla dapibus lobortis porta. Duis id mi tincidunt, viverra neque vel, mollis purus.</td>
                </TableRow>
                <TableRow onClick={()=>this.handleTableRowClick("credit")} id="credit" selected_grade={this.props.selected_grade}>
                    <th scope="row">Credit</th>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit ut nulla sollicitudin pretium. Maecenas faucibus mauris a massa finibus, a finibus massa scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet libero. Nulla dapibus lobortis porta. Duis id mi tincidunt, viverra neque vel, mollis purus.</td>
                </TableRow>
                <TableRow onClick={()=>this.handleTableRowClick("distinction")} selected_grade={this.props.selected_grade} id="distinction">
                    <th scope="row">Distinction</th>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit ut nulla sollicitudin pretium. Maecenas faucibus mauris a massa finibus, a finibus massa scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet libero. Nulla dapibus lobortis porta. Duis id mi tincidunt, viverra neque vel, mollis purus.</td>
                </TableRow>
                <TableRow onClick={()=>this.handleTableRowClick("high_distinction")} selected_grade={this.props.selected_grade} id="high_distinction">
                    <th scope="row">High Distinction</th>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit ut nulla sollicitudin pretium. Maecenas faucibus mauris a massa finibus, a finibus massa scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in laoreet libero. Nulla dapibus lobortis porta. Duis id mi tincidunt, viverra neque vel, mollis purus.</td>
                </TableRow>
                </tbody>
            </StyledTable>
            
        </Container>)
    }
}


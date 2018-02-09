import React, { Component } from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    min-height:100px;
    height:100%;
    background-color:#FFFDFA;
    ${ clearFix() }
    padding:20px;
    border-top:2px solid black;
`

export default class Paragraph extends Component{
    render(){
        return(<Container>
            {this.props.content}
            
        </Container>)
    }
}


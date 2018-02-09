import React, { Component } from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'


import Rubric from "./Rubric"
import Paragraph from "./Paragraph"
import Footer from "./Footer"

const Container = styled.div`
  width:100%;
  ${ clearFix() }
`

const Header = styled.div`
  width:100%;
  height:50px;
  background-color:black;
  color:white;
  padding:10px;
  text-align:center;
`

const HeaderText = styled.span`
  font-size:20px;
  font-weight:bold;
`

const Content = styled.div`

  width:100%;
  ${ clearFix() }


`

const RubricContainer = styled.div`
  width:40%;
  float:left


`
const ParagraphContainer = styled.div`
  width:60%;
  float:left

`



export default class App extends Component{
  constructor(props){
    super(props)

      this.state={
        selected_grade:"",
        correct_answer:"credit",
        is_submitted:false,
        is_correct:false,
      }

      this.updateState = this.updateState.bind(this)
  }

  updateState(obj){
    this.setState(obj)
  }

  render(){
    return(<Container>
          <Header>
            <HeaderText>Paragraph Grading Activity</HeaderText>
          </Header>


        <Content>
          <RubricContainer>
            <Rubric 
          
              updateState={this.updateState} 
              selected_grade={this.state.selected_grade}
              is_submitted={this.state.is_submitted}
              is_correct={this.state.is_correct}
          
            />
          </RubricContainer>

          <ParagraphContainer><Paragraph content={ParagraphContent}/></ParagraphContainer>

        </Content>

        <Footer 
          updateState={this.updateState} 
          correct_answer={this.state.correct_answer}
          selected_grade={this.state.selected_grade} 
          feedback={Feedback} 
          is_submitted={this.state.is_submitted}
          is_correct={this.state.is_correct}
          

        />
      
    </Container>)
  }
}



const ParagraphContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies metus ut nulla mollis convallis. Vestibulum auctor, turpis vel commodo tincidunt, dui nisl sollicitudin urna, quis hendrerit elit lectus et dui. Nulla imperdiet risus in quam scelerisque eleifend. Ut consequat molestie purus a facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lacinia id odio quis lacinia. Donec in ipsum vitae metus tincidunt molestie eu at sapien. Vivamus a rutrum orci, non convallis purus. Pellentesque fermentum ligula at lacus pharetra tempus quis ac elit. Aenean quis felis accumsan, placerat nibh a, sodales turpis. Nunc odio enim, consequat et placerat quis, laoreet non augue. Morbi efficitur facilisis enim, vitae tempus mi faucibus nec. Curabitur et augue semper, faucibus leo at, consectetur enim. Donec at odio posuere, feugiat ligula ac, finibus ligula. Ut consequat molestie purus a facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lacinia id odio quis lacinia. Donec in ipsum vitae metus tincidunt molestie eu at sapien. Vivamus a rutrum orci, non convallis purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lacinia id odio quis lacinia. Donec in ipsum vitae metus tincidunt molestie eu at sapien. Vivamus a rutrum orci, non convallis purus. Ut consequat molestie purus a facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas lacinia id odio quis lacinia. Donec in ipsum vitae metus tincidunt molestie eu at sapien. Vivamus a rutrum orci, non convallis purus. Pellentesque fermentum ligula at lacus pharetra tempus quis ac elit. Aenean quis felis accumsan, placerat nibh a, sodales turpis. Nunc odio enim, consequat et placerat quis, laoreet non augue. Morbi efficitur facilisis enim, vitae tempus mi faucibus nec. Curabitur et augue semper, faucibus leo at, consectetur enim. Donec at odio posuere, feugiat ligula ac, finibus ligula. Ut consequat molestie purus a facilisis."

const Feedback = {
  correct:"Feedback when answer is correct",
  incorrect:"Feedback when answer is wrong"
}
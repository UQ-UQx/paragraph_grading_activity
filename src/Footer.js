import React, { Component } from 'react'
import { clearFix } from 'polished'
import styled from 'styled-components'

import { Button, Alert } from "reactstrap"

const Container = styled.div`
    width:100%;
    min-height:100px;
    ${ clearFix() }
    padding-top:20px;
`

const FeedbackContainer = styled(Alert)`

    margin-top:10px;

`

const FeedbackHeadingContainer = styled.h4`

`

export default class Footer extends Component{
    render(){

        let feedback = ""
        let disabled = false
        let feedback_color = "danger"
        let feedback_container = ""

        if(!this.props.selected_grade){
            disabled = true
        }
        if(this.props.is_submitted){
            disabled = true
            feedback = this.props.is_correct ? this.props.feedback.correct : this.props.feedback.incorrect 
            let feedback_heading = <FeedbackHeadingContainer className="alert-heading">"Oh no! That's wrong"</FeedbackHeadingContainer>

            if(this.props.is_correct){
                feedback_color = "success"
                feedback_heading = <FeedbackHeadingContainer className="alert-heading">"Well done! that's correct"</FeedbackHeadingContainer>
            }

            feedback_container = (<FeedbackContainer color={feedback_color} >
                {feedback_heading}
                {feedback}
            </FeedbackContainer>)
        }
         

        return(<Container>
            <Button outline disabled={disabled} color="primary"

                onClick={()=>{

                    let is_correct = this.props.correct_answer === this.props.selected_grade 

                    this.props.updateState({
                        "is_submitted":true,
                        is_correct
                    })
                }}
            
            >{this.props.is_submitted ? "Submitted":"Submit"}</Button>

            {feedback_container}
            
            
        </Container>)
    }
}


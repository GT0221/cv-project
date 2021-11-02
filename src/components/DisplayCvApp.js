import React from 'react';

const DisplayCvApp = (props) => {
    return (
        <div className={`cv-container ${!props.display ? "hide" : "reveal"}`}>
            <div className='heading'></div>
            <div className='personal-info'>
                <h1>Personal info</h1>
                <p>Name: {props.info.name}</p>
                <p>Date of birth: {props.info.DOB}</p>
                <p>Email: {props.info.email}</p>
                <p>Phone number: {props.info.phone}</p>
            </div>
            <div className='education'>
                <h1>Education</h1>
                <p>School/University: {props.info.school}</p>
                <p>Major: {props.info.major}</p>
                <p>Start date: {props.info.schoolStart}</p>
                <p>End date: {props.info.schoolEnd}</p>
            </div>
            <div className='work'>
                <h1>Employment History</h1>
                <p>Company: {props.info.company}</p>
                <p>Position: {props.info.position}</p>
                <p>Job Description: {props.info.description}</p>
                <p>Start Date: {props.info.workStart}</p>
                <p>End Date: {props.info.workEnd}</p>
            </div>
            <div className='edit-container'>
                <button className='edit-btn' onClick={props.handleEdit}>
                    EDIT
                </button>
            </div>
        </div>
    );
};

export default DisplayCvApp;
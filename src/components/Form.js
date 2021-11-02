import React from 'react';

const Form = (props) => {
    return (
        <form
            onSubmit={props.handleSubmit}
            className={props.display ? "reveal" : "hide"}
        >
            <div>
                <h1>Personal Info</h1>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={props.info.name}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='DOB'>Date of birth</label>
                <input
                    type='date'
                    name='DOB'
                    value={props.info.DOB}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={props.info.email}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor='phone'>Phone number: </label>
                <input
                    name='phone'
                    type='tel'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    value={props.info.phone}
                    onChange={props.handleChange}
                    required
                />
                <small>Format: 123-456-7890</small>
            </div>
            <div>
                <h1>Education</h1>
                <p>Information about highest level of education completed</p>
                <label htmlFor='school'>School/University</label>
                <input
                    type='text'
                    name='school'
                    value={props.info.school}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='major'>Major</label>
                <input
                    type='text'
                    name='major'
                    value={props.info.major}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='schoolStart'>Start date:</label>
                <input
                    type='date'
                    name='schoolStart'
                    value={props.info.schoolStart}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='schoolEnd'>End date:</label>
                <input
                    type='date'
                    name='schoolEnd'
                    value={props.info.schoolEnd}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <h1>Employment history</h1>
                <p>Information about your last place of employment</p>
                <label htmlFor='company'>Company</label>
                <input
                    type='text'
                    name='company'
                    value={props.info.company}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='position'>Position</label>
                <input
                    type='text'
                    name='position'
                    value={props.info.position}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='description'>Job description</label>
                <textarea
                    type='text'
                    name='description'
                    value={props.info.description}
                    maxLength='200'
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='workStart'>Start date: </label>
                <input
                    type='date'
                    name='workStart'
                    value={props.info.workStart}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor='workEnd'>End date: </label>
                <input
                    type='date'
                    name='workEnd'
                    value={props.info.workEnd}
                    onChange={props.handleChange}
                />
            </div>
            <div className='submit-container'>
                <button type='submit' className='submit-btn'>
                    Submit form
                </button>
            </div>
        </form>
    );
};


export default Form;
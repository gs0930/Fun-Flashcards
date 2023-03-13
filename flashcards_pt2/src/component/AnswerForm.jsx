import './AnswerForm.css'
import { useState } from 'react';
const AnsForm = ({ submitForm }) => {
    //state with the answer form object

    const [answerForm, setanswerForm] = useState({answer: '' })
    // this is the name in <input /> and <textarea />

    // handle change to update postForm
    const handleChange = (e) => {
        const newAnsForm = {}
        // this is the value in <input /> and <textarea />
        const newValue = e.target.value
        const key = e.target.name
        newAnsForm[key] = newValue
        setanswerForm({ ...answerForm, ...newAnsForm })
    };
    const handleReset = () => {
        setanswerForm({ answer: '' });
      };

    const handleOnSubmit = (e) => {
        //all about event prevent default: https://www.w3schools.com/jsref/event_preventdefault.asp
        e.preventDefault()
        submitForm(answerForm)
        handleReset()  //reset when submitted
    };
    return (
        <form onSubmit={handleOnSubmit}>

            <label>
                Guess Here:
                <input value={answerForm.answer} type="text" onChange={handleChange} name="answer" placeholder="Guess here" />
                <input type="submit" value="Submit" className="action-button" />
            </label>

        </form>
    )
};

export default AnsForm
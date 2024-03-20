import React, { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner'
import "react-toastify/dist/ReactToastify.css";
import './Form.scss'

function Form() {

    const url = "https://script.google.com/macros/s/AKfycbyb75VSgT4BCiwGEZ_ipoJINBGWi8ievFUccBXNV73WxyNXMsaG-cYMC7BJhqks6hPwzg/exec"
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const showToastMessage = () => {
        toast.success("SUCESSFULLY SUBMITTED"
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(url, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            showToastMessage()
        })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form ref={formRef} className="form" action="https://docs.google.com/forms/d/e/1FAIpQLSe8ihhotKhUu77nf5JdGngPP6e4fhD95MCUnNNDnrO6-xV19w/viewform?usp=sf_link" method="POST">
                <fieldset className="student-details">
                    <legend>STUDENT DETAILS:</legend>
                    <div className="left-part">
                        <label for="STUDENT NAME">STUDENT NAME
                            <input type="text" name="STUDENT NAME" required />
                        </label>
                        <label for="CLASS">
                            CLASS
                            <select className="select-class" name="CLASS" required>
                                <option value="KG">KG</option>
                                <option value="NURSERY">NURSERY</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                            </select>
                        </label>
                        <label for="DATE OF BIRTH">DATE OF BIRTH
                            <input type="date" name="DATE OF BIRTH" required />
                        </label>
                        <label for="GENDER">GENDER:
                            &nbsp; MALE<input type="radio" value="MALE" name="GENDER" required />
                            FEMALE<input type="radio" value="FEMALE" name="GENDER" required />
                        </label>
                        <label for="RELIGION">RELIGION
                            <input type="text" name="RELIGION" required />
                        </label>
                        <label for="MOTHER TONGUE">MOTHER TONGUE
                            <input type="text" name="MOTHER TONGUE" required />
                        </label>
                        <label for="CASTE">CASTE
                            <input type="text" name="CASTE" required />
                        </label>
                        <label for="CATEGORY">
                            CATEGORY
                            <select className="select-class" name="CATEGORY" required>
                                <option value="GENERAL">GENERAL</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                            </select>
                        </label>
                        <label for="AADHAAR">AADHAAR NUMBER
                            <input type="tel" minLength="12" maxLength="12" name="AADHAAR NUMBER" required />
                        </label>
                        <label for="SPECIAL CATEGORY">ANY OTHER SPECIAL CATEGORY:
                            &nbsp; NA<input type="radio" value="NA" name="SPECIAL CATEGORY" required />
                            BPL<input type="radio" value="BPL" name="SPECIAL CATEGORY" required />
                            PH<input type="radio" value="PH" name="SPECIAL CATEGORY" required />
                            ORPHAN<input type="radio" value="ORPHAN" name="SPECIAL CATEGORY" required />
                        </label>
                        <label for="LAST SCHOOL">PREVIOUS SCHOOL NAME
                            <input type="text" name="LAST SCHOOL" required />
                        </label>
                        <label for="CLASS ATTENDED">
                            CLASS ATTENDED
                            <select className="select-class" name="CLASS ATTENDED" required>
                                <option value="KG">KG</option>
                                <option value="NURSERY">NURSERY</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                            </select>
                        </label>
                        <label for="RESULT">
                            RESULT
                            <select className="select-class" name="RESULT" required>
                                <option value="PASS">PASS</option>
                                <option value="FAIL">FAIL</option>
                                <option value="RESULT WAITING">RESULT WAITING</option>
                            </select>
                        </label>
                        <label for="MEDIUM">
                            MEDIUM
                            <select className="select-class" name="MEDIUM" required>
                                <option value="PASS">HINDI</option>
                                <option value="FAIL">ENGLISH</option>
                                <option value="RESULT WAITING">URDU</option>
                            </select>
                        </label>
                    </div>
                    <input className="file-input" type="file" name="PHOTO" placeholder="Upload a photo" accept=".jpg, .png" />
                </fieldset>
                <fieldset className="bank-details">
                    <legend>BANK DETAILS:</legend>
                    <label for="BANK NAME">BANK NAME
                        <input type="text" name="BANK NAME" required />
                    </label>
                    <label for="BRANCH">BRANCH
                        <input type="text" name="BRANCH" required />
                    </label>
                    <label for="ACCOUNT NUMBER">ACCOUNT NUMBER
                        <input type="tel" minLength="10" maxLength="16" name="ACCOUNT NUMBER" required />
                    </label>
                    <label for="IFSC CODE">IFSC CODE
                        <input type="tel" minLength="6" maxLength="12" name="IFSC CODE" required />
                    </label>
                </fieldset>
                <fieldset className="parents-details">
                    <legend>PARENTS DETAILS:</legend>
                    <label for="MOTHER'S NAME">MOTHER'S NAME
                        <input type="text" name="MOTHER'S NAME" required />
                    </label>
                    <label for="MOTHER'S OCCUPATION">
                        OCCUPATION
                        <select className="select-class" name="MOTHER'S OCCUPATION" required>
                            <option value="HOUSEWIFE">HOUSEWIFE</option>
                            <option value="BUSINESS">BUSINESS</option>
                            <option value="GOVERNMENT JOB">GOVERNMENT JOB</option>
                            <option value="CORPORATE JOB">CORPORATE JOB</option>
                        </select>
                    </label>
                    <label for="MOTHER'S EDUCATION">
                        EDUCATION
                        <select className="select-class" name="MOTHER'S EDUCATION" required>
                            <option value="UNEDUCATED">UNEDUCATED</option>
                            <option value="MATRICULATE">MATRICULATE</option>
                            <option value="INTERMEDIATE">INTERMEDIATE</option>
                            <option value="GRADUATION">GRADUATION</option>
                            <option value="POST GRADUATION">POST GRADUATION</option>
                        </select>
                    </label>
                    <label for="MOTHER'S MOBILE">MOTHER'S MOBILE NUMBER
                        <input type="tel" minLength="10" maxLength="10" name="MOTHER'S MOBILE" required />
                    </label>
                    <label for="MOTHER'S AADHAAR">MOTHER'S AADHAAR NUMBER
                        <input type="tel" minLength="12" maxLength="12" name="MOTHER'S AADHAAR" required />
                    </label>
                    <label for="FATHER'S NAME">FATHER'S NAME
                        <input type="text" name="FATHER'S NAME" required />
                    </label>
                    <label for="FATHER'S OCCUPATION">
                        OCCUPATION
                        <select className="select-class" name="FATHER'S OCCUPATION" required>
                            <option value="BUSINESS">BUSINESS</option>
                            <option value="GOVERNMENT JOB">GOVERNMENT JOB</option>
                            <option value="CORPORATE JOB">CORPORATE JOB</option>
                        </select>
                    </label>
                    <label for="FATHER'S EDUCATION">
                        EDUCATION
                        <select className="select-class" name="FATHER'S EDUCATION" required>
                            <option value="UNEDUCATED">UNEDUCATED</option>
                            <option value="MATRICULATE">MATRICULATE</option>
                            <option value="INTERMEDIATE">INTERMEDIATE</option>
                            <option value="GRADUATION">GRADUATION</option>
                            <option value="POST GRADUATION">POST GRADUATION</option>
                        </select>
                    </label>
                    <label for="FATHER'S MOBILE">FATHER'S MOBILE NUMBER
                        <input type="tel" minLength="10" maxLength="10" name="FATHER'S MOBILE" required />
                    </label>
                    <label for="FATHER'S AADHAAR">FATHER'S AADHAAR NUMBER
                        <input type="tel" minLength="12" maxLength="12" name="FATHER'S AADHAAR" required />
                    </label>
                    <label for="ADDRESS">ADDRESS
                        <input type="text" maxLength="20" minLength="20" pattern="[A-Z]" name="ADDRESS" />
                    </label>
                </fieldset>
                <fieldset className="guardian-details">
                    <legend>GUARDIAN DETAILS:</legend>
                    <label for="GUARDIAN'S NAME">GUARDIAN'S NAME
                        <input type="text" name="GUARDIAN'S NAME" required />
                    </label>
                    <label for="RELATION">RELATION
                        <input type="text" name="RELATION" required />
                    </label>
                    <label for="GUARDIAN'S EDUCATION">
                        EDUCATION
                        <select className="select-class" name="GUARDIAN'S EDUCATION" required>
                            <option value="UNEDUCATED">UNEDUCATED</option>
                            <option value="MATRICULATE">MATRICULATE</option>
                            <option value="INTERMEDIATE">INTERMEDIATE</option>
                            <option value="GRADUATION">GRADUATION</option>
                            <option value="POST GRADUATION">POST GRADUATION</option>
                        </select>
                    </label>
                    <label for="GUARDIAN'S MOBILE">GUARDIAN'S MOBILE NUMBER
                        <input type="tel" minLength="10" maxLength="10" name="GUARDIAN'S MOBILE" required />
                    </label>
                    <label for="GUARDIAN'S AADHAAR">GUARDIAN'S AADHAAR NUMBER
                        <input type="tel" minLength="12" maxLength="12" name="GUARDIAN'S AADHAAR" required />
                    </label>
                </fieldset>
                <ToastContainer position="top-right" />
                {loading && <span style={{padding: "10px 0"}}><Audio
                    height="20"
                    width="20"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /></span>}
                <submit className="submit-button" type="submit" onClick={handleSubmit} disabled={!formRef}>SUBMIT</submit>
            </form>
        </div>
    )
}

export default Form
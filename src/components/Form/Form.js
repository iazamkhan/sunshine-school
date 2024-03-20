import React, { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Form.scss'

function Form() {

    const url = "https://script.google.com/macros/s/AKfycbzy7l31izNFRlG8gj8gyfGg4AEY4HNWMt9DKTliOwk-3KPWKmI9LFPl_IHkPdzgz2T5Kw/exec"
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const showToastMessage = () => {
        toast.success("SUCESSFULLY SUBMITTED", {
            position: toast.POSITION.TOP_RIGHT,
        });
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
                <section className="first-section">
                    <div className="left-part">
                        <div className="name-and-class">
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
                        </div>
                        <div className="name-and-class">
                            <label for="DATE OF BIRTH">DATE OF BIRTH
                                <input type="date" name="DATE OF BIRTH" required />
                            </label>
                            <label for="GENDER">GENDER:
                                &nbsp; MALE<input type="radio" value="MALE" name="GENDER" required />
                                FEMALE<input type="radio" value="FEMALE" name="GENDER" required />
                            </label>
                        </div>
                        <div className="name-and-class">
                            <label for="RELIGION">RELIGION
                                <input type="text" name="RELIGION" required />
                            </label>
                            <label for="MOTHER TONGUE">MOTHER TONGUE
                                <input type="text" name="MOTHER TONGUE" required />
                            </label>
                        </div>
                        <div className="name-and-class">
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
                        </div>
                        <div className="name-and-class">
                            <label for="AADHAAR">AADHAAR NUMBER
                                <input type="tel" minLength="12" maxLength="12" name="AADHAAR NUMBER" required />
                            </label>
                        </div>
                    </div>
                    <input className="file-input" type="file" name="PHOTO" placeholder="Upload a photo" accept=".jpg, .png" />
                </section>
                <section className="second-section">
                    <div className="name-and-class">
                        <label for="SPECIAL CATEGORY">WHETHER BELONG TO ANY OTHER SPECIAL CATEGORY:
                            &nbsp; NA<input type="radio" value="NA" name="SPECIAL CATEGORY" required />
                            BPL<input type="radio" value="BPL" name="SPECIAL CATEGORY" required />
                            PH<input type="radio" value="PH" name="SPECIAL CATEGORY" required />
                            ORPHAN<input type="radio" value="ORPHAN" name="SPECIAL CATEGORY" required />
                        </label>
                    </div>
                    <div className="name-and-class">
                        <label for="LAST SCHOOL">SCHOOL LAST ATTENDED
                            <input type="text" name="LAST SCHOOL" required />
                        </label>
                    </div>
                    <div className="name-and-class">
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
                    <div className="name-and-class">
                        <label for="BANK NAME">STUDENT BANK DETAILS:  BANK NAME
                            <input type="text" name="BANK NAME" required />
                        </label>
                        <label for="BRANCH">BRANCH
                            <input type="text" name="BRANCH" required />
                        </label>
                    </div>
                    <div className="name-and-class">
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
                    </div>
                </section>
                {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
                {/* <ToastContainer /> */}
            </form>
        </div>
    )
}

export default Form
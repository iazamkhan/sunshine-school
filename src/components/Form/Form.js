import React, { useRef, useState } from 'react'
import axios from 'axios'
import './Form.scss'

function Form() {

    const url = "https://script.google.com/macros/s/AKfycbwPvAI_tRl51i82sq6Re3nbGWEtdlJ0CODqbCAZk9XDSLAsN3RTs14Ye_od1MrbNYbfWw/exec"
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(url, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form ref={formRef} className="form" action="https://docs.google.com/forms/d/e/1FAIpQLSe8ihhotKhUu77nf5JdGngPP6e4fhD95MCUnNNDnrO6-xV19w/viewform?usp=sf_link" method="POST">
                <div className="name-and-class">
                    <label for="entry.300882085">STUDENT NAME
                        <input type="text" name="STUDENT NAME" required="required" />
                    </label>
                    <label for="entry.1163096108">
                        CLASS
                        <select className="select-class" required="required" name="CLASS">
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
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form
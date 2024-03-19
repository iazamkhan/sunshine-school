import React, { useRef } from 'react'
import axios from 'axios'
import './Form.scss'

function Form() {

    const url = "https://script.google.com/macros/s/AKfycbwPvAI_tRl51i82sq6Re3nbGWEtdlJ0CODqbCAZk9XDSLAsN3RTs14Ye_od1MrbNYbfWw/exec"
    const formRef = useRef(null)

    
    return (
        <div>
            <form ref={formRef} className="form" action="https://docs.google.com/forms/d/e/1FAIpQLSe8ihhotKhUu77nf5JdGngPP6e4fhD95MCUnNNDnrO6-xV19w/viewform?usp=sf_link" method="POST">
                <div className="name-and-class">
                    <label for="entry.300882085">STUDENT NAME
                        <input type="text" name="entry.300882085" required="required" />
                    </label>
                    <label for="entry.1163096108">
                        CLASS
                        <select className="select-class" required="required" name="entry.1163096108">
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
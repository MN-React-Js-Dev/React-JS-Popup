import React, { useEffect, useState } from 'react'

const ModelPopUp = () => {
    const [flag, setflag] = useState(false)
    const [submit, setsubmit] = useState(flag)
    const [inputes, setinputes] = useState({
        address: "",
        email: ""
    })

    const [errors, seterror] = useState({
        address: "",
        email: ""
    })

    function handleBtn() {
        setflag(true)
    }
    const handleClose = (e) => {
        setflag(false)
        setinputes({
            address: "",
            email: ""
        })
        seterror({
            address: "",
            email: ""
        })
     }



    const handleInputes = (e) => {
        const { name, value } = e.target
        setinputes({ ...inputes, [name]: value })
        switch (name) {
            case "address":
                errors.address = value.length > 0 ? "" : "Enter address"
                break;
            case "email":
                errors.email = value.length > 0 ? "" : "Enter email"
                break;
            default:
                break;
        }
        seterror(errors)

    }
    function validate() {
        if (!inputes.email) {
            errors.email = "Enter email"
        }
        if (!inputes.address) {
            errors.address = "Enter address"
        }
        return errors
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && Object.keys(inputes).length !== 0) {
            console.log(errors, "error")
        }
    }, [inputes])

    const clearInputField=()=>{
        setinputes({
            address: "",
            email: ""
        })
         
        // console.log(inputes,"clear input")
        // console.log(errors,"clear errors")

    }
    
    
    const handleSubmit = (e) => {
        setsubmit(true)
        seterror(validate(inputes));
        // console.log(errors, " submit errors errors")

        if (inputes.email !== "" && inputes.address !== "") {
            setflag(false)
            setinputes({
                address: "",
                email: ""
            })
            seterror({
                address: "",
                email: ""
            })
            var paylod = {
                email: inputes.email,
                address: inputes.address
            }
            console.log(paylod, "paylod")
        }

    }



    return (
        <>
            <button className="btn btn-danger extra" onClick={handleBtn}>Open Modal</button><br></br>
            <div id="myModals" className={`modals${flag ? "show" : ""}`}>
                <div className="modals-content">
                    <span className="btn btn-danger m-1 closeed" onClick={handleClose}>&times;</span>
                    <button className='btn btn-success  m-1 closeed' onClick={clearInputField}>clear</button>
                    <h2 className='center-heading' >Custom PoPup</h2>

                    <div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="email" placeholder="name@example.com" value={inputes.email} onChange={handleInputes} />
                            <span className='error'>{errors.email}</span>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label" >Example textarea</label>

                            <textarea className="form-control" rows="3" name="address" id="address" onChange={handleInputes} value={inputes.address}></textarea>
                            <span className='error'>{errors.address}</span>
                        </div>
                    </div>
                    <div><button type='submit' className='btn btn-danger' onClick={handleSubmit}>Submit</button></div>
                </div>
            </div><br></br>

        </>
    )
}

export default ModelPopUp
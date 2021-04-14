import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('number', info.number);

        fetch('https://lit-fortress-83519.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (info && file) {
                    alert('Doctors addedd successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }


    return (
        <section className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-5" style={{ backgroundColor: "#F4FDFB", right: 0, position: 'absolute', height: '100vh' }}>
                    <h3 className="text-brand mb-4">Add Doctor</h3>

                    <form className="shadow-sm" style={{ width: '60%', background: 'white', padding: '28px', borderRadius: '6px' }} onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputNumber1">Phone Number</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="number" placeholder="Enter number" />
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="exampleInputPassword1">Upload a image</label> <br />
                            <input onChange={handleFileChange} type="file" className="" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn-style">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddDoctor;
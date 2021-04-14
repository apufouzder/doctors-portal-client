import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        border: 'none'
    }
};
Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('https://lit-fortress-83519.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {

                if (success) {
                    closeModal();
                    // alert('Appointment created successfully!')
                    console.log('success', success);

                }
            })

    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-brand text-center mb-4">{appointmentOn}</h2>
                <p className="text-secondary text-center">On {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="p-3">

                    <div className="form-group">
                        <input type="text" className="form-control mb-2" name="name" placeholder="Your name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control mb-2" name="number" placeholder="Phone Number" {...register("number", { required: true })} />
                        {errors.number && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control mb-2" name="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group row mb-3">
                        <div className="col-4">
                            <select className="form-select mb-2" name="gender" {...register("gender", { required: true })}>
                                <option disabled={true} value="not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Male">Female</option>
                                <option value="not set">other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="number" className="form-control mb-2" name="age" placeholder="Age" {...register("age", { required: true })} />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="number" className="form-control mb-2" name="weight" placeholder="Weight" {...register("weight", { required: true })} />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <input type="date" className="form-control mb-3" name="date" placeholder="date" {...register("date", { required: true })} />
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div> */}
                    <div className="form-group text-end">
                        {/* <input className="btn-style" type="submit" /> */}
                        <button type="submit" className="btn-style">Send</button>
                    </div>


                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;
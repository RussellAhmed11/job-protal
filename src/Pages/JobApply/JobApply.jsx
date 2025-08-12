import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams();
    const { user } = UseAuth();
    const navigate=useNavigate()

    const handleApplyJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log({ linkedin, github, resume })
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch('http://localhost:5000/job-application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Apply Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myapplication')
                }
            })

    }
    return (
        <div className="card bg-base-100 w-full shadow-lg mt-5 p-5">
            <h1 className='text-3xl font-bold text-center'>Apply job and good luck</h1>
            <form onSubmit={handleApplyJob} className="fieldset">
                <label className="label">Linkedin</label>
                <input type="url" name='linkedin' className="input w-full" placeholder="Linkedin Url" required />
                <label className="label">Github</label>
                <input type="url" name='github' className="input w-full" placeholder="github" required />
                <label className="label">Resume</label>
                <input type="url" name='resume' className="input w-full" placeholder="ResumeUrl" required />
                <button className="btn btn-neutral mt-4">Apply</button>
            </form>
        </div>


    );
};

export default JobApply;
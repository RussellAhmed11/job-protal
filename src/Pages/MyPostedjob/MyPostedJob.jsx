import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = UseAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [user.email])
    return (
        <div>
            <h1>My posted jobs:{jobs?.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                     {
                        jobs.map((job,index)=>   <tr >
                            <th>{index+1}</th>
                            <td>{job.title}</td>
                            <td>{job?.applicationDeadline}</td>
                            <td>{job?.applicationCount}</td>
                        </tr>)
                     }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;
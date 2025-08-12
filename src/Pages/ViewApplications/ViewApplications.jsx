import status from "daisyui/components/status";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
    const applications = useLoaderData()
    const handleApplicationStatus = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:5000/job-application/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Status change successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <h2>Application for this job:{applications.length}</h2>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Linkedin</th>
                            <th>Resume</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => <tr key={application._id}>
                                <th>{index + 1}</th>
                                <td>{application.applicant_email}</td>
                                <td>{application.linkedin}</td>
                                <td>Rejected</td>
                                <td>
                                    <select onChange={(e) => handleApplicationStatus(e, application._id)} defaultValue={application.status || 'Change Status'} className="select">
                                        <option disabled={true}>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;
import { useLoaderData } from "react-router-dom";


const JobsDetails = () => {
    const {title,company,applicationDeadline}=useLoaderData();
  
    return (
        <div>
            <h2>job details for {title}</h2>
            <p>apply for:{company}</p>
            <p>Deadline:{applicationDeadline}</p>
            <button className="btn btn-primary">Apply now</button>
        </div>
    );
};

export default JobsDetails;
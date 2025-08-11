
import { Link, useLoaderData } from "react-router-dom";


const JobsDetails = () => {
    const {_id,title,company,applicationDeadline}=useLoaderData();
  console.log(_id)
    return (
        <div>
            <h2>job details for {title}</h2>
            <p>apply for:{company}</p>
            <p>Deadline:{applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply now</button>
            </Link>
        </div>
    );
};

export default JobsDetails;
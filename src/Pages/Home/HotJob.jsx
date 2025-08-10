import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJob = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job
    return (
        <div className="card bg-base-200 shadow-lg">
            <div className='flex gap-2 m-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-3xl">{company}</h4>
                    <p className='flex items-center gap-1'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map(skill=><p className='border rounded-md text-center px-2 hover:text-blue-600 font-semibold hover:bg-base-300'>{skill}</p>)
                    }

                </div>
                <div className="card-actions justify-end items-center mt-4">
                      <p className='flex items-center'>Salary:<FaDollarSign></FaDollarSign>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                  <Link to={`jobs/${_id}`}>
                    <button className="btn btn-primary">Apply</button>
                    </Link>
                </div>
            </div>
        </div>
         
     
    );
};

export default HotJob;
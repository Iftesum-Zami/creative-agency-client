import React from 'react';

const AdminServiceList = ({service}) => {
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    //   appointments.map((appointment, index) => 
                            
                        <tr>
                            <td>{service.name}</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                        // )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminServiceList;
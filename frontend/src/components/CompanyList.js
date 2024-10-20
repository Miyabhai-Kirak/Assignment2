import React from 'react';
import "./CompanyList.css"

function CompanyList() {
    // Example companies data (frontend-only)
    const companies = [
        { company_id: 1, company_name: 'Tech Solutions', company_address: '123 Main St', contact_id: 101 },
        { company_id: 2, company_name: 'Creative Agency', company_address: '456 Elm St', contact_id: 102 },
        { company_id: 3, company_name: 'Design Co.', company_address: '789 Maple St', contact_id: 103 }
    ];

    return (
        <table className='company-table'>
            <thead>
                <tr>
                    <th>Company ID</th>
                    <th>Company Name</th>
                    <th>Company Address</th>
                    <th>Contact ID</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company) => (
                    <tr key={company.company_id}>
                        <td>{company.company_id}</td>
                        <td>{company.company_name}</td>
                        <td>{company.company_address}</td>
                        <td>{company.contact_id}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CompanyList;

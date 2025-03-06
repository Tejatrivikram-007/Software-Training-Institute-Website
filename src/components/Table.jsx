import React from 'react';
import '../styles/table.css';

const students = [
  { id: 1, image: "https://via.placeholder.com/50?text=Student+1", name: "John Doe", mobileNumber: "+91 1234567890", companyPlaced: "Google", designation: "Software Engineer", package: "10 LPA" },
  { id: 2, image: "https://via.placeholder.com/50?text=Student+2", name: "Jane Smith", mobileNumber: "+91 1234567891", companyPlaced: "Microsoft", designation: "Data Scientist", package: "12 LPA" },
  { id: 3, image: "https://via.placeholder.com/50?text=Student+3", name: "Amit Kumar", mobileNumber: "+91 1234567892", companyPlaced: "Amazon", designation: "Cloud Engineer", package: "14 LPA" },
  { id: 4, image: "https://via.placeholder.com/50?text=Student+4", name: "Anjali Verma", mobileNumber: "+91 1234567893", companyPlaced: "TCS", designation: "Consultant", package: "9 LPA" },
  { id: 5, image: "https://via.placeholder.com/50?text=Student+5", name: "Ravi Sharma", mobileNumber: "+91 1234567894", companyPlaced: "Infosys", designation: "Software Developer", package: "8 LPA" },
  { id: 6, image: "https://via.placeholder.com/50?text=Student+6", name: "Priya Gupta", mobileNumber: "+91 1234567895", companyPlaced: "Wipro", designation: "HR Executive", package: "7.5 LPA" },
  { id: 7, image: "https://via.placeholder.com/50?text=Student+7", name: "Vikram Patel", mobileNumber: "+91 1234567896", companyPlaced: "Accenture", designation: "Business Analyst", package: "11 LPA" },
  { id: 8, image: "https://via.placeholder.com/50?text=Student+8", name: "Meera Rao", mobileNumber: "+91 1234567897", companyPlaced: "IBM", designation: "UX Designer", package: "9.5 LPA" },
  { id: 9, image: "https://via.placeholder.com/50?text=Student+9", name: "Sandeep Raj", mobileNumber: "+91 1234567898", companyPlaced: "Capgemini", designation: "Business Intelligence", package: "10.5 LPA" },
  { id: 10, image: "https://via.placeholder.com/50?text=Student+10", name: "Neha Singh", mobileNumber: "+91 1234567899", companyPlaced: "HCL", designation: "Full Stack Developer", package: "13 LPA" },
  { id: 11, image: "https://via.placeholder.com/50?text=Student+11", name: "Aakash Jain", mobileNumber: "+91 1234567800", companyPlaced: "Flipkart", designation: "Software Engineer", package: "15 LPA" },
  { id: 12, image: "https://via.placeholder.com/50?text=Student+12", name: "Soniya Gupta", mobileNumber: "+91 1234567801", companyPlaced: "Cognizant", designation: "Data Analyst", package: "8.5 LPA" },
  { id: 13, image: "https://via.placeholder.com/50?text=Student+13", name: "Shubham Mehta", mobileNumber: "+91 1234567802", companyPlaced: "Zensar Technologies", designation: "Software Engineer", package: "9 LPA" },
  { id: 14, image: "https://via.placeholder.com/50?text=Student+14", name: "Ritika Joshi", mobileNumber: "+91 1234567803", companyPlaced: "SAP", designation: "System Engineer", package: "11.5 LPA" },
  { id: 15, image: "https://via.placeholder.com/50?text=Student+15", name: "Ashish Yadav", mobileNumber: "+91 1234567804", companyPlaced: "Adobe", designation: "Product Manager", package: "16 LPA" },
  { id: 16, image: "https://via.placeholder.com/50?text=Student+16", name: "Kritika Thakur", mobileNumber: "+91 1234567805", companyPlaced: "Adobe", designation: "UI Designer", package: "12 LPA" },
  { id: 17, image: "https://via.placeholder.com/50?text=Student+17", name: "Ajay Kumar", mobileNumber: "+91 1234567806", companyPlaced: "Oracle", designation: "Cloud Architect", package: "18 LPA" },
  { id: 18, image: "https://via.placeholder.com/50?text=Student+18", name: "Sakshi Sharma", mobileNumber: "+91 1234567807", companyPlaced: "Hewlett Packard", designation: "Network Engineer", package: "10 LPA" },
  { id: 19, image: "https://via.placeholder.com/50?text=Student+19", name: "Rishabh Gupta", mobileNumber: "+91 1234567808", companyPlaced: "Zebra Technologies", designation: "Software Tester", package: "9 LPA" },
  { id: 20, image: "https://via.placeholder.com/50?text=Student+20", name: "Tanuja Bhat", mobileNumber: "+91 1234567809", companyPlaced: "Cognizant", designation: "Cloud Developer", package: "11 LPA" },
  { id: 21, image: "https://via.placeholder.com/50?text=Student+21", name: "Pankaj Mehra", mobileNumber: "+91 1234567810", companyPlaced: "Wipro", designation: "Security Analyst", package: "7 LPA" },
  { id: 22, image: "https://via.placeholder.com/50?text=Student+22", name: "Rohit Verma", mobileNumber: "+91 1234567811", companyPlaced: "TCS", designation: "Software Developer", package: "8.5 LPA" },
  { id: 23, image: "https://via.placeholder.com/50?text=Student+23", name: "Shreya Kapoor", mobileNumber: "+91 1234567812", companyPlaced: "Amazon", designation: "Data Scientist", package: "14 LPA" },
  { id: 24, image: "https://via.placeholder.com/50?text=Student+24", name: "Vikrant Kapoor", mobileNumber: "+91 1234567813", companyPlaced: "Tech Mahindra", designation: "Business Analyst", package: "10 LPA" },
  { id: 25, image: "https://via.placeholder.com/50?text=Student+25", name: "Simran Kaur", mobileNumber: "+91 1234567814", companyPlaced: "Accenture", designation: "Cloud Developer", package: "12 LPA" },
  { id: 26, image: "https://via.placeholder.com/50?text=Student+26", name: "Parth Patel", mobileNumber: "+91 1234567815", companyPlaced: "Cognizant", designation: "QA Engineer", package: "7.5 LPA" },
  { id: 27, image: "https://via.placeholder.com/50?text=Student+27", name: "Sneha Raj", mobileNumber: "+91 1234567816", companyPlaced: "SAP", designation: "HR Executive", package: "8 LPA" },
  { id: 28, image: "https://via.placeholder.com/50?text=Student+28", name: "Rohini Soni", mobileNumber: "+91 1234567817", companyPlaced: "Google", designation: "UI/UX Designer", package: "13 LPA" },
  { id: 29, image: "https://via.placeholder.com/50?text=Student+29", name: "Aman Gupta", mobileNumber: "+91 1234567818", companyPlaced: "Microsoft", designation: "Cloud Engineer", package: "14 LPA" },
  { id: 30, image: "https://via.placeholder.com/50?text=Student+30", name: "Aditi Kumar", mobileNumber: "+91 1234567819", companyPlaced: "Oracle", designation: "Security Analyst", package: "11 LPA" },
  { id: 31, image: "https://via.placeholder.com/50?text=Student+31", name: "Sahil Verma", mobileNumber: "+91 1234567820", companyPlaced: "Flipkart", designation: "Data Analyst", package: "9 LPA" },
  { id: 32, image: "https://via.placeholder.com/50?text=Student+32", name: "Komal Sharma", mobileNumber: "+91 1234567821", companyPlaced: "Cognizant", designation: "Software Developer", package: "7.5 LPA" },
  { id: 33, image: "https://via.placeholder.com/50?text=Student+33", name: "Ritika Desai", mobileNumber: "+91 1234567822", companyPlaced: "Wipro", designation: "Network Engineer", package: "10 LPA" },
  { id: 34, image: "https://via.placeholder.com/50?text=Student+34", name: "Nikhil Singh", mobileNumber: "+91 1234567823", companyPlaced: "Zebra Technologies", designation: "Software Tester", package: "8.5 LPA" },
  { id: 35, image: "https://via.placeholder.com/50?text=Student+35", name: "Neelam Agarwal", mobileNumber: "+91 1234567824", companyPlaced: "Amazon", designation: "UX Designer", package: "11 LPA" },
  { id: 36, image: "https://via.placeholder.com/50?text=Student+36", name: "Sandeep Chandra", mobileNumber: "+91 1234567825", companyPlaced: "SAP", designation: "Data Engineer", package: "10 LPA" },
  { id: 37, image: "https://via.placeholder.com/50?text=Student+37", name: "Parul Soni", mobileNumber: "+91 1234567826", companyPlaced: "Tech Mahindra", designation: "Software Developer", package: "7.8 LPA" },
  { id: 38, image: "https://via.placeholder.com/50?text=Student+38", name: "Jatin Malhotra", mobileNumber: "+91 1234567827", companyPlaced: "IBM", designation: "Data Scientist", package: "13 LPA" },
  { id: 39, image: "https://via.placeholder.com/50?text=Student+39", name: "Shalini Mehra", mobileNumber: "+91 1234567828", companyPlaced: "Accenture", designation: "Software Engineer", package: "9.5 LPA" },
  { id: 40, image: "https://via.placeholder.com/50?text=Student+40", name: "Karan Yadav", mobileNumber: "+91 1234567829", companyPlaced: "Infosys", designation: "Cloud Architect", package: "15 LPA" },
  { id: 41, image: "https://via.placeholder.com/50?text=Student+41", name: "Gaurav Soni", mobileNumber: "+91 1234567830", companyPlaced: "Capgemini", designation: "Business Analyst", package: "12 LPA" },
  { id: 42, image: "https://via.placeholder.com/50?text=Student+42", name: "Alok Kumar", mobileNumber: "+91 1234567831", companyPlaced: "Google", designation: "Full Stack Developer", package: "16 LPA" },
  { id: 43, image: "https://via.placeholder.com/50?text=Student+43", name: "Neha Agarwal", mobileNumber: "+91 1234567832", companyPlaced: "Microsoft", designation: "UI/UX Designer", package: "13.5 LPA" },
  { id: 44, image: "https://via.placeholder.com/50?text=Student+44", name: "Arvind Kumar", mobileNumber: "+91 1234567833", companyPlaced: "Wipro", designation: "Data Analyst", package: "10 LPA" },
  { id: 45, image: "https://via.placeholder.com/50?text=Student+45", name: "Deepika Joshi", mobileNumber: "+91 1234567834", companyPlaced: "TCS", designation: "Cloud Engineer", package: "14.5 LPA" },
  { id: 46, image: "https://via.placeholder.com/50?text=Student+46", name: "Anurag Mehta", mobileNumber: "+91 1234567835", companyPlaced: "Accenture", designation: "Security Analyst", package: "12 LPA" },
  { id: 47, image: "https://via.placeholder.com/50?text=Student+47", name: "Chirag Yadav", mobileNumber: "+91 1234567836", companyPlaced: "SAP", designation: "Business Intelligence", package: "8.5 LPA" },
  { id: 48, image: "https://via.placeholder.com/50?text=Student+48", name: "Richa Gupta", mobileNumber: "+91 1234567837", companyPlaced: "HCL", designation: "Business Analyst", package: "9 LPA" },
  { id: 49, image: "https://via.placeholder.com/50?text=Student+49", name: "Tanya Sharma", mobileNumber: "+91 1234567838", companyPlaced: "Oracle", designation: "Cloud Architect", package: "14 LPA" },
  { id: 50, image: "https://via.placeholder.com/50?text=Student+50", name: "Manoj Kumar", mobileNumber: "+91 1234567839", companyPlaced: "Amazon", designation: "Software Developer", package: "13 LPA" },
];


const Table = () => {
  return (
    <div className="table-container">
      <p className='ph t'>Student Placement Details</p><hr style={{width:'20%',height:'8px',borderRadius:'15px',marginLeft:'40%',border:'2px solid white',backgroundColor:'black'}}/>
      <table className="placement-table">
        <thead>
          <tr className='tabh'>
            <th>Image</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Company Placed</th>
            <th>Designation</th>
            <th>Package</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td><img src={student.image} alt={student.name} className="student-image" /></td>
              <td>{student.name}</td>
              <td>{student.mobileNumber}</td>
              <td>{student.companyPlaced}</td>
              <td>{student.designation}</td>
              <td>{student.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
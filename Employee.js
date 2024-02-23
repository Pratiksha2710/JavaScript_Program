const companyData = {
    companyName: "ABC Corporation",
    employees: [
      {
        id: 1,
        name: "Pratiksha",
        position: "Software Engineer",
        salary: 80000,
      },
      {
        id: 2,
        name: "Shivani",
        position: "FrontEnd Developer",
        salary: 60000,
      },
      {
        id: 3,
        name: "Sayali",
        position: "Data Anaylst",
        salary: 70000,
      },
    ],
    departments: {
      development: ["Pratiksha", "Trisha"],
      sales: ["Bob Johnson", "Eva Davis"],
    },
    officeLocation: {
      city: "Pune",
      country: "India",
    },
  };
  
  console.log(companyData.companyName);
  console.log(companyData.employees[0].name);
  console.log(companyData.employees[1].position);
  console.log(companyData.departments.development);
  console.log(companyData.officeLocation.city);
  console.log(companyData.officeLocation);
  
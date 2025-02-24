const http = require("http");

const employees = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        department: "Engineering",
        position: "Software Engineer",
        salary: 75000,
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        department: "Marketing",
        position: "Marketing Manager",
        salary: 68000,
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 35,
        department: "Sales",
        position: "Sales Executive",
        salary: 72000,
        email: "michael.johnson@example.com"
    },
    {
        id: 4,
        name: "Emily Davis",
        age: 32,
        department: "HR",
        position: "HR Manager",
        salary: 65000,
        email: "emily.davis@example.com"
    },
    {
        id: 5,
        name: "David Wilson",
        age: 40,
        department: "Finance",
        position: "Financial Analyst",
        salary: 82000,
        email: "david.wilson@example.com"
    },
    {
        id: 6,
        name: "Olivia Martinez",
        age: 27,
        department: "Engineering",
        position: "Frontend Developer",
        salary: 70000,
        email: "olivia.martinez@example.com"
    },
    {
        id: 7,
        name: "James Brown",
        age: 45,
        department: "Operations",
        position: "Operations Manager",
        salary: 90000,
        email: "james.brown@example.com"
    },
    {
        id: 8,
        name: "Sophia Garcia",
        age: 29,
        department: "Customer Support",
        position: "Support Specialist",
        salary: 50000,
        email: "sophia.garcia@example.com"
    },
    {
        id: 9,
        name: "Daniel Lee",
        age: 33,
        department: "IT",
        position: "Network Administrator",
        salary: 77000,
        email: "daniel.lee@example.com"
    },
    {
        id: 10,
        name: "Ava Hernandez",
        age: 26,
        department: "Engineering",
        position: "Backend Developer",
        salary: 73000,
        email: "ava.hernandez@example.com"
    }
]

const requestHandler = (req, res) => {
    // method-(get,post,delete,put) url-(like api or page url)
    const{method,url} = req;
    const parts = url.split("/");
    const id = parts[2];

    if(method === "GET" && url ==="/employees") {
        res.setHeader("content-type","application/json");
        res.end(JSON.stringify(employees));
    }
    else if(method === "GET" && parts[1] === "employees" && id){
        const employee = employees.find(emp =>emp.id === parseInt(id));
        if(employee){
            res.setHeader("content-type","application/json");
            res.end(JSON.stringify(employee));
        }
        else{
            res.setHeader("content-type","application/json");
            res.end("Employee Not found")
        }
    }

    else if(method === "POST" && url ==="/employees"){
        let body ='';
        req.on("data",(chunks)=>{
            body += chunks
        });
        req.on("end",()=>{
            const newEmployee = JSON.parse(body);
            employees.push(newEmployee);
            res.setHeader("content-type","application/json");
            res.end(JSON.stringify(newEmployee))
        });
    }
}

const server = http.createServer(requestHandler);


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is runnin on http://localhost:${PORT}`)
});
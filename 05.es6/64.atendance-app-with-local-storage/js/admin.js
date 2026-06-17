
var data = getData();

function addStudent() {
    let student = {
        name: username.value,
        email: email.value,
        password: password.value,
        course: course.value,
        roll: roll.value,
        role: role.value,
        attendance: []
    };

    data.push(student);
    saveData(data);
    loadStudents();
}

function loadStudents() {
    let data = getData()
    let table = "<tr><th>Name</th><th>Email</th><th>Actions</th></tr>";

    data.forEach((s, i) => {
        table += `<tr>
      <td>${s.name}</td>
      <td>${s.email}</td>
      <td>
        <button onclick="edit(${i})">Edit</button>
        <button onclick="del(${i})">Delete</button>
        <button onclick="markAttendance(${i})">Attendance</button>
      </td>
    </tr>`;
    });

    document.getElementById("table").innerHTML = table;
}

function del(i) {
    Swal.fire({ title: "Delete?", showCancelButton: true }).then(res => {
        if (res.isConfirmed) {
            let data = getData();
            data.splice(i, 1);
            saveData(data);
            loadStudents();
        }
    });
}

function edit(i) {
    let data = getData();
    let s = data[i];

    Swal.fire({
        title: "Edit Name",
        input: "text",
        inputValue: s.name
    }).then(res => {
        if (res.value) {
            s.name = res.value;
            saveData(data);
            loadStudents();
        }
    });
}

loadStudents()

function markAttendance(i) {
    let data = getData();
    let student = data[i];

    let today = new Date().toISOString().split("T")[0];

    Swal.fire({
        title: `Mark Attendance for ${student.name}`,
        input: "select",
        inputOptions: {
            "Present": "Present",
            "Absent": "Absent",
            "Leave": "Leave"
        },
        showCancelButton: true
    }).then(res => {
        if (res.value) {

            // check if already marked
            let already = student.attendance.find(a => a.date === today);

            if (already) {
                already.status = res.value;
            } else {
                student.attendance.push({
                    date: today,
                    status: res.value
                });
            }

            saveData(data);

            Swal.fire("Saved!", "", "success");
        }
    });
}

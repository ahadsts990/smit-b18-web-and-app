function loadProfile(){
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let div = document.getElementById("profile");

  let attendanceHTML = "<h3>Attendance</h3>";

  user.attendance.forEach(a=>{
    attendanceHTML += `<p>${a.date} - ${a.status}</p>`;
  });

  div.innerHTML = `
    <img src="${user.picture || 'assets/default.png'}" width="100" style="border-radius:50%">
    <h3>${user.name}</h3>
    <p>${user.email}</p>
    <p>${user.course}</p>
    ${attendanceHTML}
  `;
}

function editProfile(){
  let user = JSON.parse(localStorage.getItem("currentUser"));

  Swal.fire({
    title: "Edit Profile",
    html: `
      <input id="name" class="swal2-input" value="${user.name}">
      <input id="course" class="swal2-input" value="${user.course}">
    `,
    confirmButtonText: "Save",
    showCancelButton: true
  }).then((result)=>{
    if(result.isConfirmed){
      let newName = document.getElementById("name").value;
      let newCourse = document.getElementById("course").value;

      let data = JSON.parse(localStorage.getItem("students"));

      let index = data.findIndex(u => u.email === user.email);

      data[index].name = newName;
      data[index].course = newCourse;

      localStorage.setItem("students", JSON.stringify(data));

      localStorage.setItem("currentUser", JSON.stringify(data[index]));

      Swal.fire("Updated!", "", "success");

      loadProfile();
    }
  });
}

function uploadImage(){
  let file = document.getElementById("imgInput").files[0];

  if(!file) return;

  let reader = new FileReader();

  reader.onload = function(){
    let base64 = reader.result;

    let user = JSON.parse(localStorage.getItem("currentUser"));
    let data = JSON.parse(localStorage.getItem("students"));

    let index = data.findIndex(u => u.email === user.email);

    data[index].picture = base64;

    localStorage.setItem("students", JSON.stringify(data));
    localStorage.setItem("currentUser", JSON.stringify(data[index]));

    Swal.fire("Updated!", "Profile picture changed", "success");

    loadProfile();
  };

  reader.readAsDataURL(file);
}

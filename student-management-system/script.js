let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = null;

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const courseInput = document.getElementById("course");
const marksInput = document.getElementById("marks");

const addBtn = document.getElementById("addBtn");

const studentList = document.getElementById("studentList");

const searchInput = document.getElementById("search");


// Display Students
function displayStudents(data) {

  studentList.innerHTML = "";

  data.forEach((student, index) => {

    studentList.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>${student.marks}</td>

        <td>
          <button class="edit-btn" onclick="editStudent(${index})">
            Edit
          </button>

          <button class="delete-btn" onclick="deleteStudent(${index})">
            Delete
          </button>
        </td>

      </tr>
    `;
  });
}


// Add Student
addBtn.addEventListener("click", () => {

  let student = {
    name: nameInput.value,
    roll: rollInput.value,
    course: courseInput.value,
    marks: marksInput.value
  };

  // Validation
  if(
    student.name === "" ||
    student.roll === "" ||
    student.course === "" ||
    student.marks === ""
  ){
    alert("Please fill all fields");
    return;
  }

  // Edit Mode
  if(editIndex !== null){

    students[editIndex] = student;

    editIndex = null;

    addBtn.innerText = "Add Student";

  }else{

    students.push(student);

  }

  localStorage.setItem(
    "students",
    JSON.stringify(students)
  );

  displayStudents(students);

  clearFields();

});


// Delete Student
function deleteStudent(index){

  students.splice(index,1);

  localStorage.setItem(
    "students",
    JSON.stringify(students)
  );

  displayStudents(students);

}


// Edit Student
function editStudent(index){

  let student = students[index];

  nameInput.value = student.name;
  rollInput.value = student.roll;
  courseInput.value = student.course;
  marksInput.value = student.marks;

  editIndex = index;

  addBtn.innerText = "Update Student";

}


// Clear Input Fields
function clearFields(){

  nameInput.value = "";
  rollInput.value = "";
  courseInput.value = "";
  marksInput.value = "";

}


// Search Student
searchInput.addEventListener("keyup", () => {

  let searchValue = searchInput.value.toLowerCase();

  let filteredStudents = students.filter((student) => {

    return (
      student.name.toLowerCase().includes(searchValue) ||
      student.roll.toLowerCase().includes(searchValue)
    );

  });

  displayStudents(filteredStudents);

});


// Initial Display
displayStudents(students);
## School Management System

## Objective: Implement a school management API for students, teachers, and courses.


## Task Description:
Build an Express API for managing students, teachers, and course enrollments.
Use JSON files to mock data for students, teachers, and courses.
Implement endpoints for:
Adding a new student or teacher (POST /students, POST /teachers).
Viewing students, teachers, and courses (GET /students, /teachers, /courses).
Enrolling a student in a course (POST /enrollments).
Viewing student progress (GET /students/:id/progress).
Use res.cookies to manage teacher or student sessions.
school-management-system/
├── controllers/
│   ├── studentController.js
│   ├── teacherController.js
│   ├── courseController.js
├── routes/
│   ├── studentRoutes.js
│   ├── teacherRoutes.js
│   ├── courseRoutes.js
├── data/
│   ├── students.json
│   ├── teachers.json
│   ├── courses.json
├── middlewares/
│   ├── authMiddleware.js
├── app.js
└── package.json

Sample Data Body Structures:
1. Student (students.json):
{
  "id": "S001",
  "name": "Emma Watson",
  "email": "emma@example.com"
}
2. Teacher (teachers.json):
{
  "id": "T001",
  "name": "Robert Brown",
  "subject": "Mathematics"
}
3. Course (courses.json):
{
  "id": "C001",
  "name": "Algebra",
  "teacherId": "T001",
  "students": ["S001"]
}
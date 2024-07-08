/* Object_DeSturecturing_Api */

//De_Structuring:
const course={
    CourseName:"JavaScript OP",
    CoursePrice:999,
    CourseInstructur:"Anupam Ghosh",
}
console.log(course.CourseInstructur); //that is simple format

//When we create de-structuring the object:
const {CourseName:topic, CoursePrice:price, CourseInstructur:teacher}=course;
console.log(price,"\n",topic );


/* Api => Application Programming Interface */
/* JSON => Javascript Object Notation. */
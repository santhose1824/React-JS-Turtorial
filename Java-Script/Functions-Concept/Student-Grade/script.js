const studentGradeSystem = (sub1,sub2,sub3,sub4,sub5)=>{
   let studentTotalMarks = sub1+sub2+sub3+sub4+sub5
   let percentageOfStudentMakrs = studentTotalMarks/5
   console.log("The Student Marks is "+percentageOfStudentMakrs);
   if(percentageOfStudentMakrs>=50.00){
    console.log("The student is passed");
   }
   else if(percentageOfStudentMakrs>=80.00){
    console.log("The student is performed Exceptional");
   }
   else if(percentageOfStudentMakrs<=50.00){
    console.log("Sorry, to say that,the student is failed");
   }
}
studentGradeSystem(50,60,45,80,100)

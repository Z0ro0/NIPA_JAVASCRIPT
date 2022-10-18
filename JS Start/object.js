/* 지시사항 1번 내용을 코드로 작성해보세요. */
var student = {
    name: "Elice",
    age:20,
    skills: ["Java", "HTML", "CSS", "JavaScript"],

    sum: function(num1,num2) {
        return num1 + num2;
        }
}

/* 지시사항 2번 내용을 코드로 작성해보세요. */
student.name = "park";

document.write(student.name);

/* 지시사항 3번 내용을 코드로 작성해보세요. */
document.write(student.sum(10, 20));

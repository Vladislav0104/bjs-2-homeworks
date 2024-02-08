function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
	let marks = this.marks;
	if (marks !== undefined) {
		marks.push(...marksToAdd);
	};
};

Student.prototype.getAverage = function() {
	let marks = this.marks;
	if (marks === undefined || marks.length === 0 ) {
    return 0
	}
  let sum = marks.reduce((acc, value) => acc + value, 0)
  return sum / marks.length;
}

Student.prototype.exclude = function(reason) {

	delete this.marks;
	delete this.subject;
	this.excluded = reason;

}

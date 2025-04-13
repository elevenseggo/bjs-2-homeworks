function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.excluded || !this.marks) {
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.excluded || !this.marks || this.marks.length === 0) {
		return 0;
	}
	let sum = this.marks.reduce((total, mark) => total + mark, 0);
	let avg = Math.round((sum / this.marks.length) * 100) / 100;
	return avg;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.marks;
	delete this.subject;
}
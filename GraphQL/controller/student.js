import mongoose from 'mongoose';

const Student = mongoose.model('Student');

export const saveStudent = async (ctx, next) => {
  const opts = req.request.body;

  const student = new Student(opts);

  const saveInfo = await student.save();
  console.log(saveInfo);

  if (saveInfo) {
    ctx.body = {
      success: true,
      student: saveInfo
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchStudent = async (ctx, next) => {
  const students = await Student.find({});

  if (students.length) {
    ctx.body = {
      success: true,
      students: students
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

export const fetchStudentDetail = async (ctx, next) => {
  const students = await Student.find({}).populate({
    path: 'info',
    select: 'hobby height weight'
  }).exec();

  if (students.length) {
    ctx.body = {
      success: true,
      students: students
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}
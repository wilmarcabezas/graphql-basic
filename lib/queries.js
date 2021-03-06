'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
  getCourses: async () => {
    let db
    let courses = []

    try {
      db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return courses
  },
  getCourse: async (root, {
    id
  }) => {
    let db
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({
        _id: ObjectID(id)
      })
    } catch (error) {
      errorHandler(error)
    }

    return course
  },
  getStudents: async () => {
    let db
    let students = []

    try {
      db = await connectDb()
      students = await db.collection('students').find().toArray()
    } catch (error) {
      errorHandler(error)
    }

    return students
  },
  getStudent: async (root, {
    id
  }) => {
    let db
    let student

    try {
      db = await connectDb()
      student = await db.collection('students').findOne({
        _id: ObjectID(id)
      })
    } catch (error) {
      errorHandler(error)
    }

    return student
  }
}
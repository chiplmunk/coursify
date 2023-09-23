import { Chapter, Course, Unit } from '@prisma/client';
import React from 'react'

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const CourseSideBar = (props: Props) => {
  return (
    <div className='w-[400px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl bg-secondary'>
      <h1 className='text-4xl font-bold'>
        {course.name}
      </h1>
    </div>
  )
}

export default CourseSideBar
import { getAuthSession } from '@/lib/auth'
import React from 'react'
import { redirect } from 'next/navigation'
import { InfoIcon } from 'lucide-react'
import { CreateCourseForm } from '@/components/CreateCourseForm';

type Props = {}

const CreatePage = async (props: Props) => {
    const session = await getAuthSession()
    if (!session?.user) {
        return redirect('/gallery')
    }
    return (
        <div className='flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:0'>
            <h1 className='self-center font-bold text-3xl text-center sm:text-6xl'>
                Coursify
            </h1>
            <div className='flex p-4 mt-5 border-none bg-secondary'>
                <InfoIcon
                    className='w-12 h-12 mr-3 text-blue-400'
                />
                <div>
                    Enter in a course icon, or what you want to generate, then enter the seperate topics or units you want to learn about and our AI will do the rest.
                </div>
            </div>
            <CreateCourseForm />
        </div>
    )
}

export default CreatePage
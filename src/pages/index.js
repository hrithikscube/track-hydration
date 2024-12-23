import Input from '@/components/Input'
import PrimaryButton from '@/components/PrimaryButton'
import SelectInput from '@/components/SelectInput'
import React, { useState } from 'react'

const Home = () => {

  const [activeScreen, setActiveScreen] = useState('Results')

  const [params, setParams] = useState({
    name: '',
    phone: '',
    weight: '',
    age: '',
    activeness: '',
    consume_frequency: '',
    often_thirsty: ''
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  if (activeScreen === 'Results') {
    return (
      <div className='flex flex-col w-full h-screen items-center justify-center'>


        <div className='lg:w-96 w-full h-screen mx-auto flex flex-col items-center justify-center debug px-4 gap-4'>
          <h2 className='lg:text-xl text-lg font-semibold text-[#121212]'>Here’s How Much Water You Need Daily!</h2>

          <div className='flex flex-col h-20 w-full bg-blue-100 rounded-xl p-4'>

          </div>

        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <form onSubmit={handleSubmit} className='lg:w-96 w-full h-screen mx-auto flex flex-col gap-4 items-center justify-center px-4 bg-[#f2f2f2]'>

        <h2 className='lg:text-xl text-lg font-semibold text-[#121212]'>Enter the following details</h2>

        <Input
          required
          name="name"
          value={params.name}
          handleChange={handleChange}
          label="Name"
        />

        <Input
          required
          name="phone"
          value={params.phone}
          handleChange={handleChange}
          label="Phone"
        />

        <Input
          required
          name="weight"
          value={params.weight}
          handleChange={handleChange}
          label="Weight"
        />

        <SelectInput
          required
          options={
            [
              {
                name: 'Under 18',
                label: 'Under 18',
                value: 'Under 18',
              },
              {
                name: '18 to 25',
                label: '18 to 25',
                value: '18 to 25',
              },
              {
                name: '25 to 35',
                label: '25 to 35',
                value: '25 to 35',
              },
              {
                name: 'Above 35',
                label: 'Above 35',
                value: 'Above 35',
              },
            ]
          }
          name="age"
          value={params.age}
          handleChange={handleChange}
          label="Age"
        />

        <SelectInput
          required
          options={
            [
              {
                name: 'Minimal Physical Activity',
                value: 'Minimal Physical Activity',
                label: 'Minimal Physical Activity',
              },
              {
                name: '1 - 3 workouts / week',
                value: '1 - 3 workouts / week',
                label: '1 - 3 workouts / week',
              },
              {
                name: '4+ workouts / week',
                value: '4+ workouts / week',
                label: '4+ workouts / week',
              },
            ]
          }
          name="activeness"
          value={params.activeness}
          handleChange={handleChange}
          label="Activeness"
        />

        <SelectInput
          required
          options={[
            {
              name: 'Rarely',
              value: 'Rarely',
              label: 'Rarely',
            },
            {
              name: 'Occasionally',
              value: 'Occasionally',
              label: 'Occasionally',
            },
            {
              name: 'Frequently',
              value: 'Frequently',
              label: 'Frequently',
            },
          ]}
          name="consume_frequency"
          value={params.consume_frequency}
          handleChange={handleChange}
          label="Consumption Frequency"
        />

        <PrimaryButton type="submit" label="Learn how we can help you" width="w-full" />

      </form>
    </div>
  )
}

export default Home
import axios from 'axios';
import Head from 'next/head';
import Input from '@/components/Input';
import React, { useState } from 'react';
import SelectInput from '@/components/SelectInput';
import PrimaryButton from '@/components/PrimaryButton';

const initial_fields = {
  name: '',
  phone: '',
  weight: '',
  age: '',
  activeness: '',
  // consume_frequency: '',
}

const Home = () => {
  const [activeScreen, setActiveScreen] = useState('Form');
  const [params, setParams] = useState(initial_fields)

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: value
    });
  };

  const calculateHydration = () => {
    const weightInLiters = parseFloat(params.weight) * 0.035;
    let additionalWater = 0;

    if (params.age === 'Above 35') additionalWater += 0.3;
    if (params.activeness === '1 - 3 workouts / week') additionalWater += 0.5;
    if (params.activeness === '4+ workouts / week') additionalWater += 1.0;
    // if (params.consume_frequency === 'Frequently') additionalWater += 0.3;

    setResult(`You need approximately ${(weightInLiters + additionalWater).toFixed(2)} liters of water daily.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const proxyURL = "/api/proxy";

    let payload = {
      name: params.name,
      phone: params.phone,
    }

    axios.post(proxyURL, payload)
      .then((response) => {
        calculateHydration();
        setActiveScreen('Results');
        setParams(initial_fields);
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
        calculateHydration();
        setActiveScreen('Results');
        setParams(initial_fields);
      });
  };


  if (activeScreen === 'Results') {
    return (
      <div className='flex flex-col w-full h-screen items-center justify-center'>
        <div className='md:w-96 w-full h-full mx-auto flex flex-col items-center justify-center px-4 gap-4 bg-[#f2f2f2]'>
          <h2 className='lg:text-lg text-base font-semibold text-[#121212]'>Here’s How Much Water You Need Daily!</h2>
          <div className='flex flex-col h-20 w-full bg-blue-100 rounded-xl p-4 items-center justify-center'>
            <p className='lg:text-base text-sm text-blue-900'>{result}</p>
          </div>
          <PrimaryButton
            label='Recalculate'
            width='w-full'
            onClick={() => {
              setActiveScreen('Form')
              setParams(initial_fields)
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <Head>
        <title>Track Hydration</title>
      </Head>

      <form onSubmit={handleSubmit} className='md:w-96 w-full h-full mx-auto flex flex-col gap-4 items-center justify-center px-4 bg-[#f2f2f2]'>
        <h2 className='lg:text-lg text-base font-semibold text-[#121212] text-center'>Enter the details to find out how much water you require!</h2>

        <Input
          required
          name='name'
          value={params.name}
          handleChange={handleChange}
          label='Enter your name'
        />

        <Input
          required
          name='phone'
          value={params.phone}
          handleChange={handleChange}
          label='Enter phone number'
        />

        <Input
          required
          name='weight'
          value={params.weight}
          handleChange={handleChange}
          label='Enter your weight'
        />

        <SelectInput
          required
          options={[
            { name: 'Under 15', value: 'Under 15', label: 'Under 15' },
            { name: '15-20', value: '15-20', label: '15-20' },
            { name: '20-25', value: '20-25', label: '20-25' },
            { name: '25-30', value: '25-30', label: '25-30' },
            { name: '30-35', value: '30-35', label: '30-35' },
            { name: '35-40', value: '35-40', label: '35-40' },
            { name: '40-45', value: '40-45', label: '40-45' },
            { name: '45-50', value: '45-50', label: '45-50' },
            { name: 'Above 50', value: 'Above 50', label: 'Above 50' }
          ]}
          name='age'
          value={params.age}
          handleChange={handleChange}
          label='Select your age group'
        />

        <SelectInput
          required
          options={[
            { name: 'Minimal Physical Activity', value: 'Minimal Physical Activity', label: 'Minimal Physical Activity' },
            { name: '1 - 3 workouts / week', value: '1 - 3 workouts / week', label: '1 - 3 workouts / week' },
            { name: '4+ workouts / week', value: '4+ workouts / week', label: '4+ workouts / week' }
          ]}
          name='activeness'
          value={params.activeness}
          handleChange={handleChange}
          label='How often do you exercise'
        />

        {/* <SelectInput
          required
          options={[
            { name: 'Rarely', value: 'Rarely', label: 'Rarely' },
            { name: 'Occasionally', value: 'Occasionally', label: 'Occasionally' },
            { name: 'Frequently', value: 'Frequently', label: 'Frequently' }
          ]}
          name='consume_frequency'
          value={params.consume_frequency}
          handleChange={handleChange}
          label='Water Consumption Frequency'
        /> */}

        <PrimaryButton type='submit' label='Learn how we can help you' width='w-full' />
      </form>
    </div>
  ); c
};

export default Home;

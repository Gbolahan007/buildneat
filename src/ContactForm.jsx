'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [submitting, setSubmitting] = useState(false);

  async function onHandleSubmit(data) {
    setSubmitting(true);

    try {
      // Replace YOUR_FORMSPREE_ENDPOINT with your actual endpoint from Formspree
      // e.g., 'https://formspree.io/f/xayzabcd'
      const response = await fetch('https://formspree.io/f/mldgqznb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully.', {
          duration: 5000,
          position: 'top-center',
        });
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.', {
        duration: 5000,
        position: 'top-center',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
      {/* Toast container */}
      <Toaster />

      <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
        {/* First Name & Last Name */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register('phone', { required: 'Phone number is required' })}
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            placeholder="Your message"
            rows={5}
            className="w-full resize-y rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Hidden field for email subject */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission"
          {...register('_subject')}
        />

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition duration-200 hover:bg-blue-700 disabled:bg-blue-400"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

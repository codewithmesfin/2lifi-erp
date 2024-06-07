import { ChevronRightIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import LoadingIndicator from './LoadingIndicator';

export default function LeadCapture() {
  const [loading, setLoading] = useState(false)


  const [message, setMessage] = useState<any>({ email: "", phone: "", name: "", subject: "Request for a free demo", message: "Hello! I am exited aout your products and want to see a free demo." })

  const submit = async () => {
    if (message.email != "" && message.name != "" && message.message != "") {
      setLoading(true)
      const payload = {
        subject: `${message.name} - ${message.phone}`,
        from: message.email,
        to: "sciemesfin55@gmail.com",
        message: message.message
      }
      try {
        await axios.post('/api/emailApi', {
          ...payload
        });
        toast.success(`Dear ${message.name}, your request has been submitted to Solviko. We will contact you soon.`, {
          position: "top-right",
        });
      } catch (error) {
        toast.error('Unable to submit your request. Try again later.', {
          position: "top-right"
        });
      } finally {
        setLoading(false)
      }
    }



  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="pb-2">
        <p className="py-2 text-gray-500">Full Name</p>
        <input
          type="text"
          placeholder="Enter your name"
          required={true}
          value={message.name}
          onChange={(e: any) => setMessage({ ...message, name: e.target.value })}
          className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
        />
      </div>
      <div className="py-3">
        <p className="py-2 text-gray-500">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          required={true}
          value={message.email}
          onChange={(e: any) => setMessage({ ...message, email: e.target.value })}
          className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
        />
      </div>
      <div className="py-3">
        <p className="py-2 text-gray-500">Phone Number</p>
        <input
          type="text"
          placeholder="Enter your phone number"
          required={true}
          value={message.phone}
          onChange={(e: any) => setMessage({ ...message, phone: e.target.value })}
          className="w-full py-2 rounded px-3 bg-white border border-gray-200 text-gray-400 focus:outline-none"
        />
      </div>
      <div className="pt-3">
        <button
          onClick={submit}
          disabled={loading}
          type="submit"
          className={`${loading ? 'bg-gray-400' : 'bg-[#007aff] hover:bg-blue-600'} flex items-center justify-evenly space-x-3 md:text-lg w-full py-3 rounded-full shadow text-white`}
        >
          <span>{loading ? 'Requesting a demo ...' : 'Request a demo'}</span>
          {loading ? <LoadingIndicator /> : <ChevronRightIcon path="right" className="h-4 w-4" strokeWidth={2} />}
        </button>
      </div>
    </form>
  )
}


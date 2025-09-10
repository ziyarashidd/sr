// pages/Whatsapp.jsx
import React from 'react';

const Whatsapp = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Join Our WhatsApp Group</h1>

      <p className="text-gray-300 text-center mb-6 max-w-xl">
        Stay updated with all hackathon announcements, deadlines, and team coordination by joining our official WhatsApp group.
      </p>

      {/* WhatsApp QR Code */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <img
          src="/qr.jpg" // Replace this with your QR code image URL
          alt="WhatsApp Group QR Code"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Join Link */}
      <a
        href="https://chat.whatsapp.com/I4baK68OXVE7cR58gHneXi" // Replace this with your WhatsApp group invite link
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
      >
        Click to Join WhatsApp Group
      </a>
    </div>
  );
};

export default Whatsapp;

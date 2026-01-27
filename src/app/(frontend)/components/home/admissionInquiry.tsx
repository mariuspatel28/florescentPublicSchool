"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionInquiry({ isOpen, onClose }: PortalsMenuProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classFor: "",
    message: "",
  });

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ studentName: "", parentName: "", email: "", phone: "", classFor: "", message: "" });
        setTimeout(() => {
          onClose();
          setTimeout(() => setIsSuccess(false), 300);
        }, 3000);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      role="dialog" 
      aria-modal="true"
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-[100] p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 100 }}
        className="bg-white rounded-t-[2rem] sm:rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed at top */}
        <div className="pt-8 px-6 sm:px-8 pb-4 flex justify-between items-center bg-white z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Admission Inquiry
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content Area - Scrollable */}
        <div className="overflow-y-auto px-6 sm:px-8 pb-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Full Name" required />
                    <InputField label="Parent Name" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Guardian Name" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@address.com" required />
                    <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 ..." required />
                  </div>

                  <InputField label="Class Applying For" name="classFor" value={formData.classFor} onChange={handleChange} placeholder="e.g. Grade 5" required />

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full mt-1 px-4 py-3 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-4 focus:ring-black/5 focus:bg-white transition-all resize-none text-base"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-black text-white font-bold hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:bg-zinc-300 flex items-center justify-center gap-3 mt-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-[280px]">
                  Your inquiry has been received. Our team will contact you shortly.
                </p>
                <div className="h-1 bg-green-500 absolute bottom-0 left-0 transition-all duration-[3000ms] w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div className="w-full">
      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">{label}</label>
      <input
        {...props}
        className="w-full mt-1 px-4 py-3 border border-gray-100 bg-gray-50 rounded-2xl outline-none focus:ring-4 focus:ring-black/5 focus:bg-white transition-all text-base"
      />
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DevCard from "./tech";

export const ShowToast = ({ message, type }) => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => setShow(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);
    
    if (!show) return null;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute left-0 right-0 -top-2 px-4 py-2 rounded-md shadow-2xl z-50 text-center md:hidden ${type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
        >
            {message}
        </motion.div>
    );
};

const sendData = async (formData) => {
    try {
        const response = await fetch("https://reingenbackend.onrender.com/contact", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        return await response.json();
    } catch (error) {
        return { success: false, message: "Error sending data." };
    }
};

export const ContactCard1 = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);
    
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSend = async () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email || !validateEmail(formData.email)) newErrors.email = "Invalid email";
        if (!formData.message) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const result = await sendData(formData);
            setToast({ message: result.message, type: result.success ? "success" : "error" });
            if (result.success) setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="px-6">
            <motion.div
                className="relative p-6 w-[350px] bg-gray-900 rounded-xl border-gradient shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-white text-center mb-4">Contact Us</h2>
                <form className="flex flex-col gap-9">
                    <input type="text" name="name" placeholder="Name" className="p-2 rounded bg-gray-800 text-white" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input type="email" name="email" placeholder="Email" className="p-2 rounded bg-gray-800 text-white" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <textarea name="message" placeholder="Message" className="p-2 rounded bg-gray-800 text-white" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    
                    <button type="button" className="bg-blue-600 p-2 rounded text-white" onClick={handleSend}>Send</button>
                    
                    <div className="relative md:hidden">
                        {toast && <ShowToast message={toast.message} type={toast.type} />}
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export const ContactCard = () => {
    return (
        <>
            <div className="text-white py-2 pl-5 text-lg font-bold my-5"></div>
            <div className="text-white py-5 text-3xl font-bold mt-5 bg-gray-950 flex justify-center" id="contact">
                <div className="container pl-5 md:pl-0">Contact us</div>
            </div>
            <div className="w-full bg-gray-950 flex justify-center">
                <div className="flex flex-col-reverse md:flex-row w-full justify-between py-6 container items-center gap-y-10 bg-gray-950">
                    <ContactCard1 />
                    <div className="w-sm md:flex hidden">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-200 mb-5">Reingen, Fullstack Developers</h1>
                            <p className="text-sm text-gray-300 mt-2">
                                Passionate about designing and developing high-quality software solutions using modern web technologies. Expertise in both front-end and back-end development.
                            </p>
                        </div>
                    </div>
                    <DevCard />
                </div>
            </div>
        </>
    );
};

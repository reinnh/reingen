import React, { useState, useEffect } from "react";
import { Table, Button, Switch, notification, Modal, Input } from "antd";
import { SunOutlined, MoonOutlined, DeleteOutlined, ReloadOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/reset.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const { TextArea } = Input;

const dataDaily = [
    { date: "2024-03-25", visits: 120 },
    { date: "2024-03-26", visits: 150 },
    { date: "2024-03-27", visits: 100 },
    { date: "2024-03-28", visits: 180 },
];

const dataMonthly = [
    { month: "Jan", visits: 3200 },
    { month: "Feb", visits: 2800 },
    { month: "Mar", visits: 3500 },
    { month: "Apr", visits: 4000 },
];

const dataYearly = [
    { year: "2021", visits: 42000 },
    { year: "2022", visits: 50000 },
    { year: "2023", visits: 62000 },
    { year: "2024", visits: 70000 },
];

export const DashboardGraphs = ({ darkMode }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-4`}> 
            <div className={`p-4 rounded-xl shadow w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h2 className="text-lg font-bold mb-2">Daily Visits</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dataDaily}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className={`p-4 rounded-xl shadow w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h2 className="text-lg font-bold mb-2">Monthly Visits</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dataMonthly}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="visits" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className={`p-4 rounded-xl shadow col-span-1 md:col-span-2 w-full ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h2 className="text-lg font-bold mb-2">Yearly Visits</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={dataYearly}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [replyVisible, setReplyVisible] = useState(false);
    const [replyMessage, setReplyMessage] = useState("");
    const [selectedEmail, setSelectedEmail] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://reingenbackend.onrender.com/contact");
            setMessages(response.data);
        } catch (error) {
            notification.error({ message: "Error fetching messages" });
        }
        setLoading(false);
    };

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Message", dataIndex: "message", key: "message" },
        { title: "Time", dataIndex: "createdAt", key: "createdAt" },
    ];

    return (
        <div className={`min-h-screen p-4 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}> 
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold text-center md:text-left">Admin Dashboard</h1>
                <div className="flex gap-2">
                    <Button icon={<ReloadOutlined />} onClick={fetchMessages}>Refresh</Button>
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
                <Table columns={columns} dataSource={messages} rowKey="_id" loading={loading} pagination={{ pageSize: 5 }} />
            </div>
            <DashboardGraphs darkMode={darkMode} />
        </div>
    );
};

export default Dashboard;

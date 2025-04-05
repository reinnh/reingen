import React, { useState, useEffect } from "react";
import { Table, Button, Switch, notification, Modal, Input, message } from "antd";
import { SunOutlined, MoonOutlined, DeleteOutlined, ReloadOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import "antd/dist/reset.css";

const { TextArea } = Input;

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

    const handleReply = (email) => {
        setSelectedEmail(email);
        setReplyVisible(true);
    };

    const sendReply = async () => {
        if (!replyMessage.trim()) {
            notification.warning({ message: "Reply message cannot be empty" });
            return;
        }
        try {
            await axios.post("https://your-backend-url.com/send-email", {
                to: selectedEmail,
                message: replyMessage,
            });
            notification.success({ message: "Reply sent successfully" });
            setReplyVisible(false);
            setReplyMessage("");
        } catch (error) {
            notification.error({ message: "Error sending reply" });
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://reingenbackend.onrender.com/contact/${id}`);
            message.success("Message deleted successfully");
            fetchMessages();
        } catch (error) {
            notification.error({ message: "Error deleting message" });
        }
    };

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Message", dataIndex: "message", key: "message" },
        { title: "Time", dataIndex: "createdAt", key: "createdAt" },
        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <div className="flex gap-2">
                    <Button icon={<MailOutlined />} onClick={() => handleReply(record.email)}>Reply</Button>
                    <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record._id)}>Delete</Button>
                </div>
            ),
        },
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
            
            <Modal
                title="Reply to Message"
                visible={replyVisible}
                onCancel={() => setReplyVisible(false)}
                onOk={sendReply}
            >
                <p>Replying to: {selectedEmail}</p>
                <TextArea rows={4} value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} placeholder="Enter your reply here..." />
            </Modal>
        </div>
    );
};

export default Dashboard;


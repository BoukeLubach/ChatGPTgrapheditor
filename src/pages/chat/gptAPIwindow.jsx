import React, { useState } from 'react';
import axios from 'axios';
import Figure from './Figure';
import { messages } from "./prompts/dataOnly"
import Basepage from '../../components/common/BasePage';



function ChatBot() {
    const [conversation, setConversation] = useState([]);
    const [plotdata, setPlotdata] = useState(`[{x: data.b,  y: data.z,type: 'scatter', mode: 'lines+markers',  marker: {color: 'red'}, name: 'My Data' }]`);

    const sendMessage = async (message) => {
        messages.push({ role: "user", content: message });

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    messages: messages,
                    max_tokens: 100,
                    temperature: 0.6,
                    n: 1,
                    model: 'gpt-3.5-turbo'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer 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`,
                    },
                }
            );

            const text = response.data.choices[0].message.content;
            setPlotdata(text);
            setConversation([...conversation, { role: "user", content: message }]);
            
            const botMessage = response.data.choices[0].message.content;
            setConversation([...conversation, { role: "assistant", content: botMessage }]);
            
            messages.push({ role: "assistant", content: botMessage });

            // Update the conversation state with the new messages and previous conversation
            setConversation([...conversation, { role: "user", content: message }, { role: "assistant", content: botMessage }]);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.elements.message.value;
        setConversation([...conversation, { role: "user", content: message }]);
        sendMessage(message);
        event.target.reset();
    };

    return (
        <Basepage title="Chatbot graphmaker" className="bg-gray-200">
            <div>

                <ul className="border border-gray-300 divide-y divide-gray-300">
                    {conversation.map((message, index) => (
                        <li key={index} className="p-2">
                            <strong className="font-bold">{message.role}: </strong>
                            <span>{message.content}</span>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                    <textarea name="message" placeholder="Type your message" className="w-full p-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"></textarea>
                    <button type="submit" className="bg-orange text-white font-bold text-xl px-5 py-2.5 focus:ring-gray-dark font-medium rounded-md">
                        Send
                    </button>
                </form>

                {plotdata && <Figure plotdata={plotdata} />}
            </div>
        </Basepage>
    );
}

export default ChatBot;
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-center text-5xl font-bold"><u>Blogs</u></h2>
            <div className="hero p-10">
                <div className="hero-content ">
                    <div >
                        <h1 className="text-2xl font-bold">Difference between SQL and NoSQL</h1>
                        <p className="py-6">SQL is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we’ve seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL.</p>
                      
                    </div>
                </div>
            </div>

            <div className="hero p-10">
                <div className="hero-content ">
                    <div >
                        <h1 className="text-2xl font-bold">What is JWT, and how does it work?</h1>
                        <p className="py-6">JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                        <p>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        
                    </div>
                </div>
            </div>

            <div className="hero p-10">
                <div className="hero-content ">
                    <div >
                        <h1 className="text-2xl font-bold">What is the difference between javascript and NodeJS?</h1>
                        <p className="py-6">JavaScript is a high-level programming language that makes our web pages and web applications dynamic and interactive by giving them the ability to think and act. JavaScript is a lightweight (easy to learn syntax) and object-oriented programming language whereas Node.js is a runtime environment built on google v8 engine and typically used to represent a list of objects and functions that JavaScript programs can access.</p>
                       
                    </div>
                </div>
            </div>

            <div className="hero p-10 ">
                <div className="hero-content ">
                    <div className="">
                        <h1 className="text-2xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
                        <p className="py-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
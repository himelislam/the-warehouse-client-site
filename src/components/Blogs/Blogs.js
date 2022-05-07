import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{ minHeight: '70vh' }} className='container'>
            <hr />
            <h2 className='text-center my-4'>Blogs</h2>
            <hr />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q.1: Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 col-12'>  
                                <p className='fw-bold'>Javascript:</p>
                                <ul>
                                    <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                                    <li>Javascript can only be run in the browsers.</li>
                                    <li>It is basically used on the client-side.</li>
                                    <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                                    <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                                    <li>Javascript is used in frontend development.</li>
                                    <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </li>
                                </ul>
                            </div>
                            <div className='col-lg-6 col-md-12 col-12'>
                                <p className='fw-bold'>NodeJS:</p>
                                <ul>
                                    <li>NodeJS is a Javascript runtime environment.</li>
                                    <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                                    <li>It is mostly used on the server-side.</li>
                                    <li>Nodejs does not have capability to add HTML tags.</li>
                                    <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                                    <li>Nodejs is used in server-side development.</li>
                                    <li>Nodejs is written in C, C++ and Javascript.</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q.2: When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        <p className='fw-bold'>We should use NodeJS for :</p>
                        <p>If Anyone want to develop  a real time web application Nodejs is the best choice. One of the most significant advantages of Node.js development is that it can be used to create a wide range of business solutions. Some prominent things for which Node.js can be used For like Developing Data Streaming Applications, Developing Microservices, IoT Applications, Scalable Application Development, Communicate With API, Developing SPA (Single Page Application) </p>
                        <p className='fw-bold'>We should use MongoDB for :</p>
                        <p>MongoDB is the most popular of the new breed of non-relational NoSQL databases. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q.3: Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                    <div className='row'>
                            <div className='col-lg-6 col-md-12 col-12'>  
                                <p className='fw-bold'>SQL Database :</p>
                                <ul>
                                    <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                                    <li>These databases have fixed or static or predefined schema</li>
                                    <li>These databases are not suited for hierarchical data storage.</li>
                                    <li>These databases are best suited for complex queries</li>
                                    <li>Vertically Scalable</li>
                                    <li>Follows ACID property</li>
                                </ul>
                            </div>
                            <div className='col-lg-6 col-md-12 col-12'>
                                <p className='fw-bold'>NoSQL Database :</p>
                                <ul>
                                    <li>Non-relational or distributed database system.</li>
                                    <li>They have dynamic schema</li>
                                    <li>These databases are best suited for hierarchical data storage.</li>
                                    <li>These databases are not so good for complex queries</li>
                                    <li>Horizontally scalable</li>
                                    <li>Follows CAP(consistency, availability, partition tolerance)</li>
                                </ul>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q.4: What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs are used as a secure way to authenticate users and share information. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;
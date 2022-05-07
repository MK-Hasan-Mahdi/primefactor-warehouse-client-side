import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='back-color'>
            <div className='container bg-white'>
                <h2 className='text-center'>My Blogs</h2>
                <div className='mt-3'>
                    <div className='py-4'>
                        <h6>1. What is the difference between javascript and nodejs ?</h6>
                        <p>Ans: <strong>Javascript:</strong> JavaScript VS Node.js boils down to the matter of a flexible and simple frontend programming language versus the framework that allows it to extend into the backend realm.

                            JavaScript is a scripting language upon which most websites are based. It is often used in combination with HTML and CSS to render web pages, as JavaScript can be used to dynamically update HTML elements. It allows you to automatically refresh the page to update data, display information using cool visuals, and create interactive elements. <br />

                            <strong>Node JS:</strong> Node.js is an environment that can run JavaScript code without a browser. It is built on Chrome V8 JavaScript engine. The Node.js environment can be run on OS X, Windows, and Linux. It also includes a multitude of JavaScript libraries, which allow developers to leverage open source components and tools to get their applications built faster.
                        </p>
                    </div>
                    <div className='py-4'>
                        <h6>2. What is the differences between SQL and NoSQL databases?</h6>
                        <p>Ans: <strong>SQL: </strong> SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.
                            <br />
                            <strong>Features of SQL :</strong>
                            Provide High-Performance Capabilities
                            Handle Large Transactions with efficiency
                            SQL is easy to learn and manage
                            Open Source Programming Language
                            Supports Data Definition Language and Data Manipulation Language to query the databases
                            Suitable for every type of organization large or small.
                            <br /> <br />
                            <strong>NoSQL: </strong> NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                            <br />
                            <strong>Features of NoSQL :</strong>
                            NoSQL has higher scalability than other database management systems
                            NoSQL allows the distribution of data on more than just one device.
                            With NoSQL Database, you do not require specialized or complex hardware or storage solutions.
                            Does not require data normalization
                            Simple API for easy user interfaces
                            Can store unstructured, semi-structured, or structured data.
                        </p>
                    </div>
                    <div className='py-4'>
                        <h6>3. What is the purpose of JWT and how does it work?</h6>
                        <p>Ans: JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.

                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
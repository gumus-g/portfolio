import React from 'react';
import { SlHome } from "react-icons/sl";

function HomePage() {
    return (
        <>
            <h2><i><SlHome/></i> Welcome to  Gulper Gumus's Web Dev Portfolio</h2>
            <article id="">
                <h3>My Career Goals!</h3>
            <p>
            To be successful as a software engineer, it is necessary to set some goals and 
            work on them. The first of these goals is to reach a technically sufficient level. 
            In order to improve my skills in this regard, it is necessary to practice a lot and 
            follow the innovations. It is necessary to follow the developments in software technologies 
            and improve knowledge by constantly following current information. If we count technical goals,
             mastering JavaScript and Python and learning to work with database systems will be at the top of 
             the list. Then finding a good job will be my second goal. For this reason, I want to advance in the 
             fields I know best and get a job at entry level.
            </p>

            </article>
            <article id="">
            <p> The major technologies used on the website.</p>
            <ol>
                <li><strong>HTML</strong></li>
                It is a markup language for opening documents to be received on the web.
                HTML supports hypermedia documents. Additionally, it receives in the HTTP 
                response from the server and displays the document, the client interprets 
                the HTML in the document.
                <li><strong>CSS</strong></li>
                Cascading Style Sheets is a language. It is used to describe and edit the files 
                in HTML and to make them appear in various formats. Makes technical arrangements 
                on how documents should appear both on the web, on tablets and on phones.
                <li><strong>Node</strong></li>
                Node is often used to develop and run server-side web applications in 
                JavaScript. Node.js applications are written in JavaScript and different 
                operating systems can be used easily.
                <li><strong>Express</strong></li>
                Provides Application Programming Interface to an external site. Various 
                common tasks (APIs) that web applications must perform. With Express, 
                we can do tasks such as receiving, sending, deleting data and defining 
                the ports and routes the data will receive.  We can also deliver static 
                files and create templates that dynamically generate responses containing 
                this data.
                <li><strong>Asynchronous programming</strong></li>
                Asynchronous programming is a feature of JavaScript, 
                often used to create performant and scalable web applications. 
                These are used in both client and server side programs. Since asynchronous 
                functions are not blocked, it does not wait for the files loaded by the browser 
                to be opened one by one, but immediately moves on to the next line of code.
                <li><strong>DOM</strong></li>
                It provides visual and interactivity of the structure of a web page. The W3C 
                standard provides APIs to manipulate DOM, HTML, CSS, and XML. Before browsers 
                present a view, create a model, and that model is a node, which is a logical tree. 
                The DOM tree contains nodes of various types. These are documents, document type,
                element, attribute and text. 
                <li><strong>SPA</strong></li>
                It allows the creation of Single Page Applications instead 
                of applications with multiple HTML pages. SPA enables the web 
                application's HTML, CSS and JavaScript to be sent exactly once 
                from the web server to the browser.
                <li><strong>REACT</strong></li>
                React is a framework for writing frontend applications. 
                Apps in React provide reusable UI units and are based on 
                the component concept. React creates a component and it 
                allows us to modify it. 
                <li><strong>Mongoose</strong></li>
                Mongoose is an object-document mapper (ODM) library for
                MongoDB that works between classes and objects. It's a key 
                component of Node.js and perform as a frontend to MongoDB.
                It allows us to connect to that MongoDB database.  
                <li><strong>MongoDB</strong></li>
                This is a Document-oriented DBMS which stores data in a format 
                JSON or XML. It matches the document models in your application, 
                making it easy to work with. Also, it is free.
                <li><strong>REST</strong></li>
                It is called Representational State Transfer and explains a specific 
                URL pattern to identify each collection and each resource within a collection.
                REST follows some design principles and allows different software
                 applications to communicate. The Rest API uses the REST specific guidelines
                and performs CRUD operations on collections.
                <li><strong>CRUD</strong></li> 
                CRUD stands for create, read, update and delete. POST, GET, PUT and 
                DELETE methods are used for these.               
            </ol>

            </article>

        </>
    );

}
export default HomePage;
    
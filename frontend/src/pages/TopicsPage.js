import React from 'react';
import { SlDocs } from "react-icons/sl";

function TopicsPage() {
    return (
        <>
          <h2><i><SlDocs/></i> Web Development Topics</h2>
                <nav class="local">
                    <a href="#servers">Web Servers</a>
                    <a href="#fronted">Fronted Design</a>
                    <a href="#images">Optimizing images</a>
                    <a href="#favicons">Favicons</a>
                    <a href="#css">CSS</a>
                    <a href="#js">JavaScript</a>
                </nav>        
                <article id="servers">
                    <h3>Web Servers</h3>
                    <p>
                        There are three primary technologies to use when building a web page.
                        <strong>Hypertext Transfer Protocol</strong>
                        (HTTP) is a protocol and describes how to request 
                        and respond to resources between the client and 
                        the server.
                        <strong>Uniform Resource Locator</strong>
                        is the address that allows us to access
                        documents on the web. The client uses the document's URL
                        address to send an HTTP request to the server where 
                        the document resides.
                        <strong>HyperText Markup Language</strong>
                        (HTML) is the standard markup language used in 
                        documents designed to be viewed in a web browser. 
                        At this stage, information has been retrieved,
                        and this information now needs to be supported 
                        as Create, Read, Update and Delete. It is called
                        <strong>CRUD</strong>. When you send an HTTP request, 
                        it must be readable, for this, Web Servers 
                        provide programs in different programming languages to process 
                        HTTP requests. To make web pages more creative and special, 
                        <strong>Cascading Style Sheets</strong> (CSS) 
                        used to display web pages differently depending on screen differences.
                        One of these programming languages is JavaScript, 
                        which can be executed by web browsers. In the index.html file, <strong>boilerplate</strong> HTML 
                        code is added to the file to make the HTML page visible in the browser.
                        The following <strong>URL</strong> example is used to access the webpage /syntax.html#overview, 
                        and this part of the URL identifies the resource on the server. The designated home page called 
                        <strong>index.html</strong>, this is the web page on the web server, and most web server 
                        (/) requests are configured to match the file in the path <strong>/index.html</strong>.
                        Almost all web applications in the world are configured to return this file when a <strong>GET</strong> request is
                        received for the (/). Different web servers may use different names for the home page.
                        <strong>Apache</strong> web server uses <strong>index.html</strong>, and <strong> Microsoft's, .NET platform</strong> use default.html, 
                        but other servers may use <strong>index.js</strong> or <strong>index.php</strong> as the home page.
                    </p>
                    <p>
                        <strong>Request URL, Request Method: GET, Status code: 200 OK, port, favicons, method, type, request method, remote address,
                        host, referrer policy, Response headers, request headers</strong> and <strong>URLs </strong> can be seen in the output screen 
                        of the browser's Web Developer/Inspector Network tab.
                        The home page <strong>(index.html)</strong> was requested using the <strong>GET</strong> method.
                        On the other hand, when I perform inspection from the local computer, 
                        I cannot see the <strong>remote addresses</strong>, and only <strong>content-type:</strong> text/html, <strong>last-modified:</strong> Mon, 15 Apr 2024 02:58:39 GMT
                        and <strong>Request headers:</strong>browser name Google Chrome, port: 123, platform: Windows can be seen in the <strong>response headers</strong>. 
                    </p>
                    <p>
                        The favicon.ico represents the "favorites icon". It has a status 200, and
                        you see a green light, this status code indicates that the request was 
                        processed successfully by the server. The server you are trying to reach 
                        automatically provides this. The <strong>main.js</strong> and <strong>main.js</strong> files have status <strong>404</strong>which means <strong>Not Found</strong>. 
                        In other words, the requested resources are not found on the server.
                    </p>
                    <p>
                        The parts of my web server's <strong>URL</strong> is "https://web.engr.oregonstate.edu/~gumusg/a1-gumusg/".
                        The URL begins with a <strong>scheme</strong> that identifies the protocol used to send the request.
                        The <strong>URL's value</strong> is "HTTPS".
                        A <strong>subdomain</strong> is a subdivision of this server, represented
                        here as "web.engr". 
                        In my URL, the <strong>host domain = server machine = host name</strong> appears as
                        "oregonstate.edu". This is the name of the server to which the request is sent.
                        The <strong>Path to resources</strong> is "~gumusg/a1-gumusg". The URL identifies 
                        the webpage on the server. 
                        
                    </p>
                </article>
                <article id="fronted">
                    <h3>Frontend Design</h3>
                    <p>
                        The <strong>fronted design concept</strong> aims to create the easiest and most understandable
                        experience for users. Some features are used for this, for example, the <strong>visual design of the page</strong> 
                        and the graphical user interface <strong>(GUI).</strong> Font and typography 
                        schemes, photography, icon and illustration schemes, and navigation systems 
                        are required for visual design. Usability/inclusivity is a good evaluation tool to 
                        measure users' engagement with the applications they use, and fronted design generally 
                        focuses on the usability of web applications. A usable website should consist of the
                        <strong> Five "E"s, </strong>and includes:
                    </p>  

                    <dl>
                        <dt><strong>Effective</strong></dt>   
                        <dd>Achieves the user's goals of achieving correct results</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Users need to take the fastest steps and take the shortest route to reach their goals.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Especially first, users need to easily understand what to look for and 
                            where to achieve their goals, and the locations of their targets need to be rememberable.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>It is necessary to prevent possible accessibility and availability errors during users' experiences.</dd>
                        <dt><strong>Enjoyable</strong> to use, or <strong>engaging,</strong></dt>
                        <dd>It should meet the needs of users in terms of content and design and aim to ensure that they return after experiencing it.</dd>
                    </dl>
                    
                    <p>
                        <strong>The page layout tags</strong> are a type of block level elements that break up the flow of block level elements and appear on a new line.
                        These elements do very little visually, but they can be styled using CSS. <strong>Page layout tags</strong> generally used on a page include <strong>header</strong>, <strong>nav</strong>,
                        <strong>main</strong>, <strong>section</strong> of <strong>articles</strong>, <strong>asides</strong> and <strong>footer</strong>.
                        The <strong>header</strong> element indicates the title of a site or application, which usually includes the publisher and marketing slogan.
                        It remains the same on every page when the user changes pages, ensuring that the user is in the same place.
                        The <strong>nav</strong> element  is used for the user to navigate from page to page, and sets of navigation typically include the main menu, search, tools, stories,
                        locations, and legal links.
                        The <strong>main</strong> element represents the dominant contents in the body, usually the main element is the primary blog that holds 
                        content such as stories, galleries and tutorials.
                        The <strong>section</strong> element thematically organizes groups of content that are all related to each other but cannot stand alone.
                        <strong>h1</strong> is the first child element of the section and describes what is in that section.
                        The <strong>article</strong> element is used within section elements and indicates 
                        second-level headings <strong>h2</strong> for more specific topic.
                        The <strong>footer</strong> element usually contains legal information, 
                        contact information, and links to critical pages and is located below the main tag.
                        The footer must at least contain the website owner's copyright statement with the copyright symbol.
                    </p> 
                    <p>   
                        The <strong>anchor</strong> element creates a hyperlink using the <strong>href</strong> attribute to web pages, 
                        files, email addresses, locations on the same page, and anything else the URL may address. 
                    </p>               
                    <ol>
                        <li><strong>Creating Hyperlinks with Anchors.</strong></li>
                        The content between the opening and closing anchor tag needs to be disclosed before a person can click there and navigate.
                        <li><strong>External anchor.</strong></li>
                        When someone clicks, it goes to a link outside the current website.
                        <li><strong>Internal anchor.</strong></li>
                        It links from one text element to another text element on the same page and uses IDs for this.
                    </ol>
                </article>
                <article id="images">
                    <h3>Optimizing images</h3>
                    <p>
                        <strong>Descriptive file name:</strong> File names should include who, what, when, 
                        and where to help search bots categorize what users are searching for.
                        <strong>Small file size:</strong> It is necessary to reduce the file size so that the loading 
                        speed can be achieved more easily. This is usually done using the srcset="" and sizes="" attributes.
                        In addition, image sizes can also be reduced using lossy and lossless compression,
                        but lossless compression preserves the image quality while lossy reduces the 
                        quality of the image.
                        <strong>Exact dimensions:</strong> The size of the images is cropped and reduced to fit the web page. 
                        If the image file is large, it will cause the image to load very slowly. 
                        <strong>Correct file format:</strong> The correct file format for images must be used, 
                        which determines how clear the images should be. Online photos are usually .JPG, and
                        line art images such as logos and icons are usually .GIF and sometimes 8-bit .PNG.
                        Graphics with true transparency require 24-bit .PNG.
                        <strong>Reduced resolution:</strong> Monitors render images between 72 and 300+ pixels 
                        per inch (ppi); the old default is 72 ppi. As much higher resolutions are now 
                        available, it is becoming standard to provide multiple image sizes for each.
                        <strong>Color Mode:</strong> RGB color mode is used in .PNG, .JPG, .SVG, and .WebP file formats 
                        and is indexed for .GIF (sometimes PNG). Color modes are required to improve the quality of designs 
                        and ensure that they are of a certain quality.
                    </p>
                    <p>
                        <strong>.SVG:</strong> (Scalable Vector Graphics) Mathematically derived and marked with XML for two-dimensional,
                        interactive or animated images. It is a most common file format for line art.
                        <strong>.GIF:</strong> Often used for line art, short and animated photos and videos. GIF files can have
                        8-bit transparency.
                        <strong>.PNG:</strong> These files are generally best for biomorphic shapes, 
                        line art, and solid colors because they have true transparency (alpha channel).
                        They can be placed over any color type without distortion, 
                        so the background will show through any blank or transparent area. The color mode is RGB.
                        <strong>.JPG:</strong> They only used for photographic images. Since the photos are very high resolution, 
                        very detailed and colorful, they are too big for the web, so their size is reduced and 
                        compressed so that they can be uploaded to the web quickly.
                        <strong> .WebP:</strong> These files are used for photographic images. They remain rectangular even when compressed to small file sizes. 
                        If higher compression is applied, image quality decreases. Transparent backgrounds are
                        possible with the alpha channel. 
                    </p>
                </article>
                <article id="favicons">
                    <h3>Favicons</h3>
                    <p>
                        It is a browser icon used to quickly identify a site in a browser tab, smartwatch, 
                        mobile phone, widescreen, or search engine results list, and to represent a brand or website.
                        <strong>Favicons</strong> are used in .GIF, .PNG, .ICO, and .SVG file formats. They need to be
                        made in various formats for different browsers and different devices. The browser retrieves the 
                        files and saves the icon when requested and saves it in a bookmark or favorites list, 
                        as well as on a device screen or search engine results list. Using an online 'generator', 
                        multiple files are provided for different browsers and devices.
                        <strong>Favicons </strong>appear in <strong>browser</strong> tabs.
                        From apps and websites,<strong> phones, tablets, IoT</strong> and <strong>wearable devices</strong>
                        can display favicons. 
                    </p>                
                </article>
                <article id="css">
                    <h3>CSS</h3>
                    <p>
                        <strong>HTML</strong> allows web pages and apps to be organized with a basic structure. Logical markup is used 
                        when organizing content and web pages. <strong>Cascading Style Sheets</strong> (CSS) define and 
                        enhance how page layouts, fonts, and components appear, thus improving the <strong>readability</strong>, 
                        <strong>usability</strong>, and <strong>legibility</strong> requirements of a web pages and apps.
                        <strong>CSS</strong> allows designs required for different devices and different screen sizes.
                    </p>
                    <p>
                        There are 5 ways to incorporate styles. One of these is to <strong>link</strong> the style 
                        sheet file to the general <strong>(head)</strong> area of a website. It provides styles 
                        to all pages of the website. Another stylesheet method is to <strong>link</strong> specific components 
                        after <strong>global.css</strong> or <strong>imported</strong> a global stylesheet.
                        Externally linked CSS files are generally used for applications or websites.
                        It can <strong>embed</strong> styles directly into HTML and JavaScript files, 
                        but allows one-time style changes. The last two methods are <strong>Inline</strong> and <strong>Document Object Model</strong> 
                        DOM method. <strong>Inline</strong> an attribute and value within an element. It is manipulating the document with the <strong>DOM</strong>
                        way in regular JavaScript.
                    </p>
                </article>
                <article id="js">
                    <h3>JavaScript</h3>
                    <p>
                        JavaScript data types are <strong>a number, a Boolean value</strong>, (either false or true),
                        <strong>a string, a symbol, the special values undefined and null</strong>, and <strong>an object</strong>.
                        Except for the object, it called these data types <strong>primitive types</strong>.
                    </p>
                    <p>
                        A JavaScript <strong>object</strong> is a set of name-value pairs, also called the object's properties.
                        Four types of actions can be done. We can <strong>create</strong> or add, <strong>read</strong>, 
                        <strong>update</strong> and <strong>delete</strong> properties of the object and 
                        these are called <strong>CRUD</strong>.
                        Can <strong>create</strong> and <strong>update</strong> properties in an assignment statement using the (.) operator.
                        It can be <strong>read</strong> using the (.) operator. You can also <strong>delete</strong> a property using delete operator.
                        Objects with property names of strings '0', '1', '2' are <strong>array</strong> in JavaScript.
                        It is a JavaScript requirement that an object's properties be of the string data type.
                        The elements of an <strong>array</strong> can be accessed using the 0-based integer index inside square brackets, 
                        as well as using the string-based property name. The values in the <storng>array</storng> must be 
                        JavaScript type and constant values can not be reassigned to another value.
                        JavaScript Object Notation <strong>(JSON)</strong> is the used format for exchanging data between application.
                        Programming languages such as JavaScript, Python, Java, and C# provide libraries for <strong>JSON</strong>.
                        <strong>JSON</strong> helps us map an object in a program to a string in JSON format, and also 
                        It allows creating an object from a string in JSON format in a program. 
                        The <strong>JSON</strong> format is independent and allows programs to exchange data.
                        For this, it uses these methods JSON.stringify() and JSON.parse().
                    </p>
                    <p>
                        Case evaluation in JavaScript can lead to very confusing behavior, 
                        this is due to automatic type conversion and "loose equality" operators. 
                        JavaScript uses <strong>if</strong> and <strong>switch</strong> statements to support <strong>conditional</strong> branching.
                        There are different kinds of <strong>Loop</strong> statements such as <strong>While statement, do while statement,
                        do while statement, for statement, for of statement </strong>and <strong>for in statement</strong>.
                        These stamens allow the expression to be evaluated. 
                    </p>
                    <p>
                        <strong>Object-oriented programming</strong> is programming based on the concept of objects that can create an object.
                        The object must have an identity, state and behavior. JavaScript supports and create object without declaring classes.
                    </p>
                    <p>
                        <strong>Functions</strong> in JavaScript include assigning functions to variables, 
                        defining functions that take other functions as arguments, and defining functions 
                        that return the functions they call, and functions are called <strong>"first-class"</strong> values.
                        There are very powerful features used in JavaScript and these are the like <strong>higher-order functions</strong>, and one of them
                        is <strong>the built-in map() function</strong>. 
                        If an error occurs in the function, you can make the execution continue by using <strong>exceptions</strong>.
                        These exceptions are <strong>throwing an exception, catching an exception</strong> and <strong>using a finally block</strong>.
                    </p>
                </article>  

        </>
    );
}

export default TopicsPage;
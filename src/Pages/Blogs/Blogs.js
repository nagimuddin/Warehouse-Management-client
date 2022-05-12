import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="blog-section">
            <h2>1. Difference between javascript and nodejs?</h2>
            <p>
              1.NodeJS as an asynchronous event-driven JavaScript runtime. It is
              written in C, C++ and Javascript. Javascript can run outside of
              browser by NodeJS.It is mostly used on the server-side. Lodash,
              express etc are Some modules of Nodejs. 2. JavaScript is a
              scripting language. It is the update version of ECMA script, that
              uses Chrome's V8 engine which is written in C++. It is a
              high-level programming language.It's can only run in browsers. It
              is used on the client-side. Its concept of Oops, but it is based
              on prototype inheritance.
            </p>
            <h2>2. When should you use nodejs and when mongodb?</h2>
            <p>
              Any project needs a programming environment and a runtime library
              that offers you basic programming support and can compile and
              interpret your code. Nodejs is such as tool for the Javascript
              programming language. There are other similar tools for other
              languages such as Python, Java, PHP, C#, C++, Go, etc. So, if you
              want to write some kind of stand-alone program or server in
              Javascript, then you can use "Nodejs" for it. MongoDB is a
              database engine. If you have to code within some application,
              server, query, update and save data in a database we can use
              MongoDB to save. There are many web servers built with nodejs that
              will then use MongoDB for storing data.
            </p>
            <h2>3. Differences between sql and nosql databases.</h2>
            <p>
              1. SQL is are relational databases, NoSQL are non-relational
              databases. 2. Structured query language and predefined schema are
              used by SQL databases. NoSQL databases use dynamic schemas for
              unstructured data. 3. SQL databases are vertically scalable, and
              NoSQL databases are horizontally scalable. 4. SQL databases are
              table-based, other side NoSQL databases are document, key-value,
              graph, or wide-column stores. 5. SQL databases are usful for
              multi-row transactions, while NoSQL is suitable for unstructured
              data like documents or JSON.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

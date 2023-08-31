import Footer from "../Share/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <div>
      <h1 className="bg-red-500 uppercase p-4">
        what is access token and refresh token ? how do they work and where
        should we store them on the client-side
      </h1>
      <div className="p-4">
      The access token allows for access to different APIs and protected
      resources. The refresh token lets you mint new access tokens.
      <p>
        Unlike access tokens, which are opaque objects that cannot be inspected
        by the application, ID tokens are meant to be inspected and used by the
        application. Information from the token, such as Who signed the token or
        the identity for whom the ID token was issued, is available for use by
        the application.
      </p>
      <p>
        During the first stage of the authorization process, the system
        generates a token after a successful login.
      </p>
      <p>
        window. localStorage: There is no expiry date for the data stored.
        window. sessionStorage: It stores data for one session (data is lost
        when the browser tab is closed)
      </p>
      <br />
      <br />
      </div>
      <h2 className="bg-red-500 uppercase p-4">Compare sql and nosql databases?</h2>
      <p>
        NoSQL and SQL databases have many similarities. In addition to
        supporting data storage and queries, they both also allow one to
        retrieve, update, and delete stored data
      </p>
      <p>
        SQL databases are table-based, while NoSQL databases are document,
        key-value, graph, or wide-column stores. SQL databases are better for
        multi-row transactions, while NoSQL is better for unstructured data like
        documents or JSON
      </p>
      <h2 className="bg-red-500 uppercase p-4">what is express js ? what is nest js ?</h2>
      <p>
        Express is a minimal and flexible Node.js web application framework that
        provides a robust set of features for web and mobile applications
      </p>{" "}
      <br />
      <h3 className="bg-red-500 uppercase p-4">what is nest js:</h3>
      <p>
        NestJS is a popular open-source, back-end framework for Node. js and
        TypeScript-based, server-side applications. It is intended to provide a
        solid foundation for developing server-side applications by leveraging
        well-known patterns and the best practices from other frameworks such as
        Angular, Express. js, and others
      </p>
      <p>
        Nest. js is one of the fastest-growing Node. js frameworks for building
        efficient, scalable, and enterprise-grade backend applications using
        Node. js.{" "}
      </p>
      <h2 className="bg-red-500 uppercase p-4">
        what is mongodb aggregate and how does it work ?
      </h2>
      <p>
        Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline.
      </p>
      
    </div>
    </div>
    
    
  );
};

export default Blog;

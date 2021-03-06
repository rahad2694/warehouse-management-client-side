import React from 'react';
import Table from './Table';
import Table2 from './Table2';

const Blog = () => {
    return (
        <div className='sm:w-11/12 md:w-3/4 mx-auto mt-6 mb-24'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Difference between javaScript and nodejs ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>JavaScript Vs nodejs</strong>
                            <Table></Table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Differences between sql and nosql databases ?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>SQL Vs noSQL</strong>
                            <Table2></Table2>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button className=" accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            When should you use Nodejs and when should you use Mongodb ?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>Nodejs</strong> and <strong>Mongodb</strong> are two different technologies, NodeJS is a JavaScript runtime environment which helps us to perform backend activities or server side activities with JavaScript only. Whereas MongoDb is a NoSQL database system which permits us to store data on this database and perform CRUD operations as well as searching documents by some criteria.
                            <br />
                            <br />
                            For example, If am going to perform like a MERN stack developer, I need to use both NodeJS and Mongodb together. Moreover, using both NodeJS and Mongodb will be a great help to perform any server side activities efficiently.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
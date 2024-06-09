import React from 'react'

export default function ItemDescription() {
    return (
        <div>
            <div className="container mt-5">
                <div className="row home-screen-header mt-5 mb-4">
                    <h1>Stack</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://media.istockphoto.com/id/157482029/photo/stack-of-books.jpg?s=1024x1024&w=is&k=20&c=iQdICOnz_UmfAiFuY3d3LQe1B9cYHI3UwjTPNKBOlow=" alt="" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h4>What is Stack ?</h4>
                        <p>
                            A stack is a linear data structure in data structures and algorithms (DSA) that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Stacks support two primary operations:

                            <ol>
                                <li>Push: Adding an element to the top of the stack.</li>
                                <li>Pop: Removing an element from the top of the stack.</li>
                            </ol>

                            <h5>Additional operations include:</h5>
                            <ul>
                                <li>Peek/Top: Returns the top element without removing it.</li>
                                <li>isEmpty: Checks if the stack is empty.</li>
                            </ul>

                            Stacks are used in various applications, including function call management, expression evaluation, backtracking algorithms, and undo mechanisms in software applications. They can be implemented using arrays or linked lists.
                        </p>
                        <div className="row">
                            <div className="col">
                                <div className=''>
                                    <p href="#" className="btn btn-primary">View</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className=''>
                                    <p href="#" className="btn btn-primary">View</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

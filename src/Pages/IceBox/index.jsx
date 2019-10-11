import React from 'react'
import { Link } from 'react-router-dom'
import './IceBox.css'

const IceBox = () => {
    return ( 
        <div className="icebox">
      
        <main>
        <header>
                <nav>
                    <ul>
                        <li><Link to="/">Back to JS For Designers</Link></li>
                    </ul>
                </nav>
                <h1>JS for Designers Ice Box</h1>
                <section>
                    <article>
                        <h2>What is an Ice Box?</h2>
                        <p>The icebox is a place where feature ideas are held, in a queue, waiting to be created. Think of it like a wishlist. The ideas in it are probably great, but not necessities to the core functionality of the entire product/project</p>
                    </article>
                </section>
            </header>

            <section>
                <h2>Ice Box Feature List</h2>
                <ul>
                    <li>
                        <p>Node.JS Backend for all of the SuperHi projects</p>
                    </li>
                    <li>
                        <p>GraphQL queries on the front end instead of REST</p>
                    </li>
                    <li>
                        <p>Flask Backend for the next SuperHi series</p>
                    </li>
                    <li>
                        <p>Footer at the bottom with site navigation</p>
                    </li>
                    <li>
                        <p>Add Full shop functionality with fake checkout to Plant Life</p>
                    </li>
                </ul>
            </section>

        </main>
        </div>
     );
}
 
export default IceBox;
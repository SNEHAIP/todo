import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewTodo = () => {
    const [todos,changeTodos]=useState( [])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos").then(
        (response)=>{
          changeTodos(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />

            <div className="conatainer">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">userId</th>
                                            <th scope="col">id</th>
                                            <th scope="col">title</th>
                                            <th scope="col">completed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="1">{value.userId}</th>
                                                    <td>{value.id}</td>
                                                    <td>{value.title}</td>
                                                    <td>{value.completed}</td>
                                                </tr>
                                            }
                                        )}

                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo
import { useState } from "react"
import { Link } from "react-router-dom"
import { ref, set } from 'firebase/database'
import { database } from "../../firebaseSetup"

const NewList = () => {
    const [title, setTitle] = useState('')
    const [item, setItem] = useState('')
    const [isTitle, setIsTitle] = useState(false)
    const [isListItem, setIsListItem] = useState(false)
    const [listData, setListData] = useState([])

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const createNewList = e => {
        e.preventDefault()
        setIsTitle(true)
    }

    const handleItemChange = e => {
        setItem(e.target.value)
    }

    const addItemToList = e => {
        e.preventDefault()
        setIsListItem(true)
        setListData(prevData => [...prevData, item])
        setItem('')
    }

    return (
        <>
            <Link to="..">Back to dashboard</Link>
            <h1>{isTitle ? title : 'New list'}</h1>
            {!isTitle ?
                <form onSubmit={e => createNewList(e)}>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Give your to-do list a name"
                        value={title}
                        onChange={e => handleTitleChange(e)}
                    />
                    <button>Create your new list</button>
                </form> :
                <form onSubmit={e => addItemToList(e)}>
                    <input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="Enter a task"
                        value={item}
                        onChange={e => handleItemChange(e)}
                    />
                    <button>Add item</button>
                </form>
            }
            {isListItem && 
                listData.map(item => <p key={item}>{item}</p>)
            }
        </>
    )
}

export default NewList
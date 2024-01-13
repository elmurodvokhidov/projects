import React, { useState } from 'react'
import { postAdded } from './postSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from './users/usersSlice';

function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded({ id: nanoid(), title, content }))
        };

        setTitle('');
        setContent('');
    };

    return (
        <div>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    type="text"
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button onClick={onSavePostClicked} type='button'>Save post</button>
            </form>
        </div>
    )
}

export default AddPostForm
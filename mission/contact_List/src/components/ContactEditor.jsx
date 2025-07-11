import './ContactEditor.css'
import { useRef, useReducer, useCallback } from 'react'

const initialState = {
    name: '',
    email: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.data }
        case 'SET_EMAIL':
            return { ...state, email: action.data }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const ContactEditor = ({ onCreate }) => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(reducer, initialState)

    const onSubmit = useCallback(() => {
        // 이름이 없으면 이름 입력란에 포커스
        if (!state.name.trim()) {
            nameRef.current.focus()
            return
        }
        onCreate(state)
        dispatch({ type: 'RESET' })
    }, [onCreate, state])

    const onKeyDown = (e) => {
        // Enter 키를 눌렀을 때 onSubmit 호출
        if (e.key === 'Enter') {
            onSubmit()
        }
    }

    return (
        <div className="contact-editor">
            <h3>Add Contact</h3>
            <div className="input-row">
                <input
                    type="text"
                    className="name-input"
                    placeholder="이름 ..."
                    ref={nameRef}
                    value={state.name}
                    onChange={e => dispatch({ type: 'SET_NAME', data: e.target.value })}
                />
                <input
                    type="text"
                    className="email-input"
                    placeholder="연락처(이메일) ..."
                    value={state.email}
                    onChange={e => dispatch({ type: 'SET_EMAIL', data: e.target.value })}                    onKeyDown={onKeyDown}
                />
            </div>
            <button type="submit" onClick={onSubmit} onKeyDown={onKeyDown}>Add</button>
        </div>
    )
}

export default ContactEditor
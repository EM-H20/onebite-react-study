import './App.css'
import ContactList from './components/ContactList'
import ContactEditor from './components/ContactEditor'
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react'

const initialState = {
  contacts: [
    { id: 0, name: '김철수', email: 'kim.chulsoo@example.com' },
    { id: 1, name: '이영희', email: 'lee.younghee@example.com' },
    { id: 2, name: '박민수', email: 'park.minsu@example.com' },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return {
        // ...state: state 복사
        ...state,
        // contacts 배열에 action.data 추가
        // ...state.contacts: contacts 배열 복사
        contacts: [...state.contacts, action.data],
      }
    case 'DELETE':
      return {  
        // ...state: state 복사
        ...state,
        // contacts 배열에서 action.data.id와 일치하는 요소 제거
        // state.contacts.filter(contact => contact.id !== action.data.id): contacts 배열에서 action.data.id와 일치하는 요소 제거
        contacts: state.contacts.filter(contact => contact.id !== action.data.id),
      }
    default:
      return state
  }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const idRef = useRef(3);

  const onCreate = useCallback((contact) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        name: contact.name,
        email: contact.email,
      },
    })
  }, [])
  const onDelete = useCallback((contact) => {
    dispatch({
      type: 'DELETE',
      data: contact,
    })
  }, [])
  const memoizedDispatch = useMemo(() => ({ onCreate, onDelete }), [onCreate, onDelete]);

  return (
    <ContactStateContext.Provider value={state.contacts}>
      <ContactDispatchContext.Provider value={memoizedDispatch}>
        <div className="App">
          <h1>Contact List</h1>
          <ContactEditor />
          <ContactList />
        </div>
      </ContactDispatchContext.Provider>
    </ContactStateContext.Provider>
  )
}

export default App

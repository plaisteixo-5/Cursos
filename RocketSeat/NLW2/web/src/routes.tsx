import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeachForm from './pages/TeacherForm'
import TeachList from './pages/TeacherList'

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TeachList} />
            <Route path="/give-classes" component={TeachForm} />
        </BrowserRouter>
    )
}
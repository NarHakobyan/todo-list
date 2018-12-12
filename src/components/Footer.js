import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../store/actions/todo'

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            Pending
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
)

export default Footer

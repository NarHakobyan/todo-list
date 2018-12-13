import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../store/actions/todo'

const FilterTabs = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            Pending
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Archived
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
        {' Todos'}
    </p>
)

export default FilterTabs

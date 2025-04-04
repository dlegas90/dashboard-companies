import React from 'react'
import HeaderCompanies from './components/HeaderCompanies/HeaderCompanies'
import { ListCompanies } from './components/ListCompanies'

export default function companiesPage() {
  return (
    <div>
        <HeaderCompanies />
        <ListCompanies />
    </div>
  )
}

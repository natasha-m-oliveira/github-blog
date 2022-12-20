import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  async function handleSearchTransactions(event: ChangeEvent) {}

  return (
    <SearchFormContainer
      onChange={handleSearchTransactions}
      type="text"
      placeholder="Busque por transações"
    />
  )
}

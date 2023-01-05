import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  onChangeValue: (query: string) => void
}

export function SearchForm({ onChangeValue }: SearchFormProps) {
  async function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    onChangeValue(event.target.value)
  }

  return (
    <SearchFormContainer
      onChange={handleSearch}
      type="text"
      placeholder="Busque por transações"
    />
  )
}

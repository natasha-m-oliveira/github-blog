import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatCreatedAt(createdAt: string): string {
  return formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })
}

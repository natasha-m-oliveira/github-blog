import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { CarContent, CardContainer, CardHeader } from './styles'

interface CardProps {
  id: number
  title: string
  createdAt: string
  content: string
}

export function Card({ id, title, createdAt, content }: CardProps) {
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate(`/post/${id}`)}>
      <CardHeader>
        <h3>{title}</h3>
        <span>{createdAt}</span>
      </CardHeader>

      <CarContent>
        <ReactMarkdown
          className="line-break"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </CarContent>
    </CardContainer>
  )
}

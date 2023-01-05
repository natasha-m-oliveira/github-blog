import rangeParser from 'parse-numeric-range'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { useTheme } from 'styled-components'
import { ArticleContainer } from './styles'

interface ArticleProps {
  content: string
}

export function Article({ content }: ArticleProps) {
  const colors = useTheme()
  return (
    <ArticleContainer>
      <ReactMarkdown
        className="line-break"
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, inline, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            if (!match) {
              return <code className={className} {...props} />
            }

            const meta = node?.data?.meta as string | undefined

            function applyHighlights(highlights: number) {
              if (!meta) {
                return {}
              }

              const regex = /{([\d,-]+)}/
              const metadata = meta.replace(/\s/g, '')
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : '0'

              const highlightLines = rangeParser(strlineNumbers)
              const data = highlightLines.includes(highlights)
                ? 'highlight'
                : undefined

              return { data }
            }

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers
                wrapLines={!!meta}
                useInlineStyles
                lineProps={applyHighlights}
                inline={inline?.valueOf}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: colors['base-post'],
                      color: colors['base-code'],
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: colors['base-post'],
                      color: colors['base-code'],
                    },
                  } as any
                }
                {...props}
              >
                {String(children).replace(/\s$/g, '')}
              </SyntaxHighlighter>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </ArticleContainer>
  )
}

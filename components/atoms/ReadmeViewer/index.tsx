import React from "react"
import styles from "./index.module.scss"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

const ReadmeViewer = ({content, repoUrl}: {content: string; repoUrl: string}) => {
  const readmeLink = repoUrl.endsWith("/") ? `${repoUrl}blob/main/README.md` : `${repoUrl}/blob/main/README.md`

  return (
    <section className={styles.readmeContainer}>
      <div className={styles.topBar}>
        <a
          href={readmeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fileName}
          title="View raw file on GitHub"
        >
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          README.md
        </a>
      </div>

      <div className={styles.markdownWrapper}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({node, ...props}) => <a {...props} className="link" target="_blank" rel="noopener noreferrer" />,
            // Shift headers down by one level
            h1: ({node, ...props}) => <h2 {...props} />,
            h2: ({node, ...props}) => <h3 {...props} />,
            h3: ({node, ...props}) => <h4 {...props} />,
            h4: ({node, ...props}) => <h5 {...props} />,
            h5: ({node, ...props}) => <h6 {...props} />,
            h6: ({node, ...props}) => <p {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default ReadmeViewer

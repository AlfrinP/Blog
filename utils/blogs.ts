import remarkParse from 'remark-parse';
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdownString: string): Promise<string> {
  const result = await unified()
    .use(remarkParse) // parse markdown
    .use(remarkRehype) // markdown → HTML AST
    .use(rehypeHighlight) // syntax highlight
    .use(rehypeStringify) // HTML string
    .process(markdownString);

  return result.toString();
}

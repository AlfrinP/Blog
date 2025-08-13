import remarkParse from 'remark-parse';
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdownString: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdownString);

  return result.toString();
}

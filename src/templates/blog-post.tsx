import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, Section, GradientText } from '../styles/GlobalStyles';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .meta {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      gap: 1rem;
    }
  }
  
  .description {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ArticleContent = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  
  h2, h3, h4, h5, h6 {
    color: white;
    margin: 2.5rem 0 1rem;
    font-weight: 600;
  }
  
  h2 {
    font-size: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: #667eea;
    text-decoration: underline;
    
    &:hover {
      color: #764ba2;
    }
  }
  
  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
  }
  
  pre {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 2rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
  
  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-link {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    
    &.next {
      text-align: right;
      
      @media (max-width: 768px) {
        text-align: left;
      }
    }
    
    .label {
      font-size: 0.875rem;
      color: rgba(255, 255, 255, 0.6);
      margin-bottom: 0.5rem;
    }
    
    .title {
      color: #667eea;
      font-weight: 500;
      
      &:hover {
        color: #764ba2;
      }
    }
  }
`;

const BackToTop = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

interface BlogPostProps {
  data: {
    markdownRemark: {
      id: string;
      excerpt: string;
      html: string;
      frontmatter: {
        title: string;
        date: string;
        description: string;
        tags?: string[];
      };
    };
    previous?: {
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
    next?: {
      frontmatter: {
        title: string;
      };
      fields: {
        slug: string;
      };
    };
  };
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({ data }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout>
      <Section>
        <Article>
          <ArticleHeader>
            <h1>{post.frontmatter.title}</h1>
            <div className="meta">
              <span>{post.frontmatter.date}</span>
              {post.frontmatter.tags && (
                <span>
                  {post.frontmatter.tags.map((tag, index) => (
                    <span key={tag}>
                      #{tag}
                      {index < post.frontmatter.tags!.length - 1 && ', '}
                    </span>
                  ))}
                </span>
              )}
            </div>
            {post.frontmatter.description && (
              <p className="description">{post.frontmatter.description}</p>
            )}
          </ArticleHeader>

          <ArticleContent
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <BackToTop>
            <Button variant="secondary" as={Link} to="/blog">
              ← Back to Blog
            </Button>
          </BackToTop>

          <Navigation>
            <div>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} className="nav-link">
                  <span className="label">Previous</span>
                  <span className="title">{previous.frontmatter.title}</span>
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link to={`/blog${next.fields.slug}`} className="nav-link next">
                  <span className="label">Next</span>
                  <span className="title">{next.frontmatter.title}</span>
                </Link>
              )}
            </div>
          </Navigation>
        </Article>
      </Section>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

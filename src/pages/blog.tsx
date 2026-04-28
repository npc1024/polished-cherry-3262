import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Card, Section, Grid, GradientText } from '../styles/GlobalStyles';

const PageHeader = styled.section`
  padding: 4rem 0 2rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogCard = styled(Card)`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: white;
    
    a {
      transition: color 0.2s ease;
      
      &:hover {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
  
  .meta {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .read-more {
    color: #667eea;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: #764ba2;
      transform: translateX(4px);
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  p {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 2rem;
  }
`;

interface BlogPageProps {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
          tags?: string[];
        };
        fields: {
          slug: string;
        };
      }>;
    };
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <PageHeader>
        <div className="container">
          <PageTitle>
            Our <GradientText>Blog</GradientText>
          </PageTitle>
          <PageSubtitle>
            Explore our collection of articles covering technology, design, development, 
            and industry insights from our team of expert writers.
          </PageSubtitle>
        </div>
      </PageHeader>

      <Section>
        <div className="container">
          {posts.length > 0 ? (
            <Grid columns={2}>
              {posts.map(post => (
                <BlogCard key={post.id}>
                  <h2>
                    <Link to={`/blog${post.fields.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
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
                  <p>{post.frontmatter.description || post.excerpt}</p>
                  <Link to={`/blog${post.fields.slug}`} className="read-more">
                    Read full article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </Link>
                </BlogCard>
              ))}
            </Grid>
          ) : (
            <EmptyState>
              <h3>No blog posts yet</h3>
              <p>We're working on some amazing content. Check back soon!</p>
            </EmptyState>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`;

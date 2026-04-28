import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, Card, Section, Grid, GradientText } from '../styles/GlobalStyles';

const Hero = styled.section`
  padding: 8rem 0 6rem;
  text-align: center;
  background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const HeroCTA = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeatureCard = styled(Card)`
  text-align: center;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;

const BlogPreview = styled(Card)`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  
  .meta {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .read-more {
    color: #667eea;
    font-weight: 500;
    
    &:hover {
      color: #764ba2;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    allMarkdownRemark: {
      nodes: Array<{
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      }>;
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Hero>
        <div className="container">
          <HeroTitle>
            欢迎来到 <GradientText>ModernBlog</GradientText>
          </HeroTitle>
          <HeroSubtitle>
            探索由行业专家和热血作者带来的深度文章、前沿教程以及启发性内容。
          </HeroSubtitle>
          <HeroCTA>
            <Button variant="primary" as={Link} to="/blog">
              探索文章
            </Button>
            <Button variant="secondary" as={Link} to="/about">
              了解更多
            </Button>
          </HeroCTA>
        </div>
      </Hero>

      <Section>
        <div className="container">
          <SectionTitle>
            为什么选择 <GradientText>ModernBlog</GradientText>？
          </SectionTitle>
          <Grid>
            <FeatureCard>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3>极速体验</h3>
              <p>基于 Gatsby 构建，拥有风驰电掣般的性能和极致的用户体验。</p>
            </FeatureCard>
            <FeatureCard>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
              <h3>现代设计</h3>
              <p>纯净的响应式设计，在任何设备和屏幕尺寸上都能完美呈现。</p>
            </FeatureCard>
            <FeatureCard>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3>SEO 优化</h3>
              <p>内置 SEO 优化机制，助您的内容精准触达目标受众。</p>
            </FeatureCard>
          </Grid>
        </div>
      </Section>

      {posts.length > 0 && (
        <Section>
          <div className="container">
            <SectionTitle>
              最新 <GradientText>文章</GradientText>
            </SectionTitle>
            <Grid>
              {posts.slice(0, 3).map(post => (
                <BlogPreview key={post.id}>
                  <h3>
                    <Link to={`/blog${post.fields.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  <div className="meta">
                    {post.frontmatter.date}
                  </div>
                  <p>{post.frontmatter.description || post.excerpt}</p>
                  <Link to={`/blog${post.fields.slug}`} className="read-more">
                    阅读全文 →
                  </Link>
                </BlogPreview>
              ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Button variant="secondary" as={Link} to="/blog">
                查看全部文章
              </Button>
            </div>
          </div>
        </Section>
      )}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "YYYY年MM月DD日")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;

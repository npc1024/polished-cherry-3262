import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, GradientText } from '../styles/GlobalStyles';

const NotFoundContainer = styled.section`
  padding: 8rem 0;
  text-align: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SuggestionsList = styled.div`
  margin-top: 4rem;
  text-align: left;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  li {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      
      &:hover {
        color: #764ba2;
      }
    }
    
    p {
      color: rgba(255, 255, 255, 0.7);
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <div className="container">
          <NotFoundContent>
            <ErrorCode>404</ErrorCode>
            <NotFoundTitle>
              Page <GradientText>Not Found</GradientText>
            </NotFoundTitle>
            <NotFoundDescription>
              Oops! The page you're looking for seems to have vanished into the digital void. 
              Don't worry though, we'll help you find your way back to the good stuff.
            </NotFoundDescription>
            
            <ActionButtons>
              <Button variant="primary" as={Link} to="/">
                🏠 Go Home
              </Button>
              <Button variant="secondary" as={Link} to="/blog">
                📚 Browse Articles
              </Button>
            </ActionButtons>

            <SuggestionsList>
              <h3>Popular Destinations</h3>
              <ul>
                <li>
                  <Link to="/">
                    🏠 Homepage
                  </Link>
                  <p>Start your journey from the beginning</p>
                </li>
                <li>
                  <Link to="/blog">
                    📚 Blog
                  </Link>
                  <p>Explore our latest articles and insights</p>
                </li>
                <li>
                  <Link to="/about">
                    👋 About
                  </Link>
                  <p>Learn more about our story and mission</p>
                </li>
                <li>
                  <Link to="/blog/welcome-to-modern-blog">
                    🚀 Getting Started
                  </Link>
                  <p>New here? Start with our welcome post</p>
                </li>
              </ul>
            </SuggestionsList>
          </NotFoundContent>
        </div>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;

// Add metadata for SEO
export const Head = () => (
  <>
    <title>404 - Page Not Found | ModernBlog</title>
    <meta name="description" content="The page you're looking for couldn't be found. Explore our blog and discover amazing content." />
    <meta name="robots" content="noindex, nofollow" />
  </>
);

import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Button, Card, Section, Grid, GradientText } from '../styles/GlobalStyles';

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

const ContentSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
  }
`;

const StatsGrid = styled(Grid)`
  margin: 4rem 0;
`;

const StatCard = styled(Card)`
  text-align: center;
  
  .number {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
`;

const TeamGrid = styled(Grid)`
  margin: 4rem 0;
`;

const TeamCard = styled(Card)`
  text-align: center;
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: white;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: white;
  }
  
  .role {
    color: #667eea;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const CTASection = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 3rem;
  margin: 4rem 0;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader>
        <div className="container">
          <PageTitle>
            About <GradientText>ModernBlog</GradientText>
          </PageTitle>
          <PageSubtitle>
            We're passionate about sharing knowledge and building a community 
            of learners, creators, and innovators.
          </PageSubtitle>
        </div>
      </PageHeader>

      <Section>
        <div className="container">
          <ContentSection>
            <h2>Our Story</h2>
            <p>
              ModernBlog was born from a simple idea: to create a platform where ideas could flourish 
              and knowledge could be shared freely. We believe that the best insights come from 
              diverse perspectives and collaborative thinking.
            </p>
            <p>
              Our team consists of passionate writers, developers, designers, and thinkers who are 
              committed to creating high-quality content that inspires, educates, and empowers our 
              readers to push the boundaries of what's possible.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              We strive to democratize knowledge sharing by providing a platform that's accessible, 
              beautiful, and performant. Every article we publish is carefully crafted to provide 
              real value to our readers, whether they're beginners looking to learn or experts 
              seeking to stay ahead of the curve.
            </p>
          </ContentSection>

          <StatsGrid>
            <StatCard>
              <div className="number">50K+</div>
              <div className="label">Monthly Readers</div>
            </StatCard>
            <StatCard>
              <div className="number">200+</div>
              <div className="label">Articles Published</div>
            </StatCard>
            <StatCard>
              <div className="number">15+</div>
              <div className="label">Expert Writers</div>
            </StatCard>
          </StatsGrid>

          <ContentSection>
            <h2>Meet Our Team</h2>
          </ContentSection>

          <TeamGrid>
            <TeamCard>
              <div className="avatar">JS</div>
              <h3>Jane Smith</h3>
              <div className="role">Editor-in-Chief</div>
              <p>
                Jane brings over 10 years of editorial experience and a passion for 
                technology journalism to ModernBlog.
              </p>
            </TeamCard>
            <TeamCard>
              <div className="avatar">MD</div>
              <h3>Mike Davis</h3>
              <div className="role">Lead Developer</div>
              <p>
                Mike is a full-stack developer who loves building fast, accessible 
                web experiences and sharing his knowledge.
              </p>
            </TeamCard>
            <TeamCard>
              <div className="avatar">SL</div>
              <h3>Sarah Lee</h3>
              <div className="role">UX Designer</div>
              <p>
                Sarah focuses on creating intuitive, beautiful interfaces that 
                make complex topics accessible to everyone.
              </p>
            </TeamCard>
          </TeamGrid>

          <CTASection>
            <h2>Join Our Community</h2>
            <p>
              Ready to be part of our growing community? Subscribe to our newsletter 
              and never miss an update from ModernBlog.
            </p>
            <Button variant="primary">
              Subscribe Now
            </Button>
          </CTASection>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;

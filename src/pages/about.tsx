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
            关于 <GradientText>ModernBlog</GradientText>
          </PageTitle>
          <PageSubtitle>
            我们热衷于分享知识，并致力于构建一个由学习者、创作者和创新者组成的活跃社区。
          </PageSubtitle>
        </div>
      </PageHeader>

      <Section>
        <div className="container">
          <ContentSection>
            <h2>我们的故事</h2>
            <p>
              ModernBlog 诞生于一个简单的理念：创建一个让创意蓬勃发展、知识自由分享的平台。我们相信，最深刻的见解往往源于多元的视角和协作式思考。
            </p>
            <p>
              我们的团队由充满热情的作者、开发人员、设计师和思想家组成。我们致力于创作高质量内容，旨在启发、教育并赋能每一位读者，共同突破可能性的边界。
            </p>
            
            <h2>我们的使命</h2>
            <p>
              我们努力通过提供一个无障碍、精美且高性能的平台，推动知识共享的民主化。我们发布的每一篇文章都经过精心打磨，无论是渴望学习的初学者，还是寻求保持行业领先地位的专家，都能从中获得真正的价值。
            </p>
          </ContentSection>

          <StatsGrid>
            <StatCard>
              <div className="number">50K+</div>
              <div className="label">月度活跃读者</div>
            </StatCard>
            <StatCard>
              <div className="number">200+</div>
              <div className="label">已发布文章</div>
            </StatCard>
            <StatCard>
              <div className="number">15+</div>
              <div className="label">专家作者</div>
            </StatCard>
          </StatsGrid>

          <ContentSection>
            <h2>认识我们的团队</h2>
          </ContentSection>

          <TeamGrid>
            <TeamCard>
              <div className="avatar">JS</div>
              <h3>简 · 史密斯</h3>
              <div className="role">总编辑</div>
              <p>
                Jane 拥有超过 10 年的编辑经验，她带着对科技新闻的极高热情加入了 ModernBlog 团队。
              </p>
            </TeamCard>
            <TeamCard>
              <div className="avatar">MD</div>
              <h3>迈克 · 戴维斯</h3>
              <div className="role">首席开发工程师</div>
              <p>
                Mike 是一位全栈开发专家，热衷于构建快速、易用的 Web 体验，并乐于分享技术心得。
              </p>
            </TeamCard>
            <TeamCard>
              <div className="avatar">SL</div>
              <h3>莎拉 · 李</h3>
              <div className="role">用户体验设计师</div>
              <p>
                Sarah 专注于打造直观、精美的交互界面，让复杂的课题变得通俗易懂。
              </p>
            </TeamCard>
          </TeamGrid>

          <CTASection>
            <h2>加入我们的社区</h2>
            <p>
              准备好成为我们不断壮大的社区的一员了吗？订阅我们的时事通讯，获取 ModernBlog 的最新动态。
            </p>
            <Button variant="primary">
              立即订阅
            </Button>
          </CTASection>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;

import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ExperienceImg from '../Image/ExperienceImg';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="experience">
      <Container>
        <div className="exp-wrapper">
          <Title title="Experience" />
          <Row>
            {experience &&
              experience.reverse().map((exp) => {
                const { title, time, techStack, description, img, id } = exp;

                return (
                  <Col key={id} lg={6} sm={12} className="timeline">
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="exp-wrapper__image">
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded company-logos">
                            <ExperienceImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </div>

                      <div className="exp-wrapper__text">
                        <h3 className="exp-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>{time}</p>
                          <p className="mb-4 tech-stack">
                            {techStack &&
                              techStack.map((ts) => (
                                <span className="tech-chip" key={ts.id}>
                                  {ts.name}
                                </span>
                              ))}
                          </p>
                          <div>
                            <ul>
                              {description &&
                                description.map((desc) => <li key={desc.id}>{desc.name}</li>)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Experience;

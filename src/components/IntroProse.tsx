import React, { ReactElement } from 'react'
import styled from 'styled-components'
import GlitchyText from './GlitchyText'

const IntroProse: React.FC = (): ReactElement => {
  return (
    <StyledIntro>
      <h1>
        Hi there.
        <br />
        <GlitchTextWrapper>
          I&apos;m
          <GlitchyText>Andrew Glago.</GlitchyText>
        </GlitchTextWrapper>
      </h1>
      <p>
        👋 Software developer passionate about building performant applications
        for the web and beyond.
      </p>

      <div></div>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  font-size: var(--fontSize-4);
  color: var(--color-text-primary);

  strong {
    color: var(--color-text);
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    line-height: 140%;
    color: unset;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    width: 95%;
    line-height: 150%;
    margin: 20px 0;
    /* font-weight: 300; */

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      font-size: var(--fontSize-2);
    }
  }
`

const GlitchTextWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export default IntroProse

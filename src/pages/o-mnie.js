import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';

const AboutMePage = () => (
  <MainTemplate hero={{ heading: 'O mnie', paragraph: '' }}>
    <SectionGroup>
      <Section
        image="https://source.unsplash.com/302x300/?business"
        heading="Bezpieczeństwo Biznesowe"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
      />
      <Section
        isMirror
        image="https://source.unsplash.com/301x300/?business"
        heading="Bezpieczeństwo Biznesowe"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
      />
    </SectionGroup>
    <SectionGroup isSmallGap bgColor="gray">
      <Section
        heading="Some heading"
        paragraph="Quam tincidunt elit sed nulla iaculis ornare sed. Amet interdum morbi et facilisis ullamcorper in massa, sed. Etiam dictum diam nisi, eget sagittis, pretium. Vulputate facilisis amet, fringilla varius et ultrices viverra lacus imperdiet. Erat eget placerat orci bibendum diam porttitor donec."
      />
      <Section
        heading="Some heading"
        paragraph="Quam tincidunt elit sed nulla iaculis ornare sed. Amet interdum morbi et facilisis ullamcorper in massa, sed. Etiam dictum diam nisi, eget sagittis, pretium. Vulputate facilisis amet, fringilla varius et ultrices viverra lacus imperdiet. Erat eget placerat orci bibendum diam porttitor donec."
      />
    </SectionGroup>
  </MainTemplate>
);

export default AboutMePage;

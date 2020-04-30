import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';

// images
import section from 'images/section.png';

const IndexPage = () => (
  <MainTemplate>
    <>
      <Section
        isPadding
        isCenter
        bgColor="dark"
        heading="Some heading"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis."
      />
      <SectionGroup id="oferta">
        <Section
          image={section}
          heading="Bezpieczeństwo Biznesowe"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
        />
        <Section
          isMirror
          image={section}
          heading="Bezpieczeństwo Biznesowe"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
        />
        <Section
          image={section}
          heading="Bezpieczeństwo Biznesowe"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
        />
      </SectionGroup>
      <SectionGroup isSmallGap bgColor="gray">
        <Section
          bgColor="gray"
          heading="Some heading"
          paragraph="Quam tincidunt elit sed nulla iaculis ornare sed. Amet interdum morbi et facilisis ullamcorper in massa, sed. Etiam dictum diam nisi, eget sagittis, pretium. Vulputate facilisis amet, fringilla varius et ultrices viverra lacus imperdiet. Erat eget placerat orci bibendum diam porttitor donec."
        />
        <Section
          bgColor="gray"
          heading="Some heading"
          paragraph="Quam tincidunt elit sed nulla iaculis ornare sed. Amet interdum morbi et facilisis ullamcorper in massa, sed. Etiam dictum diam nisi, eget sagittis, pretium. Vulputate facilisis amet, fringilla varius et ultrices viverra lacus imperdiet. Erat eget placerat orci bibendum diam porttitor donec. Faucibus elementum suscipit proin massa faucibus ac accumsan, duis. Sit elementum platea risus pharetra id senectus dolor in gravida. Mauris nisi, convallis eget ipsum augue congue gravida."
        />
      </SectionGroup>
    </>
  </MainTemplate>
);
export default IndexPage;

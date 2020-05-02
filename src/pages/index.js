import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';
import PostGroup from 'components/PostGroup';
import PostReference from 'components/PostReference';

const IndexPage = () => (
  <MainTemplate
    hero={{
      heading: 'Bezpieczeństwo Biznesowe',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus faucibus cras massa. Neque ultrices diam vitae nibh arcu. Feugiat semper quis a pellentesque mi, in aliquet. Eget sed malesuada quis velit.',
    }}
  >
    <Section
      isPadding
      isCenter
      bgColor="dark"
      heading="Some heading"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis."
    />
    <div id="services" />
    <SectionGroup>
      <Section
        image="https://source.unsplash.com/300x300/?business"
        heading="Bezpieczeństwo Biznesowe"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
      />
      <Section
        isMirror
        image="https://source.unsplash.com/300x301/?business"
        heading="Bezpieczeństwo Biznesowe"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
      />
      <Section
        image="https://source.unsplash.com/300x302/?business"
        heading="Bezpieczeństwo Biznesowe"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque vulputate enim elit tortor, sed quis turpis. Pretium in id blandit elit fusce pellentesque. Id dui tempus lorem risus consectetur mattis pretium ut est. Egestas cursus enim, elit, quis velit vitae et. Faucibus lectus lorem ut laoreet. Enim diam sed in ultricies diam, blandit dui proin. Risus at sociis ornare augue ultrices commodo eget. Ultricies laoreet ullamcorper et laoreet. Justo fames dui fermentum"
      />
    </SectionGroup>
    <PostGroup heading="Blog">
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x303/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x304/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x305/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x306/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x307/?business"
      />
      <PostReference
        heading="Outsourcing funkcji i zadań IOD"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra"
        image="https://source.unsplash.com/300x308/?business"
      />
    </PostGroup>
  </MainTemplate>
);
export default IndexPage;

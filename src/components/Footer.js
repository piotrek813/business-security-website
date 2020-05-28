import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import toList from 'utils/toList';
import { useStaticQuery, graphql } from 'gatsby';

const StyledWrapper = styled.footer`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  padding: ${({ theme }) => theme.padding.normal};
  ul {
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  ${media.medium`
    padding: ${({ theme }) => theme.padding.medium};
  `}

  ${media.big`
    padding: ${({ theme }) => theme.padding.big};
  `}
`;

const P = styled.p`
  margin-bottom: 27px;

  ${media.big`
      margin-bottom: 32px;
      font-size: 18px;
  `}
`;

const H5 = styled.h5`
  font-size: 16px;
  margin: 0 0 5px 0;
`;

const FooterData = styled.div`
  display: grid;
  grid-gap: 20px 85px;

  ${media.medium`
      grid-template-columns: 1fr 1fr;
  `};

  ${media.big`
      grid-template-columns: 1fr 2fr;
  `}

  a {
    color: ${({ theme }) => theme.white};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Blog = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  ${media.small`
      grid-template-columns: 1fr 1fr;
  `}

  ${media.medium`
      grid-template-columns: 1fr;
  `}

  ${media.big`
      grid-template-columns: 1fr 1fr;
  `}
`;

const Footer = () => {
  const {
    datoCmsContact: { contactData },
    allDatoCmsPost,
  } = useStaticQuery(graphql`
    query {
      datoCmsContact {
        contactData
      }
      allDatoCmsPost(
        limit: 8
        sort: { order: DESC, fields: meta___publishedAt }
      ) {
        edges {
          node {
            slug
            heading
          }
        }
      }
    }
  `);

  const postsHeading = allDatoCmsPost.edges.map(
    ({ node: { heading, slug } }) => ({ label: heading, to: `/${slug}` })
  );

  return (
    <StyledWrapper>
      <P>
        Strona korzysta z plików cookies w celu śledzenia zachowania użytkownika
        na stronie. ©2020 Piotr Calinski
      </P>
      <div>
        <FooterData>
          {toList(contactData)}
          <div>
            <H5>Zobacz nasze najnowsze artykuły:</H5>
            <Blog>{toList(postsHeading, true)}</Blog>
          </div>
        </FooterData>
      </div>
    </StyledWrapper>
  );
};

export default Footer;

import React from 'react';
import Section from 'components/Section';
import SectionGroup from 'components/SectionGroup';

const renderSections = (data) => {
  const toRender = [];
  let block = [];
  let key = '';

  for (let i = 0; i < data.length; i += 1) {
    key += data[i].id;
    if (data[i].model.apiKey === 'section_with_image') {
      const item = data[i];
      block.push(
        <Section
          key={item.id}
          isMirror={i % 2 === 0}
          image={item.image}
          heading={item.heading}
          paragraph={item.textNode}
        />
      );
      if (
        (data[i + 1] && data[i + 1].model.apiKey !== 'section_with_image') ||
        data.length === i + 1
      ) {
        toRender.push(<SectionGroup key={key}>{block}</SectionGroup>);
        block = [];
        key = '';
      }
    } else if (data[i].model.apiKey === 'section_without_image_center') {
      const item = data[i];
      toRender.push(
        <Section
          key={key}
          isPadding
          isCenter
          bgColor="dark"
          heading={item.heading}
          paragraph={item.text}
        />
      );
    } else if (data[i].model.apiKey === 'section_without_image') {
      const item = data[i];
      block.push(
        <Section
          key={item.id}
          heading={item.heading}
          paragraph={item.textNode}
        />
      );
      if (
        (data[i + 1] && data[i + 1].model.apiKey !== 'section_without_image') ||
        data.length === i + 1
      ) {
        toRender.push(
          <SectionGroup isSmallGap bgColor="gray" key={key}>
            {block}
          </SectionGroup>
        );
        block = [];
        key = '';
      }
    }
  }

  return toRender;
};

export default renderSections;

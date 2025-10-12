import React from 'react';
import './AppearanceItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { AppearanceLink } from '../../model';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

type AppearanceItemProps = {
  period: string;
  title: string;
  event: string;
  kind: string;
  image: string;
  imageAlt?: string;
  videoUrl?: string;
  appearanceLinks?: AppearanceLink[];
  children?: React.ReactNode;
};

const AppearanceItem = (props: AppearanceItemProps): JSX.Element => {
  const { period, title, event, kind, image, imageAlt, videoUrl, appearanceLinks, children } = props;

  return (
    <div className="AppearanceItem Tile">
      <div className="AppearanceItem-ImageContainer">
        {videoUrl ? (
          <VideoPlayer url={videoUrl} className="AppearanceItem-Image" />
        ) : (
          <img className="AppearanceItem-Image" src={image} alt={imageAlt} />
        )}
      </div>
      <div className="AppearanceItem-Header">{title}</div>
      <div className="AppearanceItem-Event">{event}</div>
      <div className="AppearanceItem-Kind">{kind}</div>
      <div className="AppearanceItem-Description">{children}</div>
      <div className="AppearanceItem-Links">
        {appearanceLinks?.map((item) => {
          return (
            <a
              key={item.name + item.link}
              className="AppearanceItem-FooterLink"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="AppearanceItem-LinkIcon"
                icon={item.awesomeFontIcon as IconProp}
              />
              <div className="AppearanceItem-LinkTitle">{item.name}</div>
            </a>
          );
        })}
      </div>
      <div className="AppearanceItem-Period">{period}</div>
    </div>
  );
};

export default AppearanceItem;

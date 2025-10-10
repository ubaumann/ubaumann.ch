import React from 'react';
import './TalkItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { TalkLink } from '../../model';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

type TalkItemProps = {
  period: string;
  title: string;
  event: string;
  image: string;
  imageAlt?: string;
  videoUrl?: string;
  talkLinks?: TalkLink[];
  children?: React.ReactNode;
};

const TalkItem = (props: TalkItemProps): JSX.Element => {
  const { period, title, event, image, imageAlt, videoUrl, talkLinks, children } = props;

  return (
    <div className="TalkItem Tile">
      <div className="TalkItem-ImageContainer">
        {videoUrl ? (
          <VideoPlayer url={videoUrl} className="TalkItem-Image" />
        ) : (
          <img className="TalkItem-Image" src={image} alt={imageAlt} />
        )}
      </div>
      <div className="TalkItem-Header">{title}</div>
      <div className="TalkItem-Event">{event}</div>
      <div className="TalkItem-Description">{children}</div>
      <div className="TalkItem-Links">
        {talkLinks?.map((item) => {
          return (
            <a
              key={item.name + item.link}
              className="TalkItem-FooterLink"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="TalkItem-LinkIcon"
                icon={item.awesomeFontIcon as IconProp}
              />
              <div className="TalkItem-LinkTitle">{item.name}</div>
            </a>
          );
        })}
      </div>
      <div className="TalkItem-Period">{period}</div>
    </div>
  );
};

export default TalkItem;

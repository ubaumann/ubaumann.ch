import './Talks.scss';
import TalkItem from '../TalkItem/TalkItem';
import { data } from '../../assets/data';
import Paragraph from '../Paragraph/Paragraph';

const Talks = (): JSX.Element => {
  return (
    <div className="Talks Section">
      <div className="Talks-Header">
        <div className="TileTitle">Talks</div>
      </div>
      <div className="Talks-List">
        {data.talks.map((p, i) => {
          return (
            <TalkItem
              key={i}
              period={p.period}
              title={p.title}
              event={p.event}
              image={p.img}
              imageAlt={p.imgAlt}
              videoUrl={p.videoUrl}
              talkLinks={p.talkLinks}
            >
              {p.paragraphs.map((paragraph, j) => {
                return <Paragraph key={j} paragraph={paragraph} />;
              })}
            </TalkItem>
          );
        })}
      </div>
    </div>
  );
};

export default Talks;

import './Appearances.scss';
import AppearanceItem from '../AppearanceItem/AppearanceItem';
import { data } from '../../assets/data';
import Paragraph from '../Paragraph/Paragraph';

const Appearances = (): JSX.Element => {
  return (
    <div className="Appearances Section">
      <div className="Appearances-Header">
        <div className="TileTitle">Appearances</div>
      </div>
      <div className="Appearances-List">
        {data.appearances.map((p, i) => {
          return (
            <AppearanceItem
              key={i}
              period={p.period}
              title={p.title}
              event={p.event}
              kind={p.kind}
              image={p.img}
              imageAlt={p.imgAlt}
              videoUrl={p.videoUrl}
              appearanceLinks={p.appearanceLinks}
            >
              {p.paragraphs.map((paragraph, j) => {
                return <Paragraph key={j} paragraph={paragraph} />;
              })}
            </AppearanceItem>
          );
        })}
      </div>
    </div>
  );
};

export default Appearances;

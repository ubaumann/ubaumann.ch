import './Skills.scss';
import ProgressBar from '../ProgressBar/ProgressBar';
import htmlLogo from '../../assets/technologies/html.png';
import sassLogo from '../../assets/technologies/sass.png';
import typescriptLogo from '../../assets/technologies/typescript.png';
import reactLogo from '../../assets/technologies/react.png';
import dotnetLogo from '../../assets/technologies/dotnet.png';
import csharpLogo from '../../assets/technologies/csharp.png';
import javaLogo from '../../assets/technologies/java.png';
import golangLogo from '../../assets/technologies/golang.png';
import grpcLogo from '../../assets/technologies/grpc.png';
import dockerLogo from '../../assets/technologies/docker.png';
import kubernetesLogo from '../../assets/technologies/kubernetes.png';

const Skills = (): JSX.Element => {
  return (
    <div className="Skills Tile">
      <div className="TileTitle">Professional Skills</div>
      <div className="Skills-Items">
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="HTML"
          progress={80}
          image={htmlLogo}
          imageAlt="html logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="SCSS"
          progress={80}
          image={sassLogo}
          imageAlt="sass logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="Typescript"
          progress={60}
          image={typescriptLogo}
          imageAlt="typescript logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="React"
          progress={50}
          image={reactLogo}
          imageAlt="react logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name=".Net"
          progress={40}
          image={dotnetLogo}
          imageAlt="dotnet logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="C#"
          progress={80}
          image={csharpLogo}
          imageAlt="csharp logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="Java"
          progress={50}
          image={javaLogo}
          imageAlt="java logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="Golang"
          progress={50}
          image={golangLogo}
          imageAlt="golang logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="gRPC"
          progress={60}
          image={grpcLogo}
          imageAlt="grpc logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="Docker"
          progress={70}
          image={dockerLogo}
          imageAlt="docker logo"
        />
        <ProgressBar
          cssClass="Skills-ProgressBar"
          name="Kubernetes"
          progress={70}
          image={kubernetesLogo}
          imageAlt="kubernetes logo"
        />
      </div>
    </div>
  );
};

export default Skills;

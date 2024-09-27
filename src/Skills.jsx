import HtmlLogo from './assets/skills/html-5.svg';
import CssLogo from './assets/skills/css3.svg';
import BootstrapLogo from './assets/skills/bootstrap.svg';
import TailWindLogo from './assets/skills/tailwind.svg';
import JavascriptLogo from './assets/skills/javascript-svg.svg';
import ReactLogo from './assets/skills/react.svg';
import ReduxLogo from './assets/skills/redux.svg';
import JavaLogo from './assets/skills/java-svg.svg';
import JspLogo from './assets/skills/jsp.svg';
import SpringBootLogo from './assets/skills/spring-boot.svg';
import AWSLogo from './assets/skills/awsblack.svg';
import SQLLogo from './assets/skills/mysql.svg';
import NodeLogo from './assets/skills/nodejs.svg';
import VscodeLogo from './assets/skills/vscode3.svg';
import EclipseLogo from './assets/skills/eclipse.svg';
import SaasLogo from './assets/skills/light-sass.svg';
import GitLogo from './assets/skills/git-merge.svg';
import GitHubLogo from './assets/skills/github.svg';
import WordpressLogo from './assets/skills/wordpress.svg';
import DSALogo from './assets/skills/DSA.svg';
import PostManAPILogo from './assets/skills/postman.svg';
import './skills.css';

const skillsData = [
  { logo: HtmlLogo, name: 'Html' },
  { logo: CssLogo, name: 'Css' },
  { logo: SaasLogo, name: 'Scss' },
  { logo: BootstrapLogo, name: 'Bootstrap' },
  { logo: TailWindLogo, name: 'TailWind' },
  { logo: JavascriptLogo, name: 'Javascript' },
  { logo: ReactLogo, name: 'React.Js' },
  { logo: ReduxLogo, name: 'Redux' },
  { logo: NodeLogo, name: 'Node.js' },
  { logo: JavaLogo, name: 'Java' },
  { logo: JspLogo, name: 'Jsp' },
  { logo: SpringBootLogo, name: 'SpringBoot' },
  { logo: AWSLogo, name: 'AWS' },
  { logo: SQLLogo, name: 'MySql' },
  { logo: VscodeLogo, name: 'VsCode' },
  { logo: EclipseLogo, name: 'Eclipse' },
  { logo: GitLogo, name: 'Git' },
  { logo: GitHubLogo, name: 'GitHub' },
  { logo: WordpressLogo, name: 'Wordpress'},
  { logo: DSALogo, name: 'Data Structure'},
  { logo: PostManAPILogo, name: 'Postman API'},
];

const Skills = () => {
  return (
    <>
    <div className='my-10 Skills' id='Skills'>
      <h1 className='font-serif text-5xl'>Skills</h1>
    </div>
      <div className="skills-container md:mx-20 lg:mx-28 p-10">
        <div className="skills-skew-wrapper">
          <div className="skills-scroll">
            <div className="skills-grid animate-scroll">
              {skillsData.concat(skillsData).map((skill, index) => (
                <div className="skill-item " key={index}>
                  <p className="flex items-center gap-4">
                    <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

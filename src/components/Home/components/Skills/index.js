import React from 'react';
import { FaReact, FaJsSquare, FaRetweet, FaCode, FaReadme, FaYoutube, FaFilm, FaHeadphones } from 'react-icons/fa';
import {DiReact, DiCode} from 'react-icons/di';
import { SiReduxsaga, SiNodedotjs, SiPhp, SiPython, SiAngular, SiGraphql, SiMongodb, } from 'react-icons/si';
import { MdFastfood } from 'react-icons/md'
import { LiaDocker } from 'react-icons/lia';
import { BiLogoFlask } from 'react-icons/bi';
import { Line } from 'rc-progress';
import { head } from 'ramda';
import renderIf from 'render-if';

const Category = ({ categoryName }: string) => <h3 className="fontColor py-4">{categoryName}</h3>;

const SkillItem = ({ children, percent }: { children: any, percent: number, showProgressBar: boolean }) => (
  <div className="flex flex-row items-center justify-center">
    <div className="flex flex-col items-center justify-center w-1/3 pr-4 pb-6">
      {children}
    </div>
    {renderIf(percent >= 0)(
      <div className="w-1/2 pb-12">
        <p className="text-right">
          {percent}
          %
        </p>
        <Line
          percent={percent}
          strokeWidth="1"
          strokeColor={head(children).props.style.color}
        />
      </div>,
    )}
  </div>
);

export const SkillsList = () => (
  <div className="flex flex-row">
    <div className="flex flex-col w-1/2 px-5 items-center">
      <Category
        categoryName="Skills"
      />
      <div className="flex flex-col w-full">
        <SkillItem
            percent="80"
        >
          <FaJsSquare
              style={{ color: '#f7df1e', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">JavaScript</h3>
        </SkillItem>
        <SkillItem
          percent="90"
        >
          <FaReact
            style={{ color: '#61dafb', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">ReactJS</h3>
        </SkillItem>
        <SkillItem
            percent="90"
        >
          <DiReact
              style={{ color: '#333333', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">React Native</h3>
        </SkillItem>
        <SkillItem
          percent="90"
        >
          <FaRetweet
            style={{ color: '#ad6cbe', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Redux</h3>
        </SkillItem>
        <SkillItem
            percent="90"
        >
          <SiReduxsaga
              style={{ color: '#ad6cbe', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Saga</h3>
        </SkillItem>
        <SkillItem
          percent="80"
        >
          <SiAngular
            style={{ color: '#ad6cbe', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Angular</h3>
        </SkillItem>
        <SkillItem
          percent="85"
        >
          <DiCode
            style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">ES6</h3>
        </SkillItem>
        <SkillItem
            percent="90"
        >
          <SiNodedotjs
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Node</h3>
        </SkillItem>
        <SkillItem
            percent="90"
        >
          <SiPhp
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">PHP</h3>
        </SkillItem>
        <SkillItem
            percent="80"
        >
          <SiPython
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Python</h3>
        </SkillItem>
        <SkillItem
            percent="85"
        >
          <LiaDocker
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Docker</h3>
        </SkillItem>
        <SkillItem
            percent="90"
        >
          <SiMongodb
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">MongoDB</h3>
        </SkillItem>
        <SkillItem
            percent="80"
        >
          <BiLogoFlask
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Flask</h3>
        </SkillItem>
        <SkillItem
            percent="80"
        >
          <SiGraphql
              style={{ color: '#000000', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">GraphQL</h3>
        </SkillItem>
      </div>
    </div>
    <div className="border b" />
    <div className="flex flex-col w-1/2 px-5 items-center" style={{justifyContent:"space-around"}}>
      <Category
        categoryName="Things I Love to do"
      />
      {/*<div className="flex flex-row w-1/2 justify-between pb-24 pt-16">*/}
        <SkillItem>
          <FaCode
            style={{ color: '#61dafb', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Code</h3>
        </SkillItem>
        <SkillItem>
          <FaReadme
            style={{ color: '#ad6cbe', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Read Articles</h3>
        </SkillItem>
      {/*</div>*/}
      {/*<div className="flex flex-row  w-1/2 justify-between pb-24">*/}
        <SkillItem>
          <FaYoutube
            style={{ color: 'red', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Youtube</h3>
        </SkillItem>
        <SkillItem>
          <FaFilm
            style={{ color: '#black', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Movies</h3>
        </SkillItem>
      {/*</div>*/}
      {/*<div className="flex flex-row  w-1/2 justify-between pb-24">*/}
        <SkillItem>
          <FaHeadphones
            style={{ color: '#FFB6C1', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Music</h3>
        </SkillItem>
        <SkillItem>
          <MdFastfood
            style={{ color: '#f4bf42', fontSize: 40 }}
          />
          <h3 className="text-center fontColor">Eat</h3>
        </SkillItem>
      {/*</div>*/}
    </div>
  </div>
);

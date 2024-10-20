import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

import { Intro } from './components/IntroMessage';
import { TopBar } from './components/TopBar';
import { AboutMeView } from './components/AboutMe';
import { SkillsList } from './components/Skills';
import {Icon} from "antd";

const NewIcon = ({
                     iconType, iconTitle, twoToneColor, value, custom = false, onClick = () => {
    }
                 }) => (
    <div className="flex flex-row items-center items-start" onClick={onClick}>
        {custom ? custom :
            <Icon type={iconType} theme="twoTone" twoToneColor={twoToneColor} style={{fontSize: '34px'}}/>}
        <h1 className="pl-3 font-sans text-lg text-grey-darkest">
            {`${iconTitle}: `}
        </h1>
        <p className="pl-3 font-sans text-lg text-grey-darkest">{value}</p>
    </div>
);

export default class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.focusAboutMe = React.createRef();
    this.focusMySkills = React.createRef();
  }

  onNavigate = (divName) => {
    if (this[divName].current) {
      this[divName].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }

  render() {
    return (
      <div>
        <div className="parallaxLinearGradient p-3 flex flex-col">
          <TopBar
            navigateTo={this.onNavigate}
          />
          <Intro
            message="Hey there!! Welcome"
            name="I`m a full stack developer mainly focusing on crafting a clean and readable code"
          />
          <div className="flex flex-col items-center">
            <FaAngleDoubleDown
              style={{ color: '#FFB6C1', fontSize: 40 }}
            />
            <p className="text-white">Scroll</p>
          </div>
        </div>
        <div className="py-10 px-4" ref={this.focusAboutMe}>
          <AboutMeView />
        </div>
        <div ref={this.focusMySkills}>
          <SkillsList />
        </div>
      </div>
    );
  }
}

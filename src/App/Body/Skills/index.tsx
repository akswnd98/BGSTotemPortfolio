import React, { useRef } from 'react';
import styles from './index.module.scss';
import Part from './Part';
import htmlSkill from '@/assets/images/html-skill.svg';
import jsSkill from '@/assets/images/js-skill.svg';
import reactSkill from '@/assets/images/react-skill.svg';
import zustandSkill from '@/assets/images/zustand-skill.svg';
import codemirrorSkill from '@/assets/images/codemirror-skill.svg';
import nodejsSkill from '@/assets/images/nodejs-skill.svg';
import sequelizeSkill from '@/assets/images/sequelize-skill.svg';
import expressSkill from '@/assets/images/express-skill.svg';
import mariadbSkill from '@/assets/images/mariadb-skill.svg';
import figmaSkill from '@/assets/images/figma-skill.svg';
import pwaSkill from '@/assets/images/pwa-skill.svg';
import gitSkill from '@/assets/images/git-skill.svg';
import cppSkill from '@/assets/images/cpp-skill.svg';
import { useStore } from '@/src/zustand/SetScrollTopToSkills';

function Skills () {
  const setInterface = useStore((state) => state.setInterface);
  const ref = useRef(null);
  setInterface(() => {
    if (ref.current !== null) {
      window.scrollTo(0, (ref.current as HTMLDivElement).offsetTop);
    }
  });

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Skills</div>
        <div className={styles.parts}>
          <Part partName={'Frontend'} skillPictograms={[htmlSkill, jsSkill, reactSkill, zustandSkill, codemirrorSkill]} />
          <Part partName={'Backend'} skillPictograms={[nodejsSkill, sequelizeSkill, expressSkill, mariadbSkill]} />
          <Part partName={'Design'} skillPictograms={[figmaSkill]} />
          <Part partName={'Cross platform'} skillPictograms={[pwaSkill]} />
          <Part partName={'etc'} skillPictograms={[gitSkill, cppSkill]} />
        </div>
      </div>
    </div>
  );
}

export default Skills;

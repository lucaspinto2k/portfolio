"use client";

import { FC } from 'react';
import SkillItem from './SkillItem';

export type SkillItem = {
  name: string;
  logoUrl?: string;
};

type SkillGridProps = {
  skills: SkillItem[];
};

const SkillGrid: FC<SkillGridProps> = ({ skills }) => (
  <div className="flex flex-wrap gap-3">
    {skills.map((skill) => (
      <SkillItem key={skill.name} {...skill} />
    ))}
  </div>
);

export default SkillGrid;

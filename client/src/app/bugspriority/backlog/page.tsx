import React from 'react'
import BugsPriorityPage from '../BugsPriorityPage';
import { Priority } from '@/state/api';


const Urgent = () => {
  return <BugsPriorityPage priority={Priority.Backlog} />;
}

export default Urgent
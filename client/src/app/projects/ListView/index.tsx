import React from 'react'

import Header from '@/components/Header';
import TaskCard from '@/components/TaskCard';
import { Task, useGetTasksQuery } from '@/state/api';
import ListCard from '@/components/ListCard';

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="px-4 pb-8 xl:px-6">
      <div className="pt-5">
        <Header
          name="List"
          buttonComponent={
            <button
              className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewTaskOpen(true)}
            >
              Add Task
            </button>
          }
          isSmallText
        />
      </div>
      <div className="mb-3 min-w-m max-w-4xl rounded bg-white p-2 shadow dark:bg-dark-secondary dark:text-white ">
        <ul role="list" className="grid grid-cols-1 gap-4 divide-y divide-gray-100">
          {tasks?.map((task: Task) => <ListCard key={task.id} task={task} />)}
        </ul>
      </div>
    </div>
  )
}


export default ListView
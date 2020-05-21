import React, { useState } from 'react';
import useSWR from 'swr'
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames'
import Icon from '../components/Icon'
import Link from "next/link";

const OpenToRemote = ({ open }) => {
  const className = classNames({ 'text-green-600': open, 'text-gray-800': !open })
  return <span className={className}>
    {open && <>Open to remote</>}
    {!open && <></>}
  </span>
}

const Role = ({ data, toggleFilterRole, filterRole }) => {
  const className = classNames(
    'mr-2',
    'rounded',
    'p-1 md:p-2',
    'cursor-pointer',
    'select-none',
    { 'bg-gray-300 hover:bg-gray-500': filterRole !== data },
    { 'bg-gray-500 hover:bg-gray-600': filterRole == data })
  return <button className={className} onClick={() => toggleFilterRole(data)}>{data}</button>
}

const Card = ({ record: { name, role, location, remote, github, twitter, linkedin, summary, personal }, toggleFilterRole, filterRole }) => {
  return <div className="bg-white relative shadow overflow-hidden sm:rounded-lg">
    <div className="px-2 pt-4 sm:px-8">
      <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900">
          {name}
        </h3>
        <span className='text-gray-800 text-sm'>{location} <OpenToRemote open={remote} /></span>
      </div>
    </div>
    <div className="px-2 py-2 sm:px-6">
      <div className='mt-2'>
        <Role data={role} filterRole={filterRole} toggleFilterRole={toggleFilterRole} />
      </div>
      <div className='pt-6'>
        <Markdown>{summary}</Markdown>
      </div>
      <div className="flex">
        {github && <a href={`https://github.com/${github}`} target='_blank'><Icon name='github' /></a>}
        {twitter && <a href={`https://twitter.com/${twitter}`} target='_blank'><Icon name='twitter' /></a>}
        {linkedin && <a href={`https://linkedin.com/in/${linkedin}`} target='_blank'><Icon name='linkedin' /></a>}

      </div>
      <div className=""><a href={personal} target='_blank'>{personal}</a></div>
    </div>
  </div>
}

export default function Home() {
  const { data, error } = useSWR('/api/get')
  const [filterRole, setFilterRole] = useState(null);

  if (!data) return null;

  const toggleFilterRole = (role) => {
    if (filterRole === role) {
      return setFilterRole(null);
    }

    setFilterRole(role);
  }

  const roleList = [...new Set(data.map(obj => obj.role))];
  let filteredData = data;
  if (filterRole) {
    filteredData = data.filter(d => d.role === filterRole);
  }

  return (
    <div className='p-4 md:p-8'>
      <div className='pb-4 w-5/6'>
        <h1 className='text-3xl md:text-5xl font-bold tracking-wide leading-snug text-black'>Browse through some of the talented individuals who have worked at Glitch.</h1>
        <p>More text about how much we love and appreciate all of these people, and how they've helped build the glitch the internet loves. </p>
      </div>
      {/* <div className='my-2 mb-6'>
        <h2 className='text-2xl py-2'>Filter By Role</h2>
        <div>
          {roleList.map(role => (<Role data={role} toggleFilterRole={toggleFilterRole} filterRole={filterRole} />))}
        </div>
      </div> */}
      <main className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map(record => (<Card
          key={record.name}
          toggleFilterRole={toggleFilterRole}
          record={record}
          filterRole={filterRole}
        />))}
      </main>
    </div>
  )
}

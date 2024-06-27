import OptionButton from './OptionButton.tsx'

const options = ['Github', 'Jira', 'Slack', 'Gmail', 'DataDog', 'AWS']

const OptionButtons = () => {
  return (
    <div
      className={'neubrutalist-box-fixed'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '200px',
      }}
    >
      {options.map((option) => (
        <OptionButton key={option} title={option} />
      ))}
    </div>
  )
}

export default OptionButtons

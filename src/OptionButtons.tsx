import OptionButton from './OptionButton.tsx'

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
      <OptionButton />
      <OptionButton />
      <OptionButton />
    </div>
  )
}

export default OptionButtons

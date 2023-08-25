import classes from './loadButton.module.scss'

const LoadButton = ({ createMoreTickets }) => {
  return <button className={classes['load-button']} onClick={createMoreTickets} />
}

export default LoadButton

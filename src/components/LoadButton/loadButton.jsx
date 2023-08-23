import classes from './loadButton.module.scss'

export default function LoadButton({ createMoreTickets }) {
  return <button className={classes['load-button']} onClick={createMoreTickets} />
}

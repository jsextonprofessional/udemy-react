import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.card}>
      {props.children}
      {/* <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Add To Favorites</button>
      </div> */}
    </div>
  );
}

export default Card;
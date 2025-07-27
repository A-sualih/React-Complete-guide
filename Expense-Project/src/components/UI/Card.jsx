import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
//children is a reserved name ant the value of this special children prop will always be the content between the opening and closing tags of your custom component
// we add that whatever is set as a class name on
//  card to this classname string were settin as  a class name
export default Card;

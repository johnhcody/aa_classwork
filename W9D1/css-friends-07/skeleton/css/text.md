
.parent {
  overflow: hidden; /* required */
  width: 50%; /* for demo only */
  height: 250px /* some non-zero number */;
  margin: 25px auto; /* for demo only */
  border:1px solid grey; /* for demo only */
  position: relative; /* required  for demo*/
}


.ribbon {
  margin: 0;
  padding: 0;
  background: rebeccapurple;
  color:white;
  padding:1em 0;
  position: absolute;
  top:0;
  right:0;
  transform: translateX(30%) translateY(0%) rotate(45deg);
  transform-origin: top left;
}
.ribbon:before,
.ribbon:after {
  content: '';
  position: absolute;
  top:0;
  margin: 0 -1px; /* tweak */
  width: 100%;
  height: 100%;
  background: rebeccapurple;
}
.ribbon:before {
  right:100%;
}

.ribbon:after {
  left:100%;
}
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    //alignItems: "center",
  },
  heading: {
    color: "rgba(200,200,200)",
  },
  image: {
    marginLeft: "15px",
  },
}));

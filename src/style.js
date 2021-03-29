const { makeStyles } = require("@material-ui/core");

const useStyle = makeStyles({
  iteamCard: { maxWidth: 345, height: 400 },
  iteamMedia: { height: 0, paddingTop: "56.25%" },
  headerRoot: { flexGrow: 1, marginBottom: 18 },
  grow: { flexGrow: 1 },
  cartMenu: { display: "flex", textAlign: "center", alignItems: "center" },
});

export default useStyle;

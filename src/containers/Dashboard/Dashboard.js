import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import Styles from "./Style";

class Dashboard extends Component {
  state = { expanded: false };
  //spread items we used unsafe so on the updated react version this will update automatically
  UNSAFE_componentWillMount() {
    //items here refere's to items inside tbl_item
    this.props.onFetchItems("items");
  }
  //handler turn to true on click
  handleExpandClick = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render() {
    //this.props onFetchItems("items"), items array(0) data and type items array(12)
    console.log(this.props);
    const { classes } = this.props;

    let data = [
      {
        id: 1,
        title: "test",
        created_at: "01-01-2019",
        updated_at: "01-01-2020",
        price: "60JD",
        category: "shoes"
      }
    ];
    //map item looper through all the items in localhost:8000/public/items/
    let itemsList = data.map(item => {
      let imageUrl = "http://localhost:8000/public/items/" + item.hash;

      return (
        <Grid item md={3} key={item.id}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={imageUrl}
              title={item.title}
              created_at={item.created_at}
              updated_at={item.updated_at}
            />
            <CardContent className={classes.title}>
              <Typography component="p">Price: {item.price}</Typography>
              <Typography component="p">Category: {item.category}</Typography>
              <Typography component="p">Title: {item.title}</Typography>
              <Typography component="p">
                Created at: {item.created_at}
              </Typography>
              <Typography component="p">
                Updated at: {item.created_at}
              </Typography>
            </CardContent>
            {/* flexed cards css*/}
          </Card>
        </Grid>
      );
    });

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Trending
        </Typography>
        <Divider />
        {/* marginTop: 10,marginBottom: 10,padding: 50 */}
        <Grid container spacing={24} className={classes.cardContainer}>
          {itemsList}
        </Grid>
      </React.Fragment>
    );
  }
}
//redux
const mapStateToProps = state => {
  return {
    items: state.itemsList.items
  };
};
///no clue
const mapDispatchToProps = dispatch => {
  return {
    onFetchItems: url => dispatch(actions.fetchItems(url))
  };
};
//redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Styles)(Dashboard));

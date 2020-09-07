import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import StarIcon from '@material-ui/icons/Star';
import ErrorIcon from '@material-ui/icons/Error';
class Cards extends Component {

    constructor(props){
        super(props);
        this.state ={
        }
    }


    render() {

        const style = {
            card : {
                maxWidth: "100%",
                margin : "2%",
            },
        };

        const {repo} = this.props;

        return (
            <div>
                <Card style={style.card}>
                    <CardActionArea>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src={'https://avatars2.githubusercontent.com/u/747750?v=4'}
                                    style={{background : "#ffffff"}}
                                />
                            }
                            title={<Typography variant="inherit" component="h4">{repo['name']}</Typography>}
                            subheader={<Typography variant="caption" component="h5">{repo['description']}</Typography>}
                        />

                        <CardActions >
                            <StarIcon fontSize="small" color="primary"/>
                            <Typography variant="body2"  component="h3">{repo['stargazers_count']}</Typography>
                            <ErrorIcon fontSize="small" color="secondary"/>
                            <Typography variant="body2"  component="h3">{repo['open_issues']}</Typography>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = () => {

    return {};
};

export default connect(mapStateToProps,{

})(Cards);


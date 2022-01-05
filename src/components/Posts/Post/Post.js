import React from 'react';
import { Card, CardActions, CardMedia, Button, Typography, CardContent} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://qph.fs.quoracdn.net/main-qimg-82ab6982e3c3f712b712467187d7a693-c'} creator={post.creator} />
      <div className={classes.overlay}>
        </div>
        {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
 
      {/* <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div> */}
  
        {/* <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
        {/* <div className={classes.details}>
      </div>
        <CardContent>
         <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
    
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent> */}
     
    
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> ARCHER  </Button>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> PIKEMEN  </Button>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> CAVALRY  </Button>

      </CardActions>
      <h2 >{post.creator}</h2>

      <h2> Player score   {post.creator} </h2>
      <h1>{post.playerCount}</h1>
      <h2> PS score   </h2>
      <h1>{post.computerCount}</h1>

           
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
    </Card>
  );
};

export default Post;

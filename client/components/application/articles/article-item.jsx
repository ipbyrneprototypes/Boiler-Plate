ArticleItem = React.createClass({
  propTypes: {
    article: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      comments: Comments.find({articleId: this.props.article._id}).fetch()
    };
  },

  render() {
    const title = this.props.article.title;
    const body = this.props.article.body;
    const thumb = this.props.article.thumb;
    const likes = this.props.article.likes;
    const username = this.props.article.username;
    const submitted = moment(this.props.article.submitted).format("MMM Do YY");
    const commentCount = this.data.comments.length;
    const gravatarURL = Gravatar.imageUrl(this.props.article.useremail);
    const articleURL = "/article/"+ this.props.article.slug;

    return (
      <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 article-item-div">
    		<a href={articleURL}>
    			<div className="row">
    				<div className="panel panel-default">
    					<div className="panel-heading text-center">
    						<h2>{title}</h2>
    					</div>
    					<div className="panel-body">
    						<div className="col-sm-12 text-center">
    							<img className="img-thumbnail" src={thumb}/>
    						</div>

    						<div className="col-sm-12">
    							<div id="body-preview">
    								<Markdown>{body}</Markdown>
    								<div id="fade"></div>
    							</div>
    						</div>

    						<div className="col-xs-12 text-center">
    							<h4>- Read More -</h4>
    						</div>
    					</div>
    					<div className="panel-footer text-center">
    						<br/>
    						<img className="img-circle" width="25" src={gravatarURL} />
    						<p className="article-item-name" href="#">by {username}</p>
    						<br/>
                <span className="article-item-date">{submitted}</span>
    					</div>
    				</div>
    			</div>
    		</a>
    	</div>
    );
  }
});

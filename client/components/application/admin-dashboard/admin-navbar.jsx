AdminNavbar = React.createClass({
  componentWillMount() {
    // Hide regulage header
    $("header").addClass("hide");
    $("#react-root").removeClass("container");
  },

  componentWillUnmount() {
    // Hide regulage header
    $("header").removeClass("hide");
    $("#react-root").addClass("container");
  },

  logOut(event) {
    event.preventDefault();

    Meteor.logout(function(error) {
			if(error) {
				toastr.error("Failed to Log Out... " + error);
			} else {
				toastr.success("Logged Out Successfully");
        FlowRouter.go('/');
			}
		});
  },

  render() {
    // Set SEO
    var SEOtitle = "Dashboard";
    DocHead.setTitle(SEOtitle);


    if(Meteor.user().profile.role === "Admin") {
      return (
        <div>
          <div className="nav-side-menu">
            <div className="brand"><a href="/">Application Name</a></div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            <div className="menu-list">
              <ul id="menu-content" className="menu-content collapse out">
                <li className="active">
                  <a href="/admin/dashboard">
                    <i className="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li>

                <li>
                  <a href="/admin/posts">
                    <i className="fa fa-file-text-o fa-lg"></i> Posts
                  </a>
                </li>

                <li>
                  <a href="/admin/comments">
                    <i className="fa fa-comment-o fa-lg"></i> Comments
                  </a>
                </li>

                <li>
                  <a href="/admin/users">
                    <i className="fa fa-users fa-lg"></i> Users
                  </a>
                </li>


                <li>
                  <a href="/admin/profile">
                    <i className="fa fa-user fa-lg"></i> Profile
                  </a>
                </li>

                <li>
                  <a onClick={this.logOut}>
                    <i className="fa fa-sign-out fa-lg"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="adminContentNavContainer">
            <div className="pull-right">
              <h2 className="adminNav"><a href="/"><i className="fa fa-home"></i></a></h2>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="nav-side-menu">
            <div className="brand"><a href="/">Application Name</a></div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            <div className="menu-list">
              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="/admin/profile">
                    <i className="fa fa-user fa-lg"></i> Profile
                  </a>
                </li>

                <li>
                  <a onClick={this.logOut}>
                    <i className="fa fa-sign-out fa-lg"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div id="adminContentNavContainer">
            <div className="pull-right">
              <h2 className="adminNav"><a href="/"><i className="fa fa-home"></i></a></h2>
            </div>
          </div>
        </div>
      )
    }
  }
});
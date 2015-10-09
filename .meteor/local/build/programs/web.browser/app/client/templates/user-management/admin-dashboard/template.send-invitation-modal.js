(function(){
Template.__checkName("sendInvitationModal");
Template["sendInvitationModal"] = new Template("Template.sendInvitationModal", (function() {
  var view = this;
  return HTML.Raw('<div class="modal fade" id="send-invitation-modal" tabindex="-1" role="dialog" aria-labelledby="send-invitation-modal" aria-hidden="true">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n          <h4 class="modal-title" id="send-invitation">Send Invitation</h4>\n        </div>\n        <form id="send-invite-form">\n          <div class="modal-body">\n            <div class="form-group">\n              <label>Email Address</label>\n							<input type="text" name="email" id="signup-email" class="form-control">\n            </div>\n            <div>\n              <label for="roles">User Role</label>\n              <select name="roles" class="form-control" id="user-roles">\n                <option value="">Select a role...</option>\n                <option value="admin">Admin</option>\n								<option value="Member">Member</option>\n              </select>\n            </div>\n          </div>\n          <div class="modal-footer">\n            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n            <button type="submit" class="btn btn-success">Send Invitation</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>');
}));

}).call(this);

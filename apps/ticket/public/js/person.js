module.exports.person = function (objectTemplate, uses)
{
	var ProjectRole = uses ('./project.js', 'ProjectRole');
	var TicketItem = uses('./ticket.js', 'TicketItem');

	objectTemplate.create("Person",
		{
			// Name
			firstName: {type: String, value: "", length: 40, rule: ["name", "required"]},
			middleName: {type: String, value: "", length: 40, rule: "name"},
			lastName: {type: String, value: "", length: 40, rule: ["name", "required"]},

			// Secure data elements never transmitted in both directions
			email: {toServer: false, type: String, value: "", length: 200},

			// Relationships
            projectRoles:           {type: Array, of: ProjectRole, value: {}},
            ticketItems:            {type: Array, of: TicketItem, value: {}},

			init: function (email, first, middle, last) {
				this.firstName = first || "";
				this.middleName = middle || "";
				this.lastName = last || ""
				this.email = email || "";
			},
			getFullName: function() {
				return this.firstName + (this.middleName ? " " + this.middleName  + " ": " ") + this.lastName;
			},
            save: function () {
               return this.persistSave();
            },
            remove: function () {
                if (this.getSecurityContext().isAdmin())
                    return this.persistDelete();
                else
                    return Q(false);
            }

		});


}



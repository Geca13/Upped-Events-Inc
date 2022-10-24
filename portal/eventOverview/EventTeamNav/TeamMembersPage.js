const BasePage = require('../../../BasePage');
const TableComponent = require('../../portalComponents/TableComponent')
const MEMBERS_TABLE = { id: "dataTable" }

class TeamMembersPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async openTeamMembersPageDirectly(eventId){
        await this.visit("https://dev.portal.uppedevents.com/dashboard/event/" + eventId + "/team/members")
        await this.isOnTeamMembersPage();
    }

    async isOnTeamMembersPage(){
        await this.isDisplayed(MEMBERS_TABLE, 5000);
    }

    async assertTeamMembersTableHeaders(){
        let table = new TableComponent(this.driver);
        await table.assertColumnNamesByIndex(0, "Email");
        await table.assertColumnNamesByIndex(1, "Role");
        await table.assertColumnNamesByIndex(2, "Category");
        await table.assertColumnNamesByIndex(3, "Actions");

    }



}
module.exports = TeamMembersPage;
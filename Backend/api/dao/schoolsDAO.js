let schools;

export default class SchoolsDAO {
  static async injectDB(conn) {
    if (schools) {
      return;
    }
    try {
      schools = await conn.db(process.env.LOOGANAPP_NS).collection("schools");
    } catch (e) {
      console.error(
        "Unable to establish a collection handle in schoolsDAO: " + err
      );
    }
  }

  static async getSchools({
      filters = null,
  })
}

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;
    if (result.role === "organization_admin") {
      const data = {
        name: result.organization_name,
        email: result.email,
        phone: result.phone,
        owner: result._id,
      };
      const res = await app.service("organizations").create(data);
      console.log("AFTER CREATING ORGANIZATION", res);
    }
    return context;
  };
};

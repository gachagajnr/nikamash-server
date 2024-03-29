// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;

    if (result.role === "organizationAdmin") {
      const data = {
        name: result.name,
        email: result.email,
        phone: result.phone,
        ownerId: result._id,
      };
      await app.service("organizations").create(data);
    }
    return context;
  };
};

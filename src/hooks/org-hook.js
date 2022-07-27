// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { sd } = context;
    const dat = {
      email: "gachagapius21@gmail.com",
      organization: "vacier",
      username: "test",
      phone: "070454636",
      role: "user",
    };
	data=dat
    // console.log(data);
    return context;
  };
};

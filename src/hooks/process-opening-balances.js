// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data, app } = context;
    const qc = await app.service("opening-balances").find({
      query: {
        day: data.day,
        $limit: 1,
      },
    });
    if (qc.total > 1) {
      throw new Error("Balances has already been added");
    }

    return context;
  };
};

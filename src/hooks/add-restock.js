// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;

    const res = await app.service("products").find({
      query: {
        name: result.name,
        $limit: 1,
      },
    });
    console.log(res);
    if (res.total <= 1) {
      await app.service("products").patch(res.data[0]._id, {
        units: res.data[0].units + result.units,
      });
    }
    return context;
  };
};

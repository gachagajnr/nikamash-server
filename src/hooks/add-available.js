// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;
    const res = await app.service("products").find({
      query: {
        name: result.name,
      },
    });

    if (res) {
      await app.service("products").patch(res.data[0]._id, {
        units: res.data[0].units + result.units,
        buyingPrice: result.buyingPrice,
      });
    }
    return context;
  };
};

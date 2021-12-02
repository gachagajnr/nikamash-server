// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { app, data } = context;
    console.log("DATA",data);

    let dat = data;
    dat.total = data.sellingPrice * data.units;

    const res = await app.service("products").find({
      query: {
        name: data.name,
        $limit: 1,
      },
    });
    // console.log(res);

    dat.bp = res.data[0].buyingPrice;
    // console.log( dat);

    if (res) {
      await app.service("products").patch(res.data[0]._id, {
        units: res.data[0].units - data.units,
      });
    }
    // console.log(res);

    return context;
  };
};

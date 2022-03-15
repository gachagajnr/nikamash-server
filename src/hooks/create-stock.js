// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result, app } = context;
    const data = {
      name: result.name,
      quantity: result.quantity,
      day: result.day,
      units: result.units,
    };

    const ap = await app.service("daily-stocks").find({
      query: {
        day: result.day,
        name: result.name,
        $limit: 1,
      },
    });
    if (ap.total >= 1) {
      await app.service("daily-stocks").patch(ap.data[0]._id, {
        units: ap.data[0].units + result.units,
      });
    } else {
      await app.service("daily-stocks").create(data);
    }

    // console.log("RESULT", res);

    return context;
  };
};

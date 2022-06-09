// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars

module.exports = (options = {}) => {
  return async (context) => {
    const { data, app } = context;
    // console.log(data);
    const ap = await app.service("daily-stocks").find({
      query: {
        day: data.day,
        name: data.name,
        $limit: 1,
      },
    });

    // console.log(ap);
    if (ap.total >= 1) {
      try {
        await Promise.all(
          app.service("daily-stocks").patch(ap.data[0]._id, {
            units: ap.data[0].units + parseInt(data.units),
          })
        );
      } catch (err) {
        throw new Error("Already Exists");
      }
    } else {
    }

    return context;
  };
};

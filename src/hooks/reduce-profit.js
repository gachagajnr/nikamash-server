// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { result,app } = context;
    
    await app.service("sales").patch(result._id, {
      profit: (result.sellingPrice - result.bp) * result.units,
    });
    return context;
  };
};

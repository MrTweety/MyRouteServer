module.exports = deleteRouteById = async (req, res) => {
    try {
      await res.route.remove();
      /*
       * TODO: delete comments
       * Comment.deleteMany({ _id: { $in: [10, 2, 3, 5]}}, function(err) {})
       */
      res.json({ message: "Deleted Route" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
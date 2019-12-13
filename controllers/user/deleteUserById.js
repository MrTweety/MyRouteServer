module.exports = deleteUserById = async (req, res) => {
  try {
    await res.user.remove();
    res.status(200).json({ message: "Deleted User" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.postAddBlog = async (req, res) => {
    let { title, body, userId } = req.body;
    let userExist = await user.findById(userId);
    if (userExist) {
      let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
      });
      await newBlog.save();
      userExist.blogs.push(newBlog._id);
      await userExist.save();
      res.json({
        success: true,
        data: newBlog,
        message: "blog added successfully"
      });
    }
  };
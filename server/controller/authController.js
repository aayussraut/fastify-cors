export const signUpHandler = async (req, reply) => {
  try {
    const user = await req.server.user.create({
      username: req.body.username,
      password: req.body.password,
    });
    reply.send(user);
  } catch (err) {
    console.log(err);
  }
};

export const signInHandler = async (req, reply) => {
  try {
    const user = await req.server.user.findOne({
      where: { username: req.body.username },
    });
    if (user.password === req.body.password) {
      console.log("\nYou Here\n");
      req.session.set("user", req.body.username);
      console.log(req.session);
      reply.send({ msg: "Logged in" });
    } else {
      reply.send({ msg: "Incorrect password" });
    }
  } catch (err) {
    console.log(err);
  }
};

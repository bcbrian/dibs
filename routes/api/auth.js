// const authController = require("../controllers/authcontroller");

// module.exports = {
//   api: function(app, passport) {
//     app.get("/signup", authController.signup);

//     app.get("/login", authController.login);

//     app.post(
//       "/signup",
//       passport.authenticate("local-signup", {
//         successRedirect: "/blogs",

//         failureRedirect: "/signup"
//       })
//     );

//     app.get("/blogs", authController.blogs);
//     app.post("/blogs", this.isLoggedIn, authController.createBlogs);
//     app.get("/blogs/new", this.isLoggedIn, authController.newBlog);
//     app.get("/blogs/:id", this.isLoggedIn, authController.showBlog);
//     app.get("/blogs/:id/edit", this.isLoggedIn, authController.editBlog);
//     app.put("/blogs/:id", this.isLoggedIn, authController.updateBlog);
//     app.delete("/blogs/:id", this.isLoggedIn, authController.deleteBlog);

//     app.get("/logout", authController.logout);

//     app.post(
//       "/login",
//       passport.authenticate("local-login", {
//         successRedirect: "/blogs",

//         failureRedirect: "/login"
//       })
//     );
//   },

//   isLoggedIn: function(req, res, next) {
//     if (req.isAuthenticated()) return next();

//     res.redirect("/signup");
//   }
// };

module.exports.users = function(req, res){
    return res.render('users', {
       users: 'User Profile' 
    });
};

module.exports.posts = function(req, res){
    return res.end('<h1>User Posts!!</h1>');
};

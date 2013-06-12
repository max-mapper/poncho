alternate implementation of hoodie.account:

    // sign up
    hoodie.account.signUp('joe@example.com', 'secret');
    
    // sign in
    hoodie.account.signIn('joe@example.com', 'secret');
    
    // sign out
    hoodie.account.signOut();
    
    // change password
    hoodie.account.changePassword('currentpassword', 'newpassword');
    
    // change username
    hoodie.account.changeUsername('currentpassword', 'newusername');
    
    // reset password
    hoodie.account.resetPassword('joe@example.com');
    
    // destroy account and all its data
    hoodie.account.destroy();
    
    // find out who the currently logged in user is (returns undefined if none)
    hoodie.account.username;
  
    // listen for account events
    // user has signed up (this also triggers the authenticated event, see below)
    hoodie.account.on('signup', function (user) {});
  
    // user has signed in (this also triggers the authenticated event, see below)
    hoodie.account.on('signin', function (user) {});
  
    // user has signed out
    hoodie.account.on('signout', function (user) {});
  
    // user has re-authenticated after their session timed out (this does _not_ trigger the signin event)
    hoodie.account.on('authenticated', function (user) {});
  
    // user's session has timed out. This means the user is still signed in locally, but Hoodie cannot sync remotely, so the user must sign in again
    hoodie.account.on('unauthenticated', function (user) {});

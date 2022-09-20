==============================================
[{userName: "Test", password: "asdasd"},
 {userName: "he", password: "asdasd"}]

 users.find(elem => elem.userName === userName); => true
 users.includes(userName) => false
==============================================
[
  ["Test"],
  ["he"]
]

users.find(elem => elem.includes(userName)) => TRUE
users.includes(userName) => false

==============================================
[
  "Test",
  "he"
]
users.includes(userName) => TRUE
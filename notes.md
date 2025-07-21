1.what is the difference between package.json & package-lock.json?
Ans:
2.what are dependencies?
3.how vesrions are named in 3 numbers like 1.0.0
4.backward compatibility
5.differnce between ~ and ^ in package.json version updates
Ans.if we use ^ it will automatally update to patch updates and minor vesions 
  if we use ~ it will only do patch upates.
    ~             ^
    1.0.0         1.0.0  both can do
    1.0.1          1.0.1 both can do
    1.1.1          1.1.1 ~ can't do but ^ can update because ~has capability of doing only patch updates not minor versions.
   
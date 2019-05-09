# Enter your code here. Read input from STDIN. Print output to STDOUT
for i in range(int(raw_input())):
    a,b=int(raw_input()),map(int,raw_input().split())
    p,q=0,a-1
    while b[p]>=b[p+1]:
        p+=1
    m1=p
    while b[q]>=b[q-1]:
        q-=1
    m2=q
    if m1>=m2:
        print "Yes"
    else:
        print "No"
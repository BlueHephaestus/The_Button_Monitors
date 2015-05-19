"""from subprocess import Popen, PIPE, STDOUT

p = Popen('phantomjs thebutton.js', stdout = PIPE, 
        stderr = STDOUT, shell = True)
for line in p.stdout:
    print line.replace('\n', '')
from selenium import webdriver

print 'Loading Firefox...'
driver = webdriver.Firefox()
print 'Loading Link...'
driver.get("http://www.reddit.com/r/thebutton")
#print(driver.find_element_by_id("//span[@id='thebutton-s-1']"))
n = 0
while n < 1:
	element =  driver.find_element_by_xpath("//span[@class = 'thebutton-participants']")
	print element.text
"""
#selenium too slow, how to use phantomjs/casperjs

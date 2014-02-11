TESTING FRAMEWORK

This testing suite will allow a user to create test cases that will be read and run through our testing harness. Templates are available to create your own test cases following our specified format. All test cases will be run through the component with the specified inputs, created into source code and run. The outputs are collected and inserted into a report with specific information about each test case.

I. Dependencies

You must check out the entire repository to run this testing suite. These are the required tools to be able to run this testing suite, and specifically to run it to test Snort. 
TEST SUITE:
Unix Based System
BASH or BASH Compatible Shell
g++
cstdlib
Python 2.x
HTML5/CSS3 Compatible Browser
Subversion
C or C++
Snort Source Code
	
II. File Structure

Our repository is created within a version control system called Subversion. This is the structure of the repository. There are no spaces in any folder or file names. Check out the repository at the highest folder level. Always remember to update.

/TEAM4_TESTING 
Team4_Deliverable1.pdf
Team4_Deliverable2.pdf
Team4_Deliverable3.pdf
Team4_Deliverable4.pdf
Team4_Deliverable5.pdf
poster.svg
poster.png
logo.svg
logo.png
/INT_TEAM_EQUALS_4
Readme.txt
docs/
oracles/
project/
	contains all source code for Snort
reports/
	empty until script is run, then html report will be located here
resources/
	css/
		stylesheets for report
img/
	images for report
js/
	javascript files for report
templateCPP.cpp - template to be used for created the C++ code
testCaseTemplate.txt - template for creating a test case
scripts/
build - script that will build all Snort source code for user
faults - script that activates injection of faults
runAllTests - script that runs testing framework
temp/
testCases/
	testCase101.txt
	testCase102.txt
	…
	testCase201.txt
	...
testCasesExecutables/


III. Acquiring the Framework

See Deliverable 5 for architecture diagram.

Use username/password to access team4 subversion. Checkout all files from the SVN repository from the top level (/TEAM4).

Location of repository: https://svn.cs.cofc.edu/repos/CSCI362201302/team4


IV. Building Snort Source Code

We have made a script to automatically build the source code for you. To do this, run the script found at ‘scripts/build’ inside the project folder. Alternatively, we have also made the source code available to you in our repository. This source code is contained in ‘project/’ subfolder. A useful tutorial can be found on the Xmodulo blog, located at http://xmodulo.com/2013/08/how-to-compile-and-install-snort-from-source-code-on-ubuntu.html.


V. Architecture of Framework


The chart above describes the architecture of our testing framework. Our testing script is written in a Python. The C files, from the Snort source code and test case text files are sent into the testing script. The testing script takes all of the information from the test case file to use to create each test. We have written our script to all for each method to be searched for within the source code. From there, a C++ file is created to send the specified inputs, outputs, method, and dependencies. Everything is sent back to the script, which then creates an HTML report.

For more information about the C++ file, see section C++ Code Created below.

VI. Using Test Case Template

Reference the test case template located in ‘resources/testCaseTemplate.txt’.

testnumber
Should be same as file name. Replace template with this number when saving.
requirement
Requirement being tested by the test case.
component
Component being tested. Needs to match that component’s file name (case sensitive).
method
Name of method being tested. Only include the name, no parameters (case sensitive).
testinputs
Arguments used to call the function.
oracle
Expected outcome.
linenumber
Line number method is found in the component. These are inclusive.
outputtype
Data type the function is expected to output. The return type should explicitly match the return type of the function being tested, as it will be used to instantiate a variable for that return type.
~DEPENDENCIES~
Required dependencies should be placed here. Anything located at this point will be directly inserted into the resulting C++ file for compilation including: 
non-Local Variables
non-Local Objects
inherited Classes
instantiated Classes
included Interfaces
required Libraries
required #DEFINE

Note: If the component being testing requires the use of a C library, the equivalent C++ library needs to be included instead. To find this, you may go http://cplusplus.com/reference/clibrary. 

After each test case file is created, it must be saved as “testCase[number].txt”. The testing script will only grab files, from the ‘testCase/’ folder with this specific standard of file name. All other files in this folder will be ignored. Commit this text file to ‘‘testCase/’ folder to be read by the script. 

VII. Running Testing Framework

Make sure to update from the repository before running the testing suite. The script for the testing suite is located under ‘scripts/’. From the terminal, you can type ‘./runAllTests’. 
The script can also be run from your local version of the repository in your file browser. You can click on the file called ‘runAllTests’ under the ‘scripts/’ folder. A message will appear, allowing you to either ‘run’ or ‘run in terminal’.
Running the script empties the report folder each time. After you run the script, all of the resource files needed for the report display will be piped over to this folder from the ‘resources/” folder.  The script will pop up in an internet browser window. The “report.html” file can also be found in this reports folder for later viewing. If you rerun the script, a new report will be generated.

VIII. C++ Code Created

Units are tested through direct compilation of the function. The function is extracted directly from the file being tested and is inserted into a C++ template. Any dependencies are inserted before the declaration of main in the template file and if an output is specified, the cout statement is replaced with the user defined code. This file is compiled for testing.

IX. Interpreting Report

See Deliverable 5 for a sample of the report.
 
Test Case
		Name of the test case being run.
Method
		The function or method being tested.
Inputs
		The inputs passed to the function or method being tested.
Oracle
		The expected output of the tested function or method.
Output
		The actual output of the tested function or method.
Results
		Pass if actual output matches expected output. Else, fail.
Requirement
		This will show up when you mouse over the test case number. It is the functional requirement being tested.



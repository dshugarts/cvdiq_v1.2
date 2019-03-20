# cvdiq_v1.2

## Alpha
- [x] Create a home page
- [x] Rename pages something more understandable
	- [x] test renamed routes
- [x] User permissions/roles
	- [x] user role in dbms
- [x] Validate routes backend
- [x] Fix sql calls on backend
- [x] Untangled Health - Name Change
	- [x] Motto
	- [x] change in page title/head
- [x] Remove empty button on dashboard
- [x] when incorrect credentials, clear textboxes
- [x] when score = NaN, show score of 0

## Bravo
- [x] Users create profile instead of just login
	- [x] update dbms to copy starr health
	- [x] email
	- [x] disclaimer 
	- [x] user role
- [x] Fix score calculation/display timing
	- [x] After submitting data, route directly to dashboard
	- [x] After login, route directly to dashboard
- [x] After first login, direct to enter new data
- [x] Add sweet alerts
	- [x] after score entered
	- [x] after update metric
- [x] Validate routes front end (user role validation)
- [x] Remove favicon
- [x] Implement .env file for api keys

## Charlie
- [x] Incorporate suggestions into detailed report table to combine the two pages
	- [x] show points earned
	- [x] all links in this table
- [x] Move enter new data link to dashboard and remove from toolbar
- [x] Move update data to detailed report as link or individually into table
	- [x] Remove Button from enter data page so you can only update from the new report page button

## Delta
- [x] Revised metrics
	- [x] map out new matrix for confirmation
	- [x] finish scoring algorithm
	- [x] update dbms to reflect a new table and post correctly
	- [x] update gauge and reporting to reflect new data
	- [x] implement update existing data for new metrics
	- [x] update report and suggestions to reflect new data
	- [x] code new matrix and push for testing
	- [x] Update scoreChart to new metrics
- [x] Remove DOB from general_info page and DBMS

## Echo - Part 1
- [ ] PDF Print Page of Detailed Report
	- [ ] Progress Bar for Points Earned in PDF Report
	- [x] Source filestack
- [ ] Add copy to homepage
- [x] Update Disclaimer
- [ ] Report Charts need to go to correct charts for new metrics
- [ ] My Suggestions are not loading
- [ ] Refactor stress dispaly in report to include management of stress
- [ ] Make stress management radio button only appear if total stress is 3-5
- [ ] Fix loss of data on page refresh (call dataArray in controller??)
- [ ] Fix route timing
- [ ] Update all copy from Daniel
	- [ ] Update DBMS Report Data
	- [ ] Update Risk ranges in report/scoring (what numbers are high, moderate and low)
	- [ ] Update in Score Chart as well to reflect new risk ranges
- [ ] Waist moderate values added to scoring service

## Echo - Part 2
- [ ] Remove console logs
- [ ] Alpha Testing
- [ ] Final Deploy
- [ ] Beta Testing

## Foxtrot
- [ ] Register user page should look different than login (instructions, dual password, etc)
- [ ] Refactor controllers and services with new names
- [ ] resources into report table
- [ ] Change Radio button displays on modify_entry page
	- [ ] Change DBMS from boolean to string
- [ ] Change About page to mission, goals, etc.. (and hide it)
- [ ] Admin User Role
	- [ ] Admin Dashboard View
- [ ] Admin Reporting
	- [ ] Dynamic report table with button for suggestions only if value yellow or red
- [ ] Add account settings page on dashboard
	- [ ] Change Password
	- [ ] Add Photo
	- [ ] PDF Reporting
- [ ] Fix date display on charts to remove time

## Golf
- [ ] Switch to angular material
- [ ] Refactor to starrhealth when angular material
- [ ] Mobile view detailed revision
- [ ] DOB to general_info and create age automatically
- [ ] Remove gender from form and into signup process

## Hotel
- [ ] Apple Health Movement API Integration
